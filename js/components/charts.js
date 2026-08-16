/* =========================================================================
 * PROTEIN ATLAS SIBIU — CHARTS
 *
 * Hand-written inline SVG. No libraries, no network.
 *
 * Design rules enforced here:
 *  - The macro donut is the ONLY chart that encodes categories by hue, and
 *    it has exactly four fixed slots (protein, carbs, fat, fiber) drawn in
 *    that order, validated for colourblind separation, with a legend that
 *    prints the grams and the percentage next to every swatch. Colour is
 *    never the only carrier of identity.
 *  - The radar is a single series, so it needs no legend — the title names
 *    it, and every axis is directly labelled with its value.
 *  - The scatter has up to 8 categories, which is more than any hue set can
 *    separate for colourblind readers. So it does NOT colour by category:
 *    it uses a sequential single-hue ramp on protein purity, which is the
 *    question the chart actually answers. Category comes from the tooltip.
 *  - One axis per chart. Never two y-scales.
 *  - Every chart ships a data-table alternative.
 *
 * Attaches to window.PF.charts
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});
  const fmt = PF.fmt;
  const t = k => PF.i18n.t(k);

  const SVG_NS = 'http://www.w3.org/2000/svg';

  /* =======================================================================
   * 1. MACRO DONUT
   * Part-to-whole: where the calories come from.
   * ==================================================================== */
  function donut(food, opts) {
    const o = opts || {};
    const d = food._d;
    const size = o.size || 158;
    const stroke = o.stroke || 22;
    const r = (size - stroke) / 2 - 2;
    const cx = size / 2;
    const cy = size / 2;
    const circumference = 2 * Math.PI * r;

    /* The 2px surface gap between adjacent segments, expressed as a fraction
     * of the circle so it survives any radius. */
    const gapPx = 3;

    const slots = [
      { k: 'protein', v: d.energyShare.protein },
      { k: 'carbs', v: d.energyShare.carbs },
      { k: 'fat', v: d.energyShare.fat },
      { k: 'fiber', v: d.energyShare.fiber }
    ].filter(s => s.v > 0.4);

    let offset = 0;
    const arcs = slots
      .map(function (s) {
        const len = (s.v / 100) * circumference;
        const drawn = Math.max(1, len - gapPx);
        const arc =
          '<circle class="pf-donut__seg pf-donut__seg--' + s.k + '" ' +
          'cx="' + cx + '" cy="' + cy + '" r="' + r.toFixed(2) + '" ' +
          'stroke-dasharray="' + drawn.toFixed(2) + ' ' + (circumference - drawn).toFixed(2) + '" ' +
          'stroke-dashoffset="' + (-offset).toFixed(2) + '" ' +
          'transform="rotate(-90 ' + cx + ' ' + cy + ')">' +
          '<title>' + fmt.esc(t('card.' + s.k) + ': ' + Math.round(s.v) + '% din calorii') + '</title>' +
          '</circle>';
        offset += len;
        return arc;
      })
      .join('');

    const centerValue = o.centerValue !== undefined ? o.centerValue : Math.round(d.purityPct);
    const centerLabel = o.centerLabel || '% PROTEINĂ';

    return (
      '<div class="pf-donut">' +
      '<svg class="pf-donut__svg" viewBox="0 0 ' + size + ' ' + size + '" role="img" ' +
      'aria-label="' + fmt.esc('Distribuția caloriilor: ' +
        slots.map(s => t('card.' + s.k) + ' ' + Math.round(s.v) + '%').join(', ')) + '">' +
      '<circle class="pf-donut__track" cx="' + cx + '" cy="' + cy + '" r="' + r.toFixed(2) + '"/>' +
      arcs +
      '<text class="pf-donut__center-v" x="' + cx + '" y="' + (cy + 2) + '">' + centerValue + '</text>' +
      '<text class="pf-donut__center-k" x="' + cx + '" y="' + (cy + 18) + '">' +
      fmt.esc(centerLabel) + '</text>' +
      '</svg>' +
      PF.ui.macroLegend(food) +
      '</div>'
    );
  }

  /* =======================================================================
   * 2. STAT RADAR — one series, six labelled axes
   * ==================================================================== */
  const RADAR_AXES = [
    { key: 'protein', label: 'stat.protein' },
    { key: 'purity', label: 'stat.purity' },
    { key: 'value', label: 'stat.value' },
    { key: 'convenience', label: 'stat.convenience' },
    { key: 'taste', label: 'stat.taste' },
    { key: 'satiety', label: 'stat.satiety' }
  ];

  function radar(food, opts) {
    const o = opts || {};
    const size = o.size || 300;
    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.32;
    const bars = food._d.bars;

    const pt = function (i, frac) {
      const angle = (Math.PI * 2 * i) / RADAR_AXES.length - Math.PI / 2;
      return {
        x: cx + Math.cos(angle) * radius * frac,
        y: cy + Math.sin(angle) * radius * frac
      };
    };

    /* Web rings at 25/50/75/100. */
    let web = '';
    [0.25, 0.5, 0.75, 1].forEach(function (frac) {
      const pts = RADAR_AXES.map((_, i) => {
        const p = pt(i, frac);
        return p.x.toFixed(1) + ',' + p.y.toFixed(1);
      }).join(' ');
      web += '<polygon class="pf-radar__web" points="' + pts + '"/>';
    });

    /* Spokes. */
    let spokes = '';
    RADAR_AXES.forEach(function (_, i) {
      const p = pt(i, 1);
      spokes +=
        '<line class="pf-radar__spoke" x1="' + cx + '" y1="' + cy +
        '" x2="' + p.x.toFixed(1) + '" y2="' + p.y.toFixed(1) + '"/>';
    });

    /* The series. */
    const seriesPts = RADAR_AXES.map(function (a, i) {
      const p = pt(i, fmt.clamp(bars[a.key] || 0, 0, 100) / 100);
      return p.x.toFixed(1) + ',' + p.y.toFixed(1);
    });

    let dots = '';
    RADAR_AXES.forEach(function (a, i) {
      const p = pt(i, fmt.clamp(bars[a.key] || 0, 0, 100) / 100);
      dots += '<circle class="pf-radar__dot" cx="' + p.x.toFixed(1) + '" cy="' +
        p.y.toFixed(1) + '" r="4"/>';
    });

    /* Direct labels — every axis named and valued, so the shape is readable
     * without any colour perception at all. */
    let labels = '';
    RADAR_AXES.forEach(function (a, i) {
      const p = pt(i, 1.26);
      const anchor =
        Math.abs(p.x - cx) < 6 ? 'middle' : p.x > cx ? 'start' : 'end';
      labels +=
        '<text class="pf-radar__label" x="' + p.x.toFixed(1) + '" y="' +
        p.y.toFixed(1) + '" text-anchor="' + anchor + '">' +
        fmt.esc(t(a.label)) + '</text>' +
        '<text class="pf-radar__value" x="' + p.x.toFixed(1) + '" y="' +
        (p.y + 12).toFixed(1) + '" text-anchor="' + anchor + '">' +
        Math.round(bars[a.key] || 0) + '</text>';
    });

    return (
      '<div class="pf-radar">' +
      '<svg class="pf-radar__svg" viewBox="0 0 ' + size + ' ' + size + '" role="img" ' +
      'aria-label="' + fmt.esc(
        RADAR_AXES.map(a => t(a.label) + ' ' + Math.round(bars[a.key] || 0) + ' din 100').join(', ')
      ) + '">' +
      web + spokes +
      '<polygon class="pf-radar__area" points="' + seriesPts.join(' ') + '"/>' +
      dots + labels +
      '</svg>' +
      '</div>'
    );
  }

  /* =======================================================================
   * 3. SCATTER — protein per 100 g (y) vs calories per 100 g (x)
   *
   * The single most useful picture in the whole atlas: the top-left corner
   * is "lots of protein, few calories" and that is where you want to shop.
   * ==================================================================== */
  function scatter(foods, opts) {
    const o = opts || {};
    const w = o.width || 900;
    const h = o.height || 460;
    const pad = { t: 20, r: 22, b: 44, l: 52 };
    const plotW = w - pad.l - pad.r;
    const plotH = h - pad.t - pad.b;

    const maxKcal = o.maxKcal || 620;
    const maxProtein = o.maxProtein || 92;

    const X = v => pad.l + (fmt.clamp(v, 0, maxKcal) / maxKcal) * plotW;
    const Y = v => pad.t + plotH - (fmt.clamp(v, 0, maxProtein) / maxProtein) * plotH;

    /* --- grid + axes ------------------------------------------------- */
    let grid = '';
    const xTicks = [0, 100, 200, 300, 400, 500, 600];
    const yTicks = [0, 15, 30, 45, 60, 75, 90];

    xTicks.forEach(function (v) {
      const x = X(v);
      grid +=
        '<line class="pf-grid-line" x1="' + x.toFixed(1) + '" y1="' + pad.t +
        '" x2="' + x.toFixed(1) + '" y2="' + (pad.t + plotH) + '"/>' +
        '<text class="pf-axis-text" x="' + x.toFixed(1) + '" y="' +
        (pad.t + plotH + 15) + '" text-anchor="middle">' + v + '</text>';
    });

    yTicks.forEach(function (v) {
      const y = Y(v);
      grid +=
        '<line class="pf-grid-line" x1="' + pad.l + '" y1="' + y.toFixed(1) +
        '" x2="' + (pad.l + plotW) + '" y2="' + y.toFixed(1) + '"/>' +
        '<text class="pf-axis-text" x="' + (pad.l - 8) + '" y="' +
        (y + 3).toFixed(1) + '" text-anchor="end">' + v + '</text>';
    });

    /* --- the "good corner" shading and the 40%-purity guide ---------- */
    /* A food sits on the 40%-of-calories-from-protein line when
     * protein*4 = 0.40*kcal, i.e. protein = kcal/10. */
    const guideA = 'M' + X(0) + ',' + Y(0) + ' L' + X(maxKcal) + ',' + Y(maxKcal / 10);
    /* And the 20% line: protein = kcal/20. */
    const guideB = 'M' + X(0) + ',' + Y(0) + ' L' + X(maxKcal) + ',' + Y(maxKcal / 20);

    const guides =
      '<path class="pf-scatter__guide" d="' + guideA + '"/>' +
      '<path class="pf-scatter__guide" d="' + guideB + '"/>' +
      '<text class="pf-scatter__guide-label" x="' + (X(maxKcal) - 6) + '" y="' +
      (Y(maxKcal / 10) - 6) + '" text-anchor="end">40% din calorii = proteină</text>' +
      '<text class="pf-scatter__guide-label" x="' + (X(maxKcal) - 6) + '" y="' +
      (Y(maxKcal / 20) - 6) + '" text-anchor="end">20%</text>';

    /* --- dots: sequential ramp on purity, one hue, light to dark ----- */
    const dots = foods
      .map(function (f) {
        const d = f._d;
        /* Sequential encoding: one hue, lightness carries magnitude. */
        const step = fmt.clamp(d.purityPct / 70, 0, 1);
        const light = 78 - step * 42;      // 78% → 36%
        const sat = 34 + step * 40;        // 34% → 74%
        const colour = 'hsl(168 ' + sat.toFixed(0) + '% ' + light.toFixed(0) + '%)';
        return (
          '<circle class="pf-scatter__dot" data-id="' + fmt.esc(f.id) + '" ' +
          'cx="' + X(d.kcal100).toFixed(1) + '" cy="' + Y(d.protein100).toFixed(1) + '" ' +
          'fill="' + colour + '">' +
          '<title>' + fmt.esc(
            (f.nameRo || f.name) + ' — ' + fmt.num(d.protein100, 1) + ' g proteină, ' +
            Math.round(d.kcal100) + ' kcal, ' + Math.round(d.purityPct) + '% din calorii'
          ) + '</title></circle>'
        );
      })
      .join('');

    /* --- sequential legend ------------------------------------------- */
    const legendSteps = [10, 25, 40, 55, 70];
    const legend = legendSteps
      .map(function (v) {
        const step = fmt.clamp(v / 70, 0, 1);
        const light = 78 - step * 42;
        const sat = 34 + step * 40;
        return (
          '<span class="pf-legend-row__swatch" style="--c:hsl(168 ' +
          sat.toFixed(0) + '% ' + light.toFixed(0) + '%)" title="' + v + '%"></span>'
        );
      })
      .join('');

    return (
      '<div class="pf-scatter">' +
      '<div class="pf-chart__title">Proteină vs. calorii — la 100 g</div>' +
      '<div class="pf-chart__sub">Colțul din stânga-sus e locul unde vrei să cumperi: ' +
      'multă proteină, puține calorii. Culoarea arată ce procent din calorii vine din proteină.</div>' +
      '<svg class="pf-scatter__svg" viewBox="0 0 ' + w + ' ' + h + '" ' +
      'preserveAspectRatio="xMidYMid meet" role="img" ' +
      'aria-label="Grafic de dispersie: proteină la 100 g pe axa verticală, calorii la 100 g pe axa orizontală, ' +
      foods.length + ' produse.">' +
      grid + guides + dots +
      '<line class="pf-axis-line" x1="' + pad.l + '" y1="' + (pad.t + plotH) +
      '" x2="' + (pad.l + plotW) + '" y2="' + (pad.t + plotH) + '"/>' +
      '<line class="pf-axis-line" x1="' + pad.l + '" y1="' + pad.t +
      '" x2="' + pad.l + '" y2="' + (pad.t + plotH) + '"/>' +
      '<text class="pf-axis-title" x="' + (pad.l + plotW / 2) + '" y="' + (h - 6) +
      '" text-anchor="middle">kcal la 100 g</text>' +
      '<text class="pf-axis-title" x="' + 12 + '" y="' + (pad.t + plotH / 2) +
      '" text-anchor="middle" transform="rotate(-90 12 ' + (pad.t + plotH / 2) + ')">' +
      'g proteină la 100 g</text>' +
      '</svg>' +
      '<div class="pf-macrolegend" style="justify-content:flex-end;align-items:center;gap:6px">' +
      '<span>10%</span>' + legend + '<span>70%+ din calorii din proteină</span>' +
      '</div>' +
      '</div>'
    );
  }

  /* =======================================================================
   * 4. RANKED BAR ROW — used by the leaderboards
   * ==================================================================== */
  function rankBar(value, maxValue, color, display) {
    const pct = maxValue > 0 ? (value / maxValue) * 100 : 0;
    return (
      '<div class="pf-rankbar">' +
      '<span class="pf-rankbar__track"><span class="pf-rankbar__fill" style="--v:' +
      fmt.clamp(pct, 0, 100).toFixed(1) + ';--c:' + (color || 'var(--macro-protein)') +
      '"></span></span>' +
      '<span class="pf-rankbar__val">' + fmt.esc(String(display)) + '</span>' +
      '</div>'
    );
  }

  /* =======================================================================
   * 5. HISTOGRAM — distribution of protein across the whole atlas
   * ==================================================================== */
  function histogram(values, bins, max) {
    const n = bins || 24;
    const hi = max || Math.max.apply(null, values);
    const buckets = new Array(n).fill(0);
    values.forEach(function (v) {
      const idx = Math.min(n - 1, Math.floor((v / hi) * n));
      buckets[idx]++;
    });
    const peak = Math.max.apply(null, buckets) || 1;
    const lo = Math.min.apply(null, values);
    const sorted = values.slice().sort(function (a, b) { return a - b; });
    const med = sorted[Math.floor(sorted.length / 2)];
    return (
      '<div class="pf-histo" role="img" aria-label="' +
      fmt.esc('Distribuția proteinei: ' + values.length + ' produse, de la ' +
        fmt.num(lo, 0) + ' la ' + fmt.num(hi, 0) + ' g la 100 g, median ' +
        fmt.num(med, 0) + ' g') + '">' +
      buckets
        .map(function (b, i) {
          const lo = Math.round((i / n) * hi);
          const up = Math.round(((i + 1) / n) * hi);
          return (
            '<div class="pf-histo__bar" style="height:' +
            Math.max(3, (b / peak) * 100).toFixed(1) + '%" data-tip="' +
            fmt.esc(lo + '–' + up + ' g: ' + b + ' produse') + '"></div>'
          );
        })
        .join('') +
      '</div>'
    );
  }

  /* =======================================================================
   * 6. DATA TABLE FALLBACK — every chart must have one
   * ==================================================================== */
  function chartTable(headers, rows) {
    return (
      '<table class="pf-chart__table"><thead><tr>' +
      headers.map(h => '<th>' + fmt.esc(h) + '</th>').join('') +
      '</tr></thead><tbody>' +
      rows
        .map(r => '<tr>' + r.map(c => '<td>' + fmt.esc(String(c)) + '</td>').join('') + '</tr>')
        .join('') +
      '</tbody></table>'
    );
  }

  PF.charts = {
    donut: donut,
    radar: radar,
    scatter: scatter,
    rankBar: rankBar,
    histogram: histogram,
    chartTable: chartTable,
    RADAR_AXES: RADAR_AXES,
    SVG_NS: SVG_NS
  };
})();
