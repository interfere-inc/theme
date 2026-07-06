-- neotest ships hardcoded off-palette defaults (hot pink #F70067, cyan #00f1f5,
-- yellow #FFEC63, magenta #D484FF, green #96F291) that clash with flat-dark +
-- accent-blue. Remap to semantic palette: passed=ok, failed=error, running/watching
-- =warn, skipped=muted, plus accent for structural/selection groups. NeotestBorder
-- ships no default at all, so it must be filled explicitly.
---@param p table
return function(p)
  return {
    NeotestPassed = { fg = p.semantic.ok_text },
    NeotestFailed = { fg = p.semantic.error_text },
    NeotestRunning = { fg = p.semantic.warn_text },
    NeotestWatching = { fg = p.semantic.warn_text },
    NeotestSkipped = { fg = p.fg.muted },
    NeotestNamespace = { fg = p.syntax.type },
    NeotestFile = { fg = p.accent.text },
    NeotestDir = { fg = p.accent.text },
    NeotestAdapterName = { fg = p.fg.dim, bold = true },
    NeotestFocused = { bold = true, underline = true },
    NeotestTarget = { fg = p.accent.text },
    NeotestWinSelect = { fg = p.accent.text, bold = true },
    NeotestMarked = { fg = p.semantic.warn_text, bold = true },
    NeotestIndent = { fg = p.border.indent },
    NeotestExpandMarker = { fg = p.fg.muted },
    NeotestBorder = { fg = p.border.dialog },
  }
end
