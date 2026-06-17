// Typed target builders (no template engine). Each takes the typed Palette, so
// renaming/removing a role is a COMPILE error instead of a silently-empty value.
import type { Palette } from './build-palette.ts';

// ── VS Code / Cursor ──
export function vscode(p: Palette): string {
  const theme = {
    $schema: 'vscode://schemas/color-theme',
    name: p.name,
    type: p.variant,
    colors: {
      foreground: p.fg.dim,
      focusBorder: p.border.dialog,
      'selection.background': p.accent.bg,
      'icon.foreground': p.fg.muted,
      errorForeground: p.semantic.error_text,
      descriptionForeground: p.fg.muted,

      'editor.background': p.bg.base,
      'editor.foreground': p.fg.text,
      'editorLineNumber.foreground': p.fg.muted,
      'editorLineNumber.activeForeground': p.fg.dim,
      'editor.lineHighlightBackground': p.bg.ui,
      'editor.selectionBackground': p.bg.sel,
      'editor.selectionHighlightBackground': p.bg.sel_subtle,
      'editor.wordHighlightBackground': p.bg.ui_hover,
      'editor.wordHighlightStrongBackground': p.bg.ui_active,
      'editor.findMatchBackground': p.bg.sel,
      'editor.findMatchHighlightBackground': p.bg.sel_subtle,
      'editor.hoverHighlightBackground': p.bg.ui_hover,
      'editorCursor.foreground': p.special.cursor,
      'editorWhitespace.foreground': p.border.subtle,
      'editorIndentGuide.background1': p.border.indent,
      'editorIndentGuide.activeBackground1': p.border.indent_active,
      'editorBracketMatch.background': p.bg.ui,
      'editorBracketMatch.border': p.accent.base,
      'editorRuler.foreground': p.border.subtle,
      'editorGutter.addedBackground': p.semantic.ok,
      'editorGutter.deletedBackground': p.semantic.error,
      'editorGutter.modifiedBackground': p.accent.base,
      'editorError.foreground': p.semantic.error_text,
      'editorWarning.foreground': p.semantic.warn_text,
      'editorInfo.foreground': p.semantic.info_text,
      'editorHint.foreground': p.fg.muted,
      'editorLink.activeForeground': p.accent.text,
      'editorOverviewRuler.border': p.border.subtle,
      'editorOverviewRuler.errorForeground': p.semantic.error,
      'editorOverviewRuler.warningForeground': p.semantic.warn,
      'editorOverviewRuler.modifiedForeground': p.accent.base,
      'editorOverviewRuler.addedForeground': p.semantic.ok,

      'editorWidget.background': p.bg.elevated,
      'editorWidget.border': p.border.dialog,
      'editorHoverWidget.background': p.bg.elevated,
      'editorHoverWidget.border': p.border.dialog,
      'editorSuggestWidget.background': p.bg.elevated,
      'editorSuggestWidget.border': p.border.dialog,
      'editorSuggestWidget.selectedBackground': p.bg.ui_active,
      'editorSuggestWidget.highlightForeground': p.accent.text,
      'peekView.border': p.border.dialog,
      'peekViewEditor.background': p.bg.elevated,
      'peekViewResult.background': p.bg.window,
      'peekViewTitle.background': p.bg.window,

      'panel.background': p.bg.base,
      'panel.border': p.border.subtle,
      'panelTitle.activeForeground': p.fg.text,
      'panelTitle.inactiveForeground': p.fg.muted,
      'sideBar.background': p.bg.window,
      'sideBar.foreground': p.fg.dim,
      'sideBar.border': p.border.subtle,
      'sideBarSectionHeader.background': p.bg.window,
      'sideBarTitle.foreground': p.fg.muted,
      'activityBar.background': p.bg.window,
      'activityBar.foreground': p.fg.text,
      'activityBar.inactiveForeground': p.fg.muted,
      'activityBar.border': p.border.subtle,
      'activityBarBadge.background': p.accent.base,
      'activityBarBadge.foreground': p.bg.base,
      'statusBar.background': p.bg.window,
      'statusBar.foreground': p.fg.dim,
      'statusBar.border': p.border.subtle,
      'statusBar.noFolderBackground': p.bg.window,
      'statusBar.debuggingBackground': p.semantic.warn,
      'statusBar.debuggingForeground': p.bg.base,
      'titleBar.activeBackground': p.bg.window,
      'titleBar.activeForeground': p.fg.dim,
      'titleBar.inactiveBackground': p.bg.window,
      'titleBar.inactiveForeground': p.fg.muted,
      'titleBar.border': p.border.subtle,

      'tab.activeBackground': p.bg.base,
      'tab.inactiveBackground': p.bg.window,
      'tab.activeForeground': p.fg.text,
      'tab.inactiveForeground': p.fg.muted,
      'tab.border': p.border.subtle,
      'tab.activeBorderTop': p.accent.base,
      'editorGroupHeader.tabsBackground': p.bg.window,
      'breadcrumb.foreground': p.fg.muted,
      'breadcrumb.focusForeground': p.fg.text,

      'input.background': p.bg.inset,
      'input.foreground': p.fg.text,
      'input.border': p.border.inset,
      'input.placeholderForeground': p.fg.muted,
      'inputOption.activeBorder': p.accent.base,
      'dropdown.background': p.bg.inset,
      'dropdown.foreground': p.fg.text,
      'dropdown.border': p.border.inset,
      'quickInput.background': p.bg.elevated,
      'quickInput.foreground': p.fg.text,
      'quickInputList.focusBackground': p.bg.ui_active,
      'button.background': p.accent.base,
      'button.foreground': p.bg.base,
      'button.hoverBackground': p.accent.hover,
      'badge.background': p.accent.base,
      'badge.foreground': p.bg.base,
      'progressBar.background': p.accent.base,
      'notifications.background': p.bg.elevated,
      'notifications.border': p.border.elevated,
      'notificationsErrorIcon.foreground': p.semantic.error_text,
      'notificationsWarningIcon.foreground': p.semantic.warn_text,
      'notificationsInfoIcon.foreground': p.semantic.info_text,

      'list.activeSelectionBackground': p.bg.ui_active,
      'list.activeSelectionForeground': p.fg.text,
      'list.inactiveSelectionBackground': p.bg.ui,
      'list.hoverBackground': p.bg.ui_hover,
      'list.highlightForeground': p.accent.text,
      'list.focusBackground': p.bg.ui_active,
      'list.errorForeground': p.semantic.error_text,
      'list.warningForeground': p.semantic.warn_text,
      'tree.indentGuidesStroke': p.border.indent,
      'scrollbarSlider.background': p.bg.ui_active,
      'scrollbarSlider.hoverBackground': p.border.ui,
      'scrollbarSlider.activeBackground': p.border.ui,
      'minimapSlider.background': p.bg.ui,

      'gitDecoration.modifiedResourceForeground': p.accent.text,
      'gitDecoration.deletedResourceForeground': p.semantic.error_text,
      'gitDecoration.untrackedResourceForeground': p.semantic.ok_text,
      'gitDecoration.ignoredResourceForeground': p.fg.muted,
      'gitDecoration.conflictingResourceForeground': p.semantic.merge_text,
      'merge.currentHeaderBackground': p.semantic.info,
      'merge.incomingHeaderBackground': p.semantic.merge,
      'diffEditor.insertedTextBackground': p.diff.add,
      'diffEditor.removedTextBackground': p.diff.delete,

      'terminal.background': p.bg.base,
      'terminal.foreground': p.fg.text,
      'terminalCursor.foreground': p.special.cursor,
      'terminal.ansiBlack': p.ansi.black,
      'terminal.ansiRed': p.ansi.red,
      'terminal.ansiGreen': p.ansi.green,
      'terminal.ansiYellow': p.ansi.yellow,
      'terminal.ansiBlue': p.ansi.blue,
      'terminal.ansiMagenta': p.ansi.magenta,
      'terminal.ansiCyan': p.ansi.cyan,
      'terminal.ansiWhite': p.ansi.white,
      'terminal.ansiBrightBlack': p.ansi.brightBlack,
      'terminal.ansiBrightRed': p.ansi.brightRed,
      'terminal.ansiBrightGreen': p.ansi.brightGreen,
      'terminal.ansiBrightYellow': p.ansi.brightYellow,
      'terminal.ansiBrightBlue': p.ansi.brightBlue,
      'terminal.ansiBrightMagenta': p.ansi.brightMagenta,
      'terminal.ansiBrightCyan': p.ansi.brightCyan,
      'terminal.ansiBrightWhite': p.ansi.brightWhite,
    },
    tokenColors: [
      tc(['comment', 'punctuation.definition.comment'], p.syntax.comment, 'italic'),
      tc(['string', 'constant.other.symbol', 'punctuation.definition.string'], p.syntax.string),
      tc(['string.regexp', 'constant.regexp'], p.syntax.regexp),
      tc(['constant.character.escape'], p.syntax.escape),
      tc(['constant.numeric', 'constant.language.boolean', 'constant.language.null', 'constant.language.undefined'], p.syntax.number),
      tc(['constant', 'constant.language', 'support.constant', 'variable.other.constant'], p.syntax.constant),
      tc(['keyword', 'keyword.control', 'storage', 'storage.type', 'storage.modifier'], p.syntax.keyword),
      tc(['keyword.operator'], p.syntax.operator),
      tc(['keyword.operator.new', 'keyword.operator.expression', 'keyword.operator.delete', 'keyword.control.ternary'], p.syntax.keyword),
      tc(['entity.name.function', 'support.function', 'meta.function-call', 'variable.function'], p.syntax.func),
      tc(['entity.name.type', 'support.type', 'support.class', 'entity.name.class', 'entity.other.inherited-class'], p.syntax.type),
      tc(['entity.name.namespace', 'entity.name.type.namespace', 'variable.language', 'support.variable'], p.syntax.namespace),
      tc(['variable', 'meta.definition.variable.name', 'variable.other.readwrite', 'meta.object-literal.key', 'support.variable.property'], p.syntax.variable),
      tc(['variable.parameter', 'meta.function.parameters'], p.syntax.parameter),
      tc(['meta.decorator', 'entity.name.function.decorator', 'punctuation.decorator'], p.syntax.decorator),
      tc(['entity.name.tag', 'support.class.component'], p.syntax.tag),
      tc(['entity.other.attribute-name', 'meta.attribute'], p.syntax.attribute),
      tc(['punctuation', 'meta.brace', 'punctuation.separator', 'punctuation.terminator'], p.syntax.punctuation),
      tc(['invalid', 'invalid.illegal'], p.syntax.invalid),
      tc(['markup.heading', 'entity.name.section'], p.syntax.func, 'bold'),
      { scope: ['markup.bold'], settings: { fontStyle: 'bold' } },
      { scope: ['markup.italic'], settings: { fontStyle: 'italic' } },
      tc(['markup.inline.raw', 'markup.fenced_code'], p.syntax.string),
      tc(['markup.underline.link', 'string.other.link'], p.syntax.constant),
      tc(['markup.inserted'], p.semantic.ok_text),
      tc(['markup.deleted'], p.semantic.error_text),
    ],
    semanticHighlighting: true,
    semanticTokenColors: {
      keyword: p.syntax.keyword,
      function: p.syntax.func,
      method: p.syntax.func,
      type: p.syntax.type,
      class: p.syntax.type,
      interface: p.syntax.type,
      enum: p.syntax.type,
      namespace: p.syntax.namespace,
      string: p.syntax.string,
      number: p.syntax.number,
      regexp: p.syntax.regexp,
      variable: p.syntax.variable,
      parameter: p.syntax.parameter,
      property: p.syntax.variable,
      enumMember: p.syntax.constant,
      decorator: p.syntax.decorator,
      comment: p.syntax.comment,
      operator: p.syntax.operator,
    },
  };
  return JSON.stringify(theme, null, 2) + '\n';
}

