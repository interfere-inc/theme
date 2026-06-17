-- Window bg/border/title inherit FloatBorder/FloatTitle (set in editor.lua).
---@param p table
return function(p)
  return {
    WhichKey = { fg = p.accent.text, bold = true },
    WhichKeyGroup = { fg = p.syntax.operator },
    WhichKeyDesc = { fg = p.fg.text },
    WhichKeySeparator = { fg = p.fg.faint },
    WhichKeyValue = { fg = p.fg.muted },
  }
end
