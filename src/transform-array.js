export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let res = [...arr]
  for (let x = 0; x < res.length; x++) {
    switch (res[x]) {
      case '--double-next':
        res[x] = res[x + 1]
        break
      case '--double-prev':
        res[x] = res[x - 1]
        break
      case '--discard-next':
        res[x] = undefined
        res[x + 1] = undefined
        break
      case '--discard-prev':
        res[x] = undefined
        res[x - 1] = undefined
        break
      default:
        break
    }
  }
  return res.filter(x => x !== undefined)
}