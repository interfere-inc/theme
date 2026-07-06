-- Neogit derives its own palette by shading Normal's bg (bg1/bg2/bg3) and by
-- lightening ErrorMsg/String/etc., so its status/commit/popup UI lands on
-- off-palette computed colors instead of the flat-dark surfaces. Re-anchor the
-- groups that carry a computed bg (they double-tint over bg.base) or a computed
-- shade fg (they drift from the semantic ramp). Groups that already link to a
-- themed base (NeogitNormal->Normal, NeogitCursorLine->CursorLine,
-- NeogitWinSeparator->WinSeparator, NeogitSubtleText->Comment, the Popup*/
-- SectionHeader links) are left to Neogit's own defaults.
---@param p table
return function(p)
  return {
    NeogitDiffContext = { bg = p.bg.base },
    NeogitDiffContextHighlight = { bg = p.bg.ui },
    NeogitDiffContextCursor = { bg = p.bg.base },

    NeogitHunkHeader = { fg = p.fg.dim, bg = p.bg.bar, bold = true },
    NeogitHunkHeaderHighlight = { fg = p.accent.text, bg = p.bg.inset, bold = true },
    NeogitHunkHeaderCursor = { fg = p.accent.text, bg = p.bg.inset, bold = true },
    NeogitHunkMergeHeader = { fg = p.semantic.merge_text, bg = p.bg.bar, bold = true },
    NeogitHunkMergeHeaderHighlight = { fg = p.semantic.merge_text, bg = p.bg.inset, bold = true },
    NeogitHunkMergeHeaderCursor = { fg = p.semantic.merge_text, bg = p.bg.inset, bold = true },

    NeogitDiffAdd = { bg = p.diff.add, fg = p.semantic.ok_text },
    NeogitDiffAddHighlight = { bg = p.diff.add, fg = p.semantic.ok_text },
    NeogitDiffAddCursor = { bg = p.diff.add, fg = p.semantic.ok_text },
    NeogitDiffAdditions = { fg = p.semantic.ok_text },
    NeogitDiffAddInline = { bg = p.diff.add, fg = p.semantic.ok_text, bold = true },

    NeogitDiffDelete = { bg = p.diff.delete, fg = p.semantic.error_text },
    NeogitDiffDeleteHighlight = { bg = p.diff.delete, fg = p.semantic.error_text },
    NeogitDiffDeleteCursor = { bg = p.diff.delete, fg = p.semantic.error_text },
    NeogitDiffDeletions = { fg = p.semantic.error_text },
    NeogitDiffDeleteInline = { bg = p.diff.delete, fg = p.semantic.error_text, bold = true },

    NeogitDiffHeader = { bg = p.bg.bar, fg = p.accent.text, bold = true },
    NeogitDiffHeaderHighlight = { bg = p.bg.inset, fg = p.accent.text, bold = true },

    NeogitCommitViewHeader = { bg = p.accent.bg, fg = p.accent.text, bold = true },
    NeogitFloatHeader = { bg = p.bg.base, bold = true },
    NeogitFloatHeaderHighlight = { bg = p.bg.inset, fg = p.accent.text, bold = true },
    NeogitActiveItem = { bg = p.bg.sel, fg = p.fg.text, bold = true },

    NeogitBranch = { fg = p.accent.text, bold = true },
    NeogitBranchHead = { fg = p.accent.text, bold = true, underline = true },
    NeogitRemote = { fg = p.semantic.ok_text, bold = true },
    NeogitUnmergedInto = { fg = p.semantic.merge_text, bold = true },
    NeogitUnpushedTo = { fg = p.semantic.merge_text, bold = true },
    NeogitUnpulledFrom = { fg = p.semantic.merge_text, bold = true },
    NeogitTagName = { fg = p.semantic.warn_text },
    NeogitTagDistance = { fg = p.accent.text },

    NeogitSectionHeader = { fg = p.semantic.merge_text, bold = true },

    NeogitChangeModified = { fg = p.accent.text, bold = true, italic = true },
    NeogitChangeAdded = { fg = p.semantic.ok_text, bold = true, italic = true },
    NeogitChangeNewFile = { fg = p.semantic.ok_text, bold = true, italic = true },
    NeogitChangeDeleted = { fg = p.semantic.error_text, bold = true, italic = true },
    NeogitChangeRenamed = { fg = p.semantic.merge_text, bold = true, italic = true },
    NeogitChangeUpdated = { fg = p.syntax.variable, bold = true, italic = true },
    NeogitChangeCopied = { fg = p.syntax.operator, bold = true, italic = true },
    NeogitChangeUnmerged = { fg = p.semantic.warn_text, bold = true, italic = true },

    NeogitPopupSwitchKey = { fg = p.semantic.merge_text },
    NeogitPopupOptionKey = { fg = p.semantic.merge_text },
    NeogitPopupConfigKey = { fg = p.semantic.merge_text },
    NeogitPopupActionKey = { fg = p.semantic.merge_text },

    NeogitGraphAuthor = { fg = p.syntax.variable },
    NeogitGraphOrange = { fg = p.syntax.variable },
    NeogitGraphBoldOrange = { fg = p.syntax.variable, bold = true },
    NeogitGraphRed = { fg = p.semantic.error_text },
    NeogitGraphBoldRed = { fg = p.semantic.error_text, bold = true },
    NeogitGraphWhite = { fg = p.fg.text },
    NeogitGraphBoldWhite = { fg = p.fg.text, bold = true },
    NeogitGraphYellow = { fg = p.semantic.warn_text },
    NeogitGraphBoldYellow = { fg = p.semantic.warn_text, bold = true },
    NeogitGraphGreen = { fg = p.semantic.ok_text },
    NeogitGraphBoldGreen = { fg = p.semantic.ok_text, bold = true },
    NeogitGraphCyan = { fg = p.syntax.operator },
    NeogitGraphBoldCyan = { fg = p.syntax.operator, bold = true },
    NeogitGraphBlue = { fg = p.accent.text },
    NeogitGraphBoldBlue = { fg = p.accent.text, bold = true },
    NeogitGraphPurple = { fg = p.semantic.merge_text },
    NeogitGraphBoldPurple = { fg = p.semantic.merge_text, bold = true },
    NeogitGraphGray = { fg = p.fg.muted },
    NeogitGraphBoldGray = { fg = p.fg.muted, bold = true },
  }
end
