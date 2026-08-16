/* =========================================================================
 * PROTEIN ATLAS SIBIU — TOOLTIPS
 *
 * Why this is JavaScript and not a `::after` pseudo-element:
 *
 * The original tooltip was `[data-tip]::after`, which lives INSIDE the
 * layout. That produced four separate bugs:
 *   1. Any ancestor with `overflow: hidden` clipped it — inside a dossier
 *      block you saw only the bottom sliver of an empty rounded box, which
 *      read as "a card appears above but you can't see it".
 *   2. `.pf-modal { overflow: hidden }` cut the tier badge's tooltip.
 *   3. Even at `opacity: 0` it still contributed scrollable overflow, so
 *      views full of tooltips (boards, chart) grew a phantom horizontal
 *      scrollbar with nothing visible in it.
 *   4. Once a parent got `overflow-x: auto`, that phantom width became a
 *      real, visible scrollbar inside the panel.
 *
 * One fixed-position element appended to <body> has none of those problems,
 * and it can also flip and clamp itself against the viewport edges.
 *
 * The authoring API is unchanged: put `data-tip="..."` on anything.
 * Attaches to window.PF.tooltip
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});

  let el = null;
  let current = null;
  let showTimer = null;
  const GAP = 10;      /* distance from the anchor */
  const EDGE = 8;      /* minimum distance from the viewport edge */
  const DELAY = 90;    /* ms before showing, so passing the mouse over is quiet */

  function ensure() {
    if (el) return el;
    el = document.createElement('div');
    el.className = 'pf-tip';
    el.setAttribute('role', 'tooltip');
    el.id = 'pf-tip';
    el.hidden = true;
    document.body.appendChild(el);
    return el;
  }

  /**
   * Place the bubble above the anchor, flipping below when there is not
   * enough headroom, and clamping horizontally so it never leaves the screen.
   */
  function place(anchor) {
    const tip = ensure();
    const a = anchor.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    /* Measure at the final width before deciding anything. */
    tip.style.maxWidth = Math.min(280, vw - EDGE * 2) + 'px';
    const t = tip.getBoundingClientRect();

    let top = a.top - t.height - GAP;
    let below = false;
    if (top < EDGE) {
      top = a.bottom + GAP;
      below = true;
    }
    /* If it does not fit below either, pin it to whichever side has room. */
    if (below && top + t.height > vh - EDGE) {
      top = Math.max(EDGE, Math.min(top, vh - t.height - EDGE));
    }

    let left = a.left + a.width / 2 - t.width / 2;
    left = Math.max(EDGE, Math.min(left, vw - t.width - EDGE));

    tip.style.left = Math.round(left) + 'px';
    tip.style.top = Math.round(top) + 'px';
    tip.dataset.side = below ? 'below' : 'above';

    /* The little arrow tracks the anchor even when the bubble was clamped. */
    const arrow = Math.round(a.left + a.width / 2 - left);
    tip.style.setProperty('--arrow-x', Math.max(12, Math.min(arrow, t.width - 12)) + 'px');
  }

  function show(anchor) {
    const text = anchor.getAttribute('data-tip');
    if (!text) return;
    const tip = ensure();
    current = anchor;
    tip.textContent = text;
    tip.hidden = false;
    /* Position after the text is in, so the measurement is real. */
    place(anchor);
    /* Force a reflow so the fade has a start value, then reveal in the SAME
     * tick. requestAnimationFrame would be cleaner, but Chrome throttles it
     * in unfocused tabs — the tooltip would silently never appear. */
    void tip.offsetHeight;
    tip.classList.add('is-on');
  }

  function hide() {
    current = null;
    clearTimeout(showTimer);
    if (!el) return;
    el.classList.remove('is-on');
    /* Keep it out of the a11y tree and off the hit-testing path. */
    el.hidden = true;
  }

  function anchorFrom(target) {
    if (!target || !target.closest) return null;
    return target.closest('[data-tip]');
  }

  function onEnter(ev) {
    /* Touch devices get no hover tooltips — they would stick after a tap. */
    if (ev.pointerType === 'touch') return;
    const anchor = anchorFrom(ev.target);
    if (!anchor || anchor === current) return;
    clearTimeout(showTimer);
    showTimer = setTimeout(function () { show(anchor); }, DELAY);
  }

  function onLeave(ev) {
    const anchor = anchorFrom(ev.target);
    if (!anchor) return;
    const to = ev.relatedTarget;
    if (to && anchor.contains(to)) return;
    hide();
  }

  function init() {
    document.addEventListener('pointerover', onEnter, true);
    document.addEventListener('pointerout', onLeave, true);

    /* Keyboard users get the same information. */
    document.addEventListener('focusin', function (ev) {
      const anchor = anchorFrom(ev.target);
      if (anchor) show(anchor);
      else hide();
    });
    document.addEventListener('focusout', hide);

    /* A tooltip anchored to something that moved is worse than no tooltip. */
    window.addEventListener('scroll', hide, true);
    window.addEventListener('resize', hide);
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') hide();
    });
    /* Any click means the user has moved on. */
    document.addEventListener('click', hide, true);
  }

  PF.tooltip = {
    init: init,
    show: show,
    hide: hide,
    get current() { return current; },
    get element() { return el; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
