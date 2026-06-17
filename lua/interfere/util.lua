local M = {}

--- Apply a { [group] = opts } table via nvim_set_hl.
---@param groups table<string, vim.api.keyset.highlight>
function M.apply(groups)
  for name, spec in pairs(groups) do
    vim.api.nvim_set_hl(0, name, spec)
  end
end

--- Merge group tables (later wins).
function M.merge(...)
  local out = {}
  for _, t in ipairs { ... } do
    for k, v in pairs(t) do
      out[k] = v
    end
  end
  return out
end

return M
