---@param p table
return function(p)
  return {
    MultiCursorCursor = { fg = p.bg.base, bg = p.accent.base },
    MultiCursorVisual = { bg = p.accent.bg },
    MultiCursorSign = { fg = p.accent.text, bg = p.bg.base },
    MultiCursorMatchPreview = { fg = p.fg.text, bg = p.bg.sel },
    MultiCursorDisabledCursor = { fg = p.bg.base, bg = p.fg.muted },
    MultiCursorDisabledVisual = { bg = p.bg.inset },
    MultiCursorDisabledSign = { fg = p.fg.muted, bg = p.bg.base },
  }
end
