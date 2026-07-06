-- Assemble all highlight groups from the palette. Each module returns
-- `function(p) -> { [group] = opts }`; they're merged in order.
local util = require 'interfere.util'

local modules = {
  'interfere.groups.editor',
  'interfere.groups.syntax',
  'interfere.groups.lsp',
  'interfere.groups.plugins.gitsigns',
  'interfere.groups.plugins.neogit',
  'interfere.groups.plugins.codediff',
  'interfere.groups.plugins.snacks',
  'interfere.groups.plugins.trouble',
  'interfere.groups.plugins.mini',
  'interfere.groups.plugins.which-key',
  'interfere.groups.plugins.blink',
  'interfere.groups.plugins.flash',
  'interfere.groups.plugins.multicursor',
  'interfere.groups.plugins.grug-far',
  'interfere.groups.plugins.treesitter-context',
  'interfere.groups.plugins.dap',
  'interfere.groups.plugins.neotest',
}

---@param p table the resolved palette
---@return table<string, vim.api.keyset.highlight>
return function(p)
  local groups = {}
  for _, mod in ipairs(modules) do
    groups = util.merge(groups, require(mod)(p))
  end
  return groups
end
