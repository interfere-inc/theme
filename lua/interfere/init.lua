local M = {}

--- Load an Interfere variant.
---@param mode? 'dark'|'light'
function M.load(mode)
  mode = mode or 'dark'
  local ok, palette = pcall(require, 'interfere.palette_' .. mode)
  if not ok then
    vim.notify('interfere: missing palette_' .. mode .. ' (run `bun run build`)', vim.log.levels.ERROR)
    return
  end

  if vim.g.colors_name then vim.cmd 'highlight clear' end
  if vim.fn.exists 'syntax_on' == 1 then vim.cmd 'syntax reset' end
  vim.o.termguicolors = true
  vim.o.background = mode
  vim.g.colors_name = 'interfere-' .. mode

  require('interfere.util').apply(require('interfere.theme')(palette))

  -- :terminal colors
  local ansi = palette.ansi
  local order = {
    ansi.black,
    ansi.red,
    ansi.green,
    ansi.yellow,
    ansi.blue,
    ansi.magenta,
    ansi.cyan,
    ansi.white,
    ansi.brightBlack,
    ansi.brightRed,
    ansi.brightGreen,
    ansi.brightYellow,
    ansi.brightBlue,
    ansi.brightMagenta,
    ansi.brightCyan,
    ansi.brightWhite,
  }
  for i, color in ipairs(order) do
    vim.g['terminal_color_' .. (i - 1)] = color
  end
end

return M
