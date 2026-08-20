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

  /** What every formatter prints when it has nothing true to say. */
  const DASH = '—';

  function setLocale(l) {
    LOCALE = l === 'en' ? 'en-GB' : 'ro-RO';
  }

  /** Decimal separator of the active locale: Romanian writes 5,4 not 5.4. */
  function decimalSep() {
    return LOCALE === 'ro-RO' ? ',' : '.';
  }

  /**
   * The finite number behind a value, or null when there is none.
   *
   * Every public formatter funnels through this instead of repeating the
   * null / undefined / NaN / Infinity dance. A missing field, a division by
   * zero upstream, or a stray string must all reach the screen as "—" — never
   * as the literal "NaN", never as "Infinity", and never as a thrown
   * TypeError from calling .toFixed() on something that is not a number.
   */
  function finiteOf(v) {
    if (v === null || v === undefined) return null;
    const x = typeof v === 'number' ? v : Number(v);
    return Number.isFinite(x) ? x : null;
  }

  /* -----------------------------------------------------------------------
   * NUMBERS
   * -------------------------------------------------------------------- */

  /**
   * Round to n decimals and drop trailing zeros.
   * 21.0 -> "21", 21.53 -> "21.5" (n=1), 0.04 -> "<0.1" (n=1) / "0.04" (n=2)
   */
  function num(v, decimals) {
    const x = finiteOf(v);
    if (x === null) return DASH;
    const d = decimals === undefined ? 1 : decimals;
    const step = Math.pow(10, d);
    const rounded = Math.round(x * step) / step;
    /* A positive value that rounds to zero is, by definition, below half of
     * the smallest step this many decimals can show. Printing "0" would claim
     * it is nothing, so print the step instead — "<0.1" at one decimal,
     * "<0.01" at two, "<1" at none. The bound follows the decimals rather
     * than being hard-coded, which is what made num(0.004, 2) answer "<0.1". */
    if (rounded === 0 && x > 0) return '<' + (1 / step).toFixed(d);
    // String(-0) is "0", so a rounded-away negative never prints as "-0".
    return String(rounded);
  }

  /** num() in the active locale's separator: "5,4" in RO, "5.4" in EN. */
  function dec(v, decimals) {
    return num(v, decimals).replace('.', decimalSep());
  }

  /** Integer with thousands separators. */
  function int(v) {
    const x = finiteOf(v);
    if (x === null) return DASH;
    return Math.round(x).toLocaleString(LOCALE);
  }

  /** Grams: "21 g", "0.4 g" */
  function g(v, decimals) {
    return num(v, decimals === undefined ? 1 : decimals) + ' g';
  }

  /** Percentage: "42%" */
  function pct(v, decimals) {
    return num(v, decimals === undefined ? 0 : decimals) + '%';
  }

  /** kcal, grouped by the locale: "1.240 kcal" in RO, "1,240 kcal" in EN. */
  function kcal(v) {
    return int(v) + ' kcal';
  }

  /**
   * Romanian lei: "12,49 lei" / "12.49 lei"
   *
   * Zero reads as "no price known", not as free — nothing in this database
   * costs 0 lei, so a zero can only mean a missing or broken figure.
   */
  function ron(v, decimals) {
    const x = finiteOf(v);
    if (x === null || x === 0) return DASH;
    const d = decimals === undefined ? 2 : decimals;
    return x.toFixed(d).replace('.', decimalSep()) + ' lei';
  }

  /* Above 100 lei the bani are noise on a chip; below 10 lei they are the
   * difference between two products, so they stay. */
  const RON_WHOLE_ABOVE = 100;
  const RON_BANI_BELOW = 10;

  /** Compact price for tight spaces: "12,5 lei" */
  function ronShort(v) {
    const x = finiteOf(v);
    if (x === null || x === 0) return DASH;
    if (x >= RON_WHOLE_ABOVE) return Math.round(x) + ' lei';
    return ron(x, x < RON_BANI_BELOW ? 2 : 1);
  }

  /**
   * A price the app is NOT sure about.
   *
   * Every price in this project is an estimate, so the default rendering
   * carries `≈`. Passing `verified: true` drops the marker — that is the
   * only way an exact-looking price can ever appear on screen.
   */
  function ronApprox(v, opts) {
    const x = finiteOf(v);
    if (x === null || x === 0) return DASH;
    const o = opts || {};
    const body = o.short ? ronShort(x) : ron(x, o.decimals);
    return o.verified ? body : '≈ ' + body;
  }

  /** "≈ 30 lei (24–36)" — the number plus the honest spread around it. */
  function ronRange(v, lo, hi, opts) {
    const x = finiteOf(v);
    /* Same "zero is a missing price" rule as ron() and ronApprox(); before,
     * ronRange(0, 0, 0) was the one path that printed "≈ 0 lei (0–0)". */
    if (x === null || x === 0) return DASH;
    const o = opts || {};
    if (o.verified) return ron(x, o.decimals);
    const l = finiteOf(lo);
    const h = finiteOf(hi);
    if (l === null || h === null) return ronApprox(x, o);
    /* dec(), not num(): the range sits next to ron() output on the same card,
     * and mixing "5,40 lei" with "(4.3–6.5)" looks like two different apps. */
    const d = x < RON_BANI_BELOW ? 1 : 0;
    return '≈ ' + dec(x, d) + ' lei (' + dec(l, d) + '–' + dec(h, d) + ')';
  }

  /* -----------------------------------------------------------------------
   * TIME
   * -------------------------------------------------------------------- */

  /**
   * 0 -> "instant", 8 -> "8 min", 95 -> "1 h 35 min"
   *
   * Call sites pass a language code as a second argument; it is ignored, and
   * always was — "instant", "h" and "min" read the same in RO and EN, so the
   * two branches of the old ternaries were byte-identical.
   *
   * A missing time (an entry without `activeTimeMin`, say) must render as an
   * em dash — the old code printed "NaN h" straight onto the card.
   */
  function minutes(v) {
    const n = finiteOf(v);
    if (n === null) return DASH;
    if (n <= 0) return 'instant';
    if (n < 60) return n + ' min';
    const h = Math.floor(n / 60);
    const m = n % 60;
    return m ? h + ' h ' + m + ' min' : h + ' h';
  }

  /* Bucket edges, in minutes: "quick" is what you can do while the kettle
   * boils, "medium" is a weeknight, anything longer is a project. */
  const TIME_QUICK_MAX = 10;
  const TIME_MEDIUM_MAX = 30;

  /**
   * A short bucket used for colour-coding the time chip.
   *
   * A missing time is 'unknown', not a bucket: it used to answer 'instant'
   * for null and 'slow' for undefined, so the same absent field painted the
   * chip green or red depending on which flavour of nothing it held.
   */
  function timeBucket(v) {
    const n = finiteOf(v);
    if (n === null) return 'unknown';
    if (n <= 0) return 'instant';
    if (n <= TIME_QUICK_MAX) return 'quick';
    if (n <= TIME_MEDIUM_MAX) return 'medium';
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
  /* One letter matches almost every row, so highlighting it turns the list
   * into a wall of <mark>. Two is where the marks start meaning something. */
  const MIN_HIGHLIGHT_LEN = 2;

  function highlight(text, query) {
    const raw = text === null || text === undefined ? '' : String(text);
    if (!query) return esc(raw);
    const nq = normalize(query).trim();
    if (nq.length < MIN_HIGHLIGHT_LEN) return esc(raw);

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
    const src = String(s);
    let res = '';
    for (let i = 0; i < src.length; i++) {
      const ch = src[i];
      /* Lowercase ONE character at a time and refuse any mapping that changes
       * the character count — 'İ' (U+0130) lowercases to two code points and
       * would shift every subsequent highlight() offset by one. Such a
       * character keeps its original form; it does not occur in Romanian. */
      const lower = ch.toLowerCase();
      const one = lower.length === 1 ? lower : ch;
      res += DIACRITICS[one] || one;
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

  /* Back up to a word boundary only while at least this much of the budget
   * survives. "Brânză de burduf" cut at 20 would otherwise fall back to the
   * first space and leave the stub "Brânză…". */
  const TRUNCATE_WORD_FLOOR = 0.6;

  /** Truncate with an ellipsis at a word boundary. */
  function truncate(s, max) {
    if (s === null || s === undefined) return '';
    const str = String(s);
    if (str.length <= max) return str;
    const cut = str.slice(0, max);
    const lastSpace = cut.lastIndexOf(' ');
    return (lastSpace > max * TRUNCATE_WORD_FLOOR ? cut.slice(0, lastSpace) : cut) + '…';
  }

  /**
   * Pluralise Romanian-style: 1 produs / 2 produse / 21 de produse.
   * Romanian inserts "de" once the last two digits leave the 1–19 window,
   * which is why 101 stays "101 produse" while 120 becomes "120 de produse".
   */
  function plural(n, one, few, many) {
    const abs = Math.abs(n);
    if (abs === 1) return n + ' ' + one;
    const mod100 = abs % 100;
    /* `abs === 0` used to be spelled out here too; it is already covered by
     * `abs < 20`, and so was every value the middle clause caught below 20. */
    if (abs < 20 || (mod100 >= 1 && mod100 <= 19)) return n + ' ' + few;
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

  /* slug() lived here — normalize() + dashes, the inverse of titleize(). It
   * had no caller in the app, none in the tools and none in the tests: ids in
   * js/data/*.js are written by hand, so nothing ever needs to derive one.
   * Deleted rather than kept "just in case"; normalize() is still exported and
   * a slug is two .replace() calls away if a caller ever appears. */

  PF.fmt = {
    setLocale: setLocale,
    num: num,
    dec: dec,
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
    scale: scale
  };
})();
