-- LSP semantic tokens + reference highlighting.
---@param p table
return function(p)
  local s = p.syntax
  return {
    LspReferenceText = { bg = p.bg.ui },
    LspReferenceRead = { bg = p.bg.ui },
    LspReferenceWrite = { bg = p.bg.ui, underline = true },
    LspInlayHint = { fg = p.fg.muted, bg = p.bg.bar },
    LspCodeLens = { fg = p.fg.muted },
    LspSignatureActiveParameter = { fg = p.accent.text, bold = true },

    ['@lsp.type.namespace'] = { fg = s.namespace },
    ['@lsp.type.type'] = { fg = s.type },
    ['@lsp.type.class'] = { fg = s.type },
    ['@lsp.type.enum'] = { fg = s.type },
    ['@lsp.type.interface'] = { fg = s.type },
    ['@lsp.type.struct'] = { fg = s.type },
    ['@lsp.type.parameter'] = { fg = s.parameter },
    ['@lsp.type.variable'] = { fg = p.fg.text },
    ['@lsp.type.property'] = { fg = s.variable },
    ['@lsp.type.function'] = { fg = s.func },
    ['@lsp.type.method'] = { fg = s.func },
    ['@lsp.type.keyword'] = { fg = s.keyword },
    ['@lsp.type.string'] = { fg = s.string },
    ['@lsp.type.number'] = { fg = s.number },
    ['@lsp.type.enumMember'] = { fg = s.constant },
    ['@lsp.type.decorator'] = { fg = s.decorator },
  }
end
