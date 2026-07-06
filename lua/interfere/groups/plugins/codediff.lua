-- codediff derives its line/char diff bgs from DiffAdd/DiffDelete/DiffChange
-- (all themed) and links its explorer/status/conflict/history groups to
-- themed bases (Diagnostic*, Visual, Directory, Comment, FloatTitle), so those
-- need no override. The only off-palette fallbacks are the moved-code fg and the
-- filler glyph, both hardcoded (0x6699cc / #444444) with `default = true`.
---@param p table
return function(p)
  return {
    CodeDiffMoveFrom = { fg = p.accent.text },
    CodeDiffMoveTo = { fg = p.accent.text },
    CodeDiffFiller = { fg = p.fg.faint },
  }
end
