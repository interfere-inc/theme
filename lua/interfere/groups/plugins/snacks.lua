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
    SnacksPickerDir = { fg = p.fg.muted },
    SnacksPickerPathHidden = { fg = p.fg.muted },
    SnacksPickerSelected = { fg = p.accent.text },
    SnacksIndent = { fg = p.border.subtle },
    SnacksIndentScope = { fg = p.border.ui },
    SnacksNotifierInfo = { fg = p.semantic.info_text },
    SnacksNotifierWarn = { fg = p.semantic.warn_text },
    SnacksNotifierError = { fg = p.semantic.error_text },
  }
end
