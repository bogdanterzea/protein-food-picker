/* =========================================================================
 * PROTEIN ATLAS SIBIU — PERSISTENCE
 * localStorage with a namespace, JSON encoding and a graceful fallback to
 * an in-memory store when storage is unavailable (private mode, file://
 * restrictions in some browsers).
 * Attaches to window.PF.store
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});
  const NS = 'pf.atlas.v1.';

  /* `backend` is the live Storage object, or null once we know there isn't
   * one. `probed` separates "not looked yet" from "looked and found nothing",
   * which a single null could not express — be() would have re-run the probe
   * on every call after a failure, and after set() demoted a dying
   * localStorage it would have resurrected it on the very next read. */
  let backend = null;
  let probed = false;
  const memory = {};

  function detect() {
    try {
      const k = NS + '__probe';
      window.localStorage.setItem(k, '1');
      window.localStorage.removeItem(k);
      return window.localStorage;
    } catch (e) {
      /* No storage: private mode, a file:// origin, or a blocking policy.
       * Not an error to report — the in-memory fallback below covers it and
       * isPersistent() tells the UI to stop promising anything is saved. */
      return null;
    }
  }

  function be() {
    if (!probed) {
      backend = detect();
      probed = true;
    }
    return backend;
  }

  function get(key, fallback) {
    const store = be();
    try {
      const raw = store ? store.getItem(NS + key) : memory[key];
      if (raw === null || raw === undefined) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function set(key, value) {
    const raw = JSON.stringify(value);
    const store = be();
    try {
      if (store) store.setItem(NS + key, raw);
      else memory[key] = raw;
      return true;
    } catch (e) {
      /* Quota exceeded or blocked mid-session. Write to memory AND demote the
       * backend permanently — otherwise get() would keep reading the dead
       * localStorage and never see the value we just saved here. */
      memory[key] = raw;
      backend = null;
      probed = true;
      return false;
    }
  }

  function remove(key) {
    const store = be();
    try {
      if (store) store.removeItem(NS + key);
    } catch (e) {
      /* Nothing useful to do and nothing to tell the user: the memory delete
       * below still happens, so the value is gone for this session either
       * way. Reported by isPersistent(), not by throwing at the caller. */
    }
    delete memory[key];
  }

  function clearAll() {
    const store = be();
    try {
      if (store) {
        const doomed = [];
        for (let i = 0; i < store.length; i++) {
          const k = store.key(i);
          if (k && k.indexOf(NS) === 0) doomed.push(k);
        }
        doomed.forEach(k => store.removeItem(k));
      }
    } catch (e) {
      /* Same as remove(): the in-memory wipe below still runs, so "clear my
       * data" is honoured for the session even if the disk refuses. */
    }
    Object.keys(memory).forEach(k => delete memory[k]);
  }

  function isPersistent() {
    return !!be();
  }

  /* -----------------------------------------------------------------------
   * SET HELPERS — favourites, compare list, checked shopping items
   * -------------------------------------------------------------------- */
  function getSet(key) {
    const arr = get(key, []);
    return new Set(Array.isArray(arr) ? arr : []);
  }

  function saveSet(key, theSet) {
    set(key, Array.from(theSet));
  }

  function toggleInSet(key, id) {
    const s = getSet(key);
    if (s.has(id)) s.delete(id);
    else s.add(id);
    set(key, Array.from(s));
    return s;
  }

  /* -----------------------------------------------------------------------
   * URL HASH STATE — shareable filter state
   * -------------------------------------------------------------------- */
  /* Keys whose value is free text a human typed, so it must survive readHash()
   * exactly as written. Everything else is app state and gets coerced.
   * `q` was already exempt from the number rule — but not from the comma rule,
   * so a search for "ton, pui" came back as the array ['ton', ' pui'] and the
   * search box was restored holding "ton, pui".toString() nonsense. */
  const TEXT_KEYS = ['q'];

  function readHash() {
    const raw = window.location.hash.replace(/^#/, '');
    if (!raw) return null;
    try {
      const params = new URLSearchParams(raw);
      const out = {};
      params.forEach((v, k) => {
        if (TEXT_KEYS.indexOf(k) !== -1) out[k] = v;
        else if (v.indexOf(',') !== -1) out[k] = v.split(',');
        else if (v === 'true') out[k] = true;
        else if (v === 'false') out[k] = false;
        else if (v !== '' && !Number.isNaN(Number(v))) out[k] = Number(v);
        else out[k] = v;
      });
      return out;
    } catch (e) {
      /* A hash we cannot parse is not state we can restore. Returning null
       * makes the caller fall back to its defaults rather than half-apply. */
      return null;
    }
  }

  /* Long enough that dragging a slider writes once instead of forty times,
   * short enough that the address bar is already shareable by the time the
   * user reaches for it. */
  const HASH_DEBOUNCE_MS = 200;

  let hashTimer = null;
  function writeHash(obj) {
    clearTimeout(hashTimer);
    hashTimer = setTimeout(function () {
      const params = new URLSearchParams();
      Object.keys(obj).forEach(k => {
        const v = obj[k];
        if (v === null || v === undefined || v === '' || v === false) return;
        if (Array.isArray(v)) {
          if (!v.length) return;
          params.set(k, v.join(','));
        } else {
          params.set(k, String(v));
        }
      });
      const str = params.toString();
      /* Clearing the state must not also clear a query string the page was
       * opened with — replaceState with a bare pathname would drop it. */
      const next = str
        ? '#' + str
        : window.location.pathname + (window.location.search || '');
      try {
        window.history.replaceState(null, '', next);
      } catch (e) {
        /* file:// may reject replaceState — harmless */
      }
    }, HASH_DEBOUNCE_MS);
  }

  PF.store = {
    get: get,
    set: set,
    remove: remove,
    clearAll: clearAll,
    isPersistent: isPersistent,
    getSet: getSet,
    saveSet: saveSet,
    toggleInSet: toggleInSet,
    readHash: readHash,
    writeHash: writeHash
  };
})();
