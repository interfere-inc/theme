---@param p table
return function(p)
  return {
    -- mini.statusline -> lualine, mini.indentscope -> snacks.indent: those
    -- groups are no longer used. mini.icons (below) is still in use.
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
