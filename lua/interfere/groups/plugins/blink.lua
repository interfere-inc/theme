---@param p table
return function(p)
  return {
    BlinkCmpMenu = { link = 'Pmenu' },
    BlinkCmpMenuBorder = { link = 'FloatBorder' },
    BlinkCmpMenuSelection = { link = 'PmenuSel' },
    BlinkCmpDoc = { link = 'NormalFloat' },
    BlinkCmpDocBorder = { link = 'FloatBorder' },
    BlinkCmpLabel = { fg = p.fg.text },
    BlinkCmpLabelMatch = { fg = p.accent.text, bold = true },
    BlinkCmpLabelDescription = { fg = p.fg.muted },
    BlinkCmpKind = { fg = p.accent.text },
    BlinkCmpSignatureHelpActiveParameter = { fg = p.accent.text, bold = true },
  }
end
