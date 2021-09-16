export default function getDNSStats(domains) {
  return domains.reduce((acc, n) => {
    let chunk = ''
    while (n) {
      n = [...n]
      let last = n.lastIndexOf('.')
      const add = last !== -1 ? n.splice(last) : [...n]
      if (last === -1) n = null
      chunk = chunk + (add[0] === '.' ? '' : '.') + add.join('')
      if (acc[chunk]) {
        acc[chunk] = acc[chunk] + 1
      } else {
        acc[chunk] = 1
      }
    }
    return acc
  }, {})
}