/* =========================================================================
 * PROTEIN ATLAS SIBIU — FORMAT UTILITIES
 * Number, currency, time and text formatting. Locale-aware (ro-RO / en-GB).
 * Attaches to window.PF.fmt
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});

  /** Current locale, switched by the i18n module. */
  let LOCALE = 'ro-RO';

  function setLocale(l) {
    LOCALE = l === 'en' ? 'en-GB' : 'ro-RO';
  }

  /* -----------------------------------------------------------------------
   * NUMBERS
   * -------------------------------------------------------------------- */

  /**
   * Round to n decimals and drop trailing zeros.
   * 21.0 -> "21", 21.53 -> "21.5" (n=1), 0.04 -> "0.04"
   */
  function num(v, decimals) {
    if (v === null || v === undefined || Number.isNaN(v)) return '—';
    const d = decimals === undefined ? 1 : decimals;
    const rounded = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
    // Small non-zero values must not collapse to "0".
    if (rounded === 0 && v > 0 && v < 0.05) return '<0.1';
    return String(rounded);
  }

  /** Integer with thousands separators. */
  function int(v) {
    if (v === null || v === undefined || Number.isNaN(v)) return '—';
    return Math.round(v).toLocaleString(LOCALE);
  }

  /** Grams: "21 g", "0.4 g" */
  function g(v, decimals) {
    return num(v, decimals === undefined ? 1 : decimals) + ' g';
  }

  /** Percentage: "42%" */
  function pct(v, decimals) {
    return num(v, decimals === undefined ? 0 : decimals) + '%';
  }

  /** kcal: "1 240 kcal" */
  function kcal(v) {
    return int(v) + ' kcal';
  }

  /** Romanian lei: "12,49 lei" / "12.49 RON" */
  function ron(v, decimals) {
    if (v === null || v === undefined || Number.isNaN(v) || v === 0) return '—';
    const d = decimals === undefined ? 2 : decimals;
    return v.toFixed(d).replace('.', LOCALE === 'ro-RO' ? ',' : '.') + ' lei';
  }

  /** Compact price for tight spaces: "12,5 lei" */
  function ronShort(v) {
    if (!v) return '—';
    if (v >= 100) return Math.round(v) + ' lei';
    return ron(v, v < 10 ? 2 : 1);
  }

  /**
   * A price the app is NOT sure about.
   *
   * Every price in this project is an estimate, so the default rendering
   * carries `≈`. Passing `verified: true` drops the marker — that is the
   * only way an exact-looking price can ever appear on screen.
   */
  function ronApprox(v, opts) {
    if (v === null || v === undefined || Number.isNaN(v) || v === 0) return '—';
    const o = opts || {};
    const body = o.short ? ronShort(v) : ron(v, o.decimals);
    return o.verified ? body : '≈ ' + body;
  }

  /** "≈ 30 lei (24–36)" — the number plus the honest spread around it. */
  function ronRange(v, lo, hi, opts) {
    if (v === null || v === undefined || Number.isNaN(v)) return '—';
    const o = opts || {};
    if (o.verified) return ron(v, o.decimals);
    if (lo === null || lo === undefined || hi === null || hi === undefined) {
      return ronApprox(v, o);
    }
    const d = v < 10 ? 1 : 0;
    return '≈ ' + num(v, d) + ' lei (' + num(lo, d) + '–' + num(hi, d) + ')';
  }

  /* -----------------------------------------------------------------------
   * TIME
   * -------------------------------------------------------------------- */

  /** 0 -> "instant", 8 -> "8 min", 95 -> "1 h 35 min" */
  function minutes(v, lang) {
    const ro = lang !== 'en';
    if (v === 0) return ro ? 'instant' : 'instant';
    if (v < 60) return v + ' min';
    const h = Math.floor(v / 60);
    const m = v % 60;
    const hLabel = ro ? 'h' : 'h';
    return m ? h + ' ' + hLabel + ' ' + m + ' min' : h + ' ' + hLabel;
  }

  /** A short bucket used for colour-coding the time chip. */
  function timeBucket(v) {
    if (v <= 0) return 'instant';
    if (v <= 10) return 'quick';
    if (v <= 30) return 'medium';
    return 'slow';
  }

  /* -----------------------------------------------------------------------
   * TEXT
   * -------------------------------------------------------------------- */

  /** Escape for safe insertion into innerHTML. */
  function esc(s) {
    if (s === null || s === undefined) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * Wrap every occurrence of `query` in the text with <mark>.
   * Diacritic-insensitive, case-insensitive. Input is escaped first.
   */
  function highlight(text, query) {
    const raw = text === null || text === undefined ? '' : String(text);
    if (!query) return esc(raw);
    const nq = normalize(query).trim();
    if (nq.length < 2) return esc(raw);

    /* Search the RAW text and escape each slice afterwards. Searching the
     * escaped text instead would let a match land inside an entity — a query
     * of "amp" would wrap the middle of "&amp;" and emit broken markup. */
    const nText = normalize(raw);
    const out = [];
    let cursor = 0;
    let idx = nText.indexOf(nq);
    while (idx !== -1) {
      out.push(esc(raw.slice(cursor, idx)));
      out.push('<mark>' + esc(raw.slice(idx, idx + nq.length)) + '</mark>');
      cursor = idx + nq.length;
      idx = nText.indexOf(nq, cursor);
    }
    out.push(esc(raw.slice(cursor)));
    return out.join('');
  }

  /**
   * Strip Romanian diacritics and lowercase, so "brânză" matches "branza".
   * NOTE: this must preserve string LENGTH so highlight() offsets stay valid.
   */
  const DIACRITICS = {
    'ă': 'a', 'â': 'a', 'á': 'a', 'à': 'a', 'ä': 'a',
    'î': 'i', 'í': 'i', 'ì': 'i', 'ï': 'i',
    'ș': 's', 'ş': 's', 'ś': 's',
    'ț': 't', 'ţ': 't',
    'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
    'ó': 'o', 'ò': 'o', 'ö': 'o', 'ô': 'o',
    'ú': 'u', 'ù': 'u', 'ü': 'u', 'û': 'u',
    'ç': 'c', 'ñ': 'n'
  };

  function normalize(s) {
    let out = String(s).toLowerCase();
    let res = '';
    for (let i = 0; i < out.length; i++) {
      const ch = out[i];
      res += DIACRITICS[ch] || ch;
    }
    return res;
  }

  /** Title-case a slug: "ready-to-eat" -> "Ready To Eat" */
  function titleize(slug) {
    return String(slug)
      .split(/[-_\s]+/)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

  /** Truncate with an ellipsis at a word boundary. */
  function truncate(s, max) {
    if (!s || s.length <= max) return s || '';
    const cut = s.slice(0, max);
    const lastSpace = cut.lastIndexOf(' ');
    return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut) + '…';
  }

  /** Pluralise Romanian-style: 1 produs / 2 produse / 21 de produse */
  function plural(n, one, few, many) {
    const abs = Math.abs(n);
    if (abs === 1) return n + ' ' + one;
    const mod100 = abs % 100;
    if (abs === 0 || (mod100 >= 1 && mod100 <= 19) || abs < 20) {
      return n + ' ' + few;
    }
    return n + ' de ' + (many || few);
  }

  /* -----------------------------------------------------------------------
   * MISC
   * -------------------------------------------------------------------- */

  function clamp(v, lo, hi) {
    return Math.min(hi, Math.max(lo, v));
  }

  /** Map v from [inLo,inHi] into [outLo,outHi], clamped. */
  function scale(v, inLo, inHi, outLo, outHi) {
    if (inHi === inLo) return outLo;
    const t = clamp((v - inLo) / (inHi - inLo), 0, 1);
    return outLo + t * (outHi - outLo);
  }

  /** Deterministic pseudo-random in [0,1) from a string seed. */
  function hashRand(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return ((h >>> 0) % 100000) / 100000;
  }

  function slug(s) {
    return normalize(s)
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  PF.fmt = {
    setLocale: setLocale,
    num: num,
    int: int,
    g: g,
    pct: pct,
    kcal: kcal,
    ron: ron,
    ronShort: ronShort,
    ronApprox: ronApprox,
    ronRange: ronRange,
    minutes: minutes,
    timeBucket: timeBucket,
    esc: esc,
    highlight: highlight,
    normalize: normalize,
    titleize: titleize,
    truncate: truncate,
    plural: plural,
    clamp: clamp,
    scale: scale,
    hashRand: hashRand,
    slug: slug
  };
})();
