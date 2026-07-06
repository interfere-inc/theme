-- snacks links its window groups to NormalFloat/FloatBorder/FloatTitle (set in
-- editor.lua), so picker/explorer/input inherit the flat-dark + accent-border look.
---@param p table
return function(p)
  return {
    SnacksNormal = { link = 'NormalFloat' },
    SnacksBorder = { link = 'FloatBorder' },
    SnacksTitle = { link = 'FloatTitle' },
    SnacksFooter = { link = 'FloatFooter' },
    SnacksBackdrop = { bg = p.bg.dim },
    SnacksPickerMatch = { fg = p.accent.text, bold = true },
    SnacksPickerTree = { fg = p.border.indent }, -- explorer/picker tree guides: match buffer indent
    SnacksPickerDir = { fg = p.fg.muted },
    SnacksPickerPathHidden = { fg = p.fg.muted },
    SnacksPickerSelected = { fg = p.accent.text },
    SnacksIndent = { fg = p.border.indent }, -- always-visible indent guides (subtle)
    SnacksIndentChunk = { fg = '#104d87' }, -- active scope -- subtle blue (Radix blue 6)
    SnacksIndentScope = { fg = '#104d87' }, -- active scope -- subtle blue (Radix blue 6)
    SnacksNotifierInfo = { fg = p.semantic.info_text },
    SnacksNotifierWarn = { fg = p.semantic.warn_text },
    SnacksNotifierError = { fg = p.semantic.error_text },
    -- explorer/picker git status: dirty files (untracked + modified) in amber so
    -- uncommitted changes stand out. snacks defaults untracked -> NonText (gray),
    -- which reads as muted; added/deleted keep snacks' green/red semantic defaults.
    SnacksPickerGitStatusUntracked = { fg = p.semantic.warn_text },
    SnacksPickerGitStatusModified = { fg = p.semantic.warn_text },
  }
end
