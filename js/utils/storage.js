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

  let backend = null;
  const memory = {};

  function detect() {
    try {
      const k = NS + '__probe';
      window.localStorage.setItem(k, '1');
      window.localStorage.removeItem(k);
      return window.localStorage;
    } catch (e) {
      return null;
    }
  }

  function be() {
    if (backend === null) backend = detect();
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
      backend = false;
      return false;
    }
  }

  function remove(key) {
    const store = be();
    try {
      if (store) store.removeItem(NS + key);
    } catch (e) {
      /* ignore */
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
      /* ignore */
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
  function readHash() {
    const raw = window.location.hash.replace(/^#/, '');
    if (!raw) return null;
    try {
      const params = new URLSearchParams(raw);
      const out = {};
      params.forEach((v, k) => {
        if (v.indexOf(',') !== -1) out[k] = v.split(',');
        else if (v === 'true') out[k] = true;
        else if (v === 'false') out[k] = false;
        else if (v !== '' && !Number.isNaN(Number(v)) && k !== 'q') out[k] = Number(v);
        else out[k] = v;
      });
      return out;
    } catch (e) {
      return null;
    }
  }

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
      const next = str ? '#' + str : window.location.pathname;
      try {
        window.history.replaceState(null, '', next);
      } catch (e) {
        /* file:// may reject replaceState — harmless */
      }
    }, 200);
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
