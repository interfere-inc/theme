---@param p table
return function(p)
  return {
    FlashLabel = { fg = p.bg.base, bg = p.accent.base, bold = true },
    FlashMatch = { fg = p.fg.text, bg = p.bg.sel },
    FlashCurrent = { fg = p.accent.text, bg = p.accent.bg, bold = true },
    FlashBackdrop = { fg = p.fg.faint },
    FlashPrompt = { fg = p.fg.dim, bg = p.bg.bar },
    FlashPromptIcon = { fg = p.accent.text },
    FlashCursor = { fg = p.bg.base, bg = p.accent.base },
  }
end