function tc(scope: string[], foreground: string, fontStyle?: string) {
  return { scope, settings: fontStyle ? { foreground, fontStyle } : { foreground } };
}

// ── WezTerm ──
export function wezterm(p: Palette): string {
  return `# ${p.name} — generated from Radix by interfere-theme
[colors]
foreground = "${p.fg.text}"
background = "${p.bg.base}"
cursor_bg = "${p.special.cursor}"
cursor_fg = "${p.bg.base}"
cursor_border = "${p.special.cursor}"
selection_fg = "${p.fg.text}"
selection_bg = "${p.special.selection}"
scrollbar_thumb = "${p.bg.ui_active}"
split = "${p.border.subtle}"

ansi = [
  "${p.ansi.black}", "${p.ansi.red}", "${p.ansi.green}", "${p.ansi.yellow}",
  "${p.ansi.blue}", "${p.ansi.magenta}", "${p.ansi.cyan}", "${p.ansi.white}",
]
brights = [
  "${p.ansi.brightBlack}", "${p.ansi.brightRed}", "${p.ansi.brightGreen}", "${p.ansi.brightYellow}",
  "${p.ansi.brightBlue}", "${p.ansi.brightMagenta}", "${p.ansi.brightCyan}", "${p.ansi.brightWhite}",
]
`;
}

// ── Ghostty ──
export function ghostty(p: Palette): string {
  const a = p.ansi;
  const pal = [a.black, a.red, a.green, a.yellow, a.blue, a.magenta, a.cyan, a.white, a.brightBlack, a.brightRed, a.brightGreen, a.brightYellow, a.brightBlue, a.brightMagenta, a.brightCyan, a.brightWhite];
  return `# ${p.name} — generated from Radix by interfere-theme
background = ${p.bg.base}
foreground = ${p.fg.text}
cursor-color = ${p.special.cursor}
cursor-text = ${p.bg.base}
selection-background = ${p.special.selection}
selection-foreground = ${p.fg.text}

${pal.map((c, i) => `palette = ${i}=${c}`).join('\n')}
`;
}
