export default function renameFiles(names) {
  for (let n = 0; n < names.length; n++) {
    let acc = 0
    for (let n1 = 0; n1 < names.length; n1++) {
      if (names[n] === names[n1]) {
        names[n1] = acc === 0 ? names[n1] : names[n1] + `(${acc})`
        acc = acc + 1
      }
    }
  }
  return names
}
