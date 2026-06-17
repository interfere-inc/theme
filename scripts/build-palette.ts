// Build the Interfere semantic palette FROM Radix Colors (the single source of
// truth) and write palette.<mode>.json. Everything downstream (nvim palette.lua,
// VS Code + terminal templates) consumes that JSON.
//
// Role mapping uses Radix's documented 12-step semantics:
//   1-2 app bg · 3-5 component bg · 6-8 borders · 9-10 solid · 11 text · 12 hi-text
// Editor bg goes a touch below Radix gray-1 via the black-alpha overlay (Radix's
// own "go darker" mechanism), flattened to opaque hex.

import * as radix from '@radix-ui/colors';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { flatten, contrast } from './lib/color.ts';

type Mode = 'dark' | 'light';
const R = radix as unknown as Record<string, Record<string, string>>;

function step(hue: string, mode: Mode, n: number): string {
  const key = mode === 'dark' ? `${hue}Dark` : hue;
  const scale = R[key];
  if (!scale) throw new Error(`no radix scale: ${key}`);
  const v = scale[`${hue}${n}`];
  if (!v) throw new Error(`no step: ${hue}${n}`);
  return v;
}

export type Palette = ReturnType<typeof buildPalette>;

function buildPalette(mode: Mode) {
  const g = (n: number) => step('gray', mode, n);
  const blackA = R.blackA!;

  // Editor background: gray-1 pushed darker with black-alpha (Radix-native).
  const base = mode === 'dark' ? flatten(g(1), blackA.blackA6!) : g(1);
  const dim = mode === 'dark' ? flatten(g(1), blackA.blackA9!) : step('gray', mode, 2);

  const p = {
    name: `Interfere ${mode === 'dark' ? 'Dark' : 'Light'}`,
    variant: mode,

    bg: {
      base, // editor + flat dialogs
      dim, // darkest (inactive / shadows)
      bar: g(2), // statusline / tabline
      window: g(2), // sidebar / activity bar / title bar
      inset: g(3), // inputs / dropdowns
      elevated: mode === 'dark' ? flatten(g(1), blackA.blackA1!) : g(2), // panels / hover
      ui: g(3), // component bg (e.g. pmenu)
      ui_hover: g(4),
      ui_active: g(5),
      sel: step('blue', mode, 5), // visual / search selection (accent-tinted)
      sel_subtle: step('blue', mode, 3), // pmenu selection / matches
    },
    diff: {
      add: step('grass', mode, 3), // added line bg
      delete: step('red', mode, 3), // deleted line bg
      change: step('blue', mode, 3), // changed line bg
      text: step('blue', mode, 4), // changed text within a changed line
    },
    fg: {
      text: g(12), // default text
      dim: g(11), // secondary text (line numbers, statusline)
      muted: g(9), // comments
      faint: g(8), // punctuation / delimiters
    },
    border: {
      subtle: g(6), // editor splits (subtle)
      ui: g(7), // component borders
      dialog: step('blue', mode, 9), // floating dialogs (accent)
      indent: g(3), // indent guide line
      indent_active: g(6), // active indent guide
      inset: g(7), // input / dropdown borders
      elevated: g(6), // panel / notification borders
    },
    accent: {
      base: step('blue', mode, 9), // brand solid (#0090ff)
      hover: step('blue', mode, 10),
      text: step('blue', mode, 11),
      bg: step('blue', mode, 3),
    },
    // states. `*_text` = readable.
    semantic: {
      error: step('red', mode, 9), // danger
      error_text: step('red', mode, 11),
      warn: step('amber', mode, 9),
      warn_text: step('amber', mode, 11),
      info: step('blue', mode, 9),
      info_text: step('blue', mode, 11),
      ok: step('grass', mode, 9), // success
      ok_text: step('grass', mode, 11),
      merge: step('iris', mode, 9), // git merge
      merge_text: step('iris', mode, 11),
    },
    // Syntax roles mapped to Radix hue scales (step 11 = readable text on bg).
    syntax: {
      comment: g(9),
      string: step('grass', mode, 11),
      number: step('sky', mode, 11),
      keyword: step('ruby', mode, 11),
      regexp: step('teal', mode, 11), // cyan is closer but reserved for operator
      func: step('violet', mode, 11),
      type: step('plum', mode, 11),
      variable: step('orange', mode, 11),
      operator: step('cyan', mode, 11),
      punctuation: g(8),
      constant: step('yellow', mode, 11),
      parameter: g(11),
      namespace: step('amber', mode, 11),
      decorator: step('blue', mode, 11),
      escape: step('mint', mode, 11),
      tag: step('tomato', mode, 11),
      attribute: step('jade', mode, 11),
      invalid: g(12),
    },
    ansi: {
      black: g(1),
      red: step('red', mode, 9),
      green: step('grass', mode, 9),
      yellow: step('amber', mode, 9),
      blue: step('blue', mode, 9),
      magenta: step('purple', mode, 9),
      cyan: step('cyan', mode, 9),
      white: g(11),
      brightBlack: g(8),
      brightRed: step('red', mode, 10),
      brightGreen: step('grass', mode, 10),
      brightYellow: step('amber', mode, 10),
      brightBlue: step('blue', mode, 10),
      brightMagenta: step('purple', mode, 10),
      brightCyan: step('cyan', mode, 10),
      brightWhite: g(12),
    },
    special: {
      cursor: step('blue', mode, 9),
      selection: step('blue', mode, 5),
    },
  };

  return p;
}

// ── contrast sanity check ──
function report(p: ReturnType<typeof buildPalette>) {
  const checks: [string, string, string][] = [
    ['text/bg', p.fg.text, p.bg.base],
    ['dim/bg', p.fg.dim, p.bg.base],
    ['comment/bg', p.fg.muted, p.bg.base],
    ['keyword/bg', p.syntax.keyword, p.bg.base],
    ['string/bg', p.syntax.string, p.bg.base],
    ['func/bg', p.syntax.func, p.bg.base],
    ['accent/bg', p.accent.text, p.bg.base],
  ];
  console.log(`\n${p.name} — contrast vs bg (${p.bg.base}):`);
  for (const [label, fg, bg] of checks) {
    const r = contrast(fg, bg);
    const tag = r >= 4.5 ? 'AA ' : r >= 3 ? 'AA-lg' : 'LOW';
    console.log(`  ${label.padEnd(12)} ${fg} ${r.toFixed(2)}:1  ${tag}`);
  }
}

const ROOT = path.resolve(import.meta.dir, '..');
for (const mode of ['dark', 'light'] as Mode[]) {
  const p = buildPalette(mode);
  const out = path.join(ROOT, `palette.${mode}.json`);
  fs.writeFileSync(out, JSON.stringify(p, null, 2) + '\n');
  console.log(`wrote ${path.relative(ROOT, out)}`);
  report(p);
}
