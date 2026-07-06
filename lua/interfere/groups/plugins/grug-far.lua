---@param p table
return function(p)
  return {
    GrugFarResultsPath = { fg = p.accent.text, underline = true },
    GrugFarResultsCmdHeader = { fg = p.accent.text, underline = true },
    GrugFarResultsMatchAdded = { bg = p.diff.add },
    GrugFarResultsMatchRemoved = { bg = p.diff.delete },
    GrugFarResultsChangeIndicator = { fg = p.accent.text, bg = 'NONE' },
    GrugFarResultsAddIndicator = { fg = p.semantic.ok_text, bg = 'NONE' },
    GrugFarResultsRemoveIndicator = { fg = p.semantic.error_text, bg = 'NONE' },
  }
end
