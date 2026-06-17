---@param p table
return function(p)
  return {
    GitSignsAdd = { fg = p.semantic.ok_text },
    GitSignsChange = { fg = p.accent.text },
    GitSignsDelete = { fg = p.semantic.error_text },
    GitSignsAddInline = { bg = p.diff.add },
    GitSignsChangeInline = { bg = p.diff.change },
    GitSignsDeleteInline = { bg = p.diff.delete },
    GitSignsCurrentLineBlame = { fg = p.fg.muted },
  }
end
