---@param p table
return function(p)
  return {
    TroubleNormal = { fg = p.fg.dim, bg = p.bg.base },
    TroubleNormalNC = { fg = p.fg.dim, bg = p.bg.base },
    TroubleText = { fg = p.fg.dim },
    TroubleCount = { fg = p.accent.text, bg = p.bg.ui },
    TroubleFoldIcon = { fg = p.fg.muted },
    TroubleIndent = { fg = p.border.subtle },
    TroubleLocation = { fg = p.fg.muted },
    TroublePos = { fg = p.fg.muted },
  }
end
