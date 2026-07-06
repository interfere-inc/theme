-- Most DapUI groups link to syntax bases already themed by syntax.lua
-- (DapUIVariable->Normal, DapUIType->Type, DapUIScope/Decoration->Identifier,
-- DapUIValue->Normal, etc.) and resolve on-palette, so they're left alone.
-- Overridden here: float borders (default Identifier = white, clashes with the
-- accent-blue FloatBorder used everywhere else) and the control/status glyphs,
-- which default to syntax colors (Label/Repeat/PreProc/Special) that read as
-- arbitrary rainbow on a debug toolbar -- remap to semantic (play=ok, stop=error).
-- NvimDapVirtualText* already link to DiagnosticVirtualText*/Comment (themed), no gap.
---@param p table
return function(p)
  return {
    DapUIFloatBorder = { fg = p.border.dialog, bg = p.bg.base },
    DapUIPlayPause = { fg = p.semantic.ok_text },
    DapUIRestart = { fg = p.semantic.ok_text },
    DapUIStop = { fg = p.semantic.error_text },
    DapUIStepOver = { fg = p.accent.text },
    DapUIStepInto = { fg = p.accent.text },
    DapUIStepBack = { fg = p.accent.text },
    DapUIStepOut = { fg = p.accent.text },
    DapUIWinSelect = { fg = p.accent.text, bold = true },
    DapUIStoppedThread = { fg = p.accent.text },
    DapUIWatchesError = { fg = p.semantic.error_text },
    DapUIWatchesValue = { fg = p.semantic.ok_text },
    DapUIBreakpointsCurrentLine = { fg = p.accent.base, bold = true },
    DapUISource = { fg = p.syntax.string },
  }
end
