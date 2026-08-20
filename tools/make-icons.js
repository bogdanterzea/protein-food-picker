#!/usr/bin/env node
/* =========================================================================
 * PROTEIN ATLAS SIBIU — GENERATOR DE ICONIȚE
 *
 * Chrome nu oferă instalarea fără iconițe PNG reale de 192 și 512 px. N-avem
 * dependențe și nu vrem să adăugăm, așa că desenăm pixelii direct și îi
 * codăm în PNG cu `zlib`, care e în Node.
 *
 * Desenul e chiar identitatea aplicației: patru bare de statistici în
 * culorile de macronutrienți, aceleași care au trecut validarea de daltonism.
 *
 *   node tools/make-icons.js
 * ========================================================================= */
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const OUT = path.resolve(__dirname, '../icons');

/* ---- CRC32, cerut de formatul PNG pentru fiecare chunk ---- */
const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function png(width, height, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;    /* bit depth */
  ihdr[9] = 6;    /* colour type: RGBA */
  /* 10,11,12 = compression, filter, interlace — all zero */

  /* Each scanline is prefixed with a filter byte; 0 means "none". */
  const raw = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    const o = y * (1 + width * 4);
    raw[o] = 0;
    rgba.copy(raw, o + 1, y * width * 4, (y + 1) * width * 4);
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

/* ---- desenul ---- */
const BG = [8, 12, 21, 255];                 /* --bg-root, tema întunecată */
const BARS = [
  [14, 168, 133],   /* proteină — verde-teal */
  [229, 106, 18],   /* carbohidrați — portocaliu */
  [224, 66, 156],   /* grăsimi — magenta */
  [91, 134, 232]    /* fibre — albastru */
];

/**
 * @param {number} size  latura în pixeli
 * @param {number} inset fracțiune de margine liberă; iconițele „maskable" au
 *                       nevoie de ~20% ca sistemul să le poată decupa rotund
 *                       fără să taie desenul
 */
function draw(size, inset) {
  const px = Buffer.alloc(size * size * 4);
  for (let i = 0; i < size * size; i++) {
    px[i * 4] = BG[0]; px[i * 4 + 1] = BG[1]; px[i * 4 + 2] = BG[2]; px[i * 4 + 3] = 255;
  }

  const pad = Math.round(size * inset);
  const area = size - pad * 2;
  const gap = Math.max(1, Math.round(area * 0.06));
  const barW = Math.floor((area - gap * 3) / 4);
  const radius = Math.max(1, Math.round(barW * 0.28));
  /* Ascending heights: the app is about ranking things, so the mark ranks. */
  const heights = [0.42, 0.62, 0.82, 1.0];

  function set(x, y, c) {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    const o = (y * size + x) * 4;
    px[o] = c[0]; px[o + 1] = c[1]; px[o + 2] = c[2]; px[o + 3] = 255;
  }

  for (let b = 0; b < 4; b++) {
    const h = Math.round(area * heights[b]);
    const x0 = pad + b * (barW + gap);
    const y0 = pad + (area - h);
    for (let y = y0; y < y0 + h; y++) {
      for (let x = x0; x < x0 + barW; x++) {
        /* Round only the top corners, so the bars read as sitting on a floor. */
        const dx = Math.min(x - x0, x0 + barW - 1 - x);
        const dy = y - y0;
        if (dy < radius && dx < radius) {
          const ddx = radius - dx - 1;
          const ddy = radius - dy - 1;
          if (ddx * ddx + ddy * ddy > radius * radius) continue;
        }
        set(x, y, BARS[b]);
      }
    }
  }
  return png(size, size, px);
}

fs.mkdirSync(OUT, { recursive: true });
const made = [];
[
  ['icon-192.png', 192, 0.14],
  ['icon-512.png', 512, 0.14],
  ['icon-maskable-512.png', 512, 0.22]
].forEach(([name, size, inset]) => {
  const buf = draw(size, inset);
  fs.writeFileSync(path.join(OUT, name), buf);
  made.push(name + '  ' + size + '×' + size + '  ' + (buf.length / 1024).toFixed(1) + ' KB');
});
console.log('Iconițe generate în icons/:');
made.forEach(m => console.log('  ' + m));
