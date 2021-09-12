export default function repeater(str, options) {
  if (typeof str !== 'string') str = String(str)

  let add = '', string = str

  if (!(options.addition === undefined)) {
    add += options.addition
    if (typeof add !== 'string') add = String(add)
  }
  add += options.additionSeparator ? options.additionSeparator : '|'
  if (options.additionRepeatTimes) add = add.repeat(options.additionRepeatTimes)
  add = add.slice(0, add.length - (options.additionSeparator ? options.additionSeparator.length : 1))

  if (add) string += add
  string += options.separator ? options.separator : '+'
  if (options.repeatTimes) string = string.repeat(options.repeatTimes)
  string = string.slice(0, string.length - (options.separator ? options.separator.length : 1))

  return string
}