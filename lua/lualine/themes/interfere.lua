-- lualine theme for Interfere. Discovered by lualine at `lua/lualine/themes/`
-- on the runtimepath. Mirrors the palette so the statusline matches the editor.
-- Picks the dark/light palette from `vim.o.background`.

local p = require('interfere.palette_' .. (vim.o.background == 'light' and 'light' or 'dark'))

-- Stepped backgrounds so the powerline wedges read as distinct segments:
-- a (mode color) → b (raised gray) → c (bar). b was too close to c before, which
-- flattened the middle of the line.
local section_b = { fg = p.fg.text, bg = p.bg.ui_active }
local section_c = { fg = p.fg.dim, bg = p.bg.bar }

return {
  normal = {
    a = { fg = p.bg.base, bg = p.accent.base, gui = 'bold' },
    b = section_b,
    c = section_c,
  },
  insert = { a = { fg = p.bg.base, bg = p.semantic.ok, gui = 'bold' } },
  visual = { a = { fg = p.bg.base, bg = p.semantic.warn, gui = 'bold' } },
  replace = { a = { fg = p.bg.base, bg = p.semantic.error, gui = 'bold' } },
  command = { a = { fg = p.bg.base, bg = p.syntax.func, gui = 'bold' } },
  inactive = {
    a = { fg = p.fg.muted, bg = p.bg.bar, gui = 'bold' },
    b = { fg = p.fg.muted, bg = p.bg.bar },
    c = { fg = p.fg.muted, bg = p.bg.bar },
  },
}
