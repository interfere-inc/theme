// Minimal color math: parsing, sRGB alpha compositing, WCAG contrast, Oklab ΔE.
// Neovim/VSCode/terminals all consume sRGB hex, so everything resolves to hex.

export type RGB = { r: number; g: number; b: number };

export function parseHex(hex: string): RGB {
  const h = hex.replace('#', '');
  return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
}

export function toHex({ r, g, b }: RGB): string {
  const c = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
  return `#${c(r)}${c(g)}${c(b)}`;
}

// Parse alpha tokens like "rgba(0, 0, 0, 0.4)".
export function parseRgba(s: string): { rgb: RGB; a: number } {
  const m = s.match(/rgba?\(\s*(\d+)\D+(\d+)\D+(\d+)(?:\D+([\d.]+))?/);
  if (!m) throw new Error(`cannot parse rgba: ${s}`);

  return { rgb: { r: +m[1]!, g: +m[2]!, b: +m[3]! }, a: m[4] ? +m[4] : 1 };
}

// Composite an overlay (with alpha) over an opaque base, in sRGB (matches CSS).
export function over(baseHex: string, overlay: { rgb: RGB; a: number }): string {
  const b = parseHex(baseHex);
  const { rgb: o, a } = overlay;
  return toHex({ r: b.r * (1 - a) + o.r * a, g: b.g * (1 - a) + o.g * a, b: b.b * (1 - a) + o.b * a });
}

// Convenience: flatten a Radix alpha token string over a base hex.
export function flatten(baseHex: string, alphaToken: string): string {
  return over(baseHex, parseRgba(alphaToken));
}

// ── WCAG contrast ──
function channelLum(c: number): number {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}
export function luminance(hex: string): number {
  const { r, g, b } = parseHex(hex);
  return 0.2126 * channelLum(r) + 0.7152 * channelLum(g) + 0.0722 * channelLum(b);
}
export function contrast(a: string, b: string): number {
  const la = luminance(a) + 0.05;
  const lb = luminance(b) + 0.05;
  return la > lb ? la / lb : lb / la;
}

// ── Oklab ΔE (for matching / validation) ──
function lin(c: number): number {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}
export function oklab(hex: string): [number, number, number] {
  const { r, g, b } = parseHex(hex);
  const lr = lin(r),
    lg = lin(g),
    lb = lin(b);
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}
export function deltaEOK(a: string, b: string): number {
  const A = oklab(a),
    B = oklab(b);
  return Math.sqrt((A[0] - B[0]) ** 2 + (A[1] - B[1]) ** 2 + (A[2] - B[2]) ** 2) * 100;
}
