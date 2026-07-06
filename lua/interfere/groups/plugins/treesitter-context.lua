-- Default TreesitterContext links to NormalFloat (= bg.base, fully flat) so the
-- sticky header is indistinguishable from the buffer; lift it to bg.inset so it
-- reads as a pinned header without a hard border. TreesitterContextSeparator
-- defaults to FloatBorder (accent-blue) -- far too loud as a full-width rule --
-- so mute it to the subtle border. Line numbers keep the LineNr link (themed).
---@param p table
return function(p)
  return {
    TreesitterContext = { bg = p.bg.inset },
    TreesitterContextLineNumber = { fg = p.fg.muted, bg = p.bg.inset },
    TreesitterContextSeparator = { fg = p.border.subtle },
    TreesitterContextBottom = { sp = p.border.subtle, underline = true },
    TreesitterContextLineNumberBottom = { sp = p.border.subtle, underline = true },
  }
end
