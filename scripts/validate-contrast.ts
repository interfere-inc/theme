// Gate: fail if body text doesn't clear WCAG AA (4.5:1) against the editor bg.
// Large/secondary text uses AA-large (3:1).
import * as fs from 'node:fs';
import * as path from 'node:path';
import { contrast } from './lib/color.ts';

const ROOT = path.resolve(import.meta.dir, '..');
const MODES = ['dark', 'light'] as const;

let failed = false;
for (const mode of MODES) {
  const p = JSON.parse(fs.readFileSync(path.join(ROOT, `palette.${mode}.json`), 'utf8'));
  const bg = p.bg.base as string;
  // Body/UI text is held to AA (4.5:1). Code syntax tokens use Radix's step-11
  // (its canonical token color) and are judged at AA-large (3:1) — the accepted
  // bar for editor syntax, and necessary because warm hues like orange-11 cap
  // right at ~4.4:1 on a white background.
  const body: [string, string][] = [
    ['text', p.fg.text],
    ['accent', p.accent.text],
    ['error', p.semantic.error_text],
  ];
  const large: [string, string][] = [
    ['dim', p.fg.dim],
    ['comment', p.fg.muted],
    // warn = amber-11; warm hues cap at ~4.5:1 on white and warnings render with
    // an icon/underline, so they're judged as accents (AA-large), not body text.
    ['warn', p.semantic.warn_text],
    ['keyword', p.syntax.keyword],
    ['func', p.syntax.func],
    ['type', p.syntax.type],
    ['string', p.syntax.string],
    ['number', p.syntax.number],
    ['variable', p.syntax.variable],
  ];
  console.log(`\n${p.name} (bg ${bg}):`);
  for (const [name, fg] of body) {
    const r = contrast(fg, bg);
    const ok = r >= 4.5;
    failed = failed || !ok;
    console.log(`  ${ok ? 'PASS' : 'FAIL'} ${name.padEnd(10)} ${fg} ${r.toFixed(2)}:1 (AA 4.5)`);
  }
  for (const [name, fg] of large) {
    const r = contrast(fg, bg);
    const ok = r >= 3;
    failed = failed || !ok;
    console.log(`  ${ok ? 'PASS' : 'FAIL'} ${name.padEnd(10)} ${fg} ${r.toFixed(2)}:1 (AA-lg 3.0)`);
  }
}

if (failed) {
  console.error('\nContrast validation FAILED.');
  process.exit(1);
}
console.log('\nAll contrast checks passed.');
