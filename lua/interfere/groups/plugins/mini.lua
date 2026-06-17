---@param p table
return function(p)
  return {
    MiniStatuslineModeNormal = { fg = p.bg.base, bg = p.accent.base, bold = true },
    MiniStatuslineModeInsert = { fg = p.bg.base, bg = p.semantic.ok, bold = true },
    MiniStatuslineModeVisual = { fg = p.bg.base, bg = p.semantic.warn, bold = true },
    MiniStatuslineModeReplace = { fg = p.bg.base, bg = p.semantic.error, bold = true },
    MiniStatuslineModeCommand = { fg = p.bg.base, bg = p.syntax.func, bold = true },
    MiniStatuslineModeOther = { fg = p.bg.base, bg = p.fg.dim, bold = true },
    MiniStatuslineInactive = { fg = p.fg.muted, bg = p.bg.bar },
    MiniStatuslineDevinfo = { fg = p.fg.dim, bg = p.bg.ui },
    MiniStatuslineFilename = { fg = p.fg.dim, bg = p.bg.bar },
    MiniStatuslineFileinfo = { fg = p.fg.dim, bg = p.bg.ui },

    MiniIndentscopeSymbol = { fg = p.border.ui },

    MiniIconsAzure = { fg = p.accent.text },
    MiniIconsBlue = { fg = p.ansi.blue },
    MiniIconsCyan = { fg = p.syntax.operator },
    MiniIconsGreen = { fg = p.syntax.string },
    MiniIconsGrey = { fg = p.fg.muted },
    MiniIconsOrange = { fg = p.syntax.variable },
    MiniIconsPurple = { fg = p.syntax.func },
    MiniIconsRed = { fg = p.semantic.error_text },
    MiniIconsYellow = { fg = p.semantic.warn_text },
  }
end
