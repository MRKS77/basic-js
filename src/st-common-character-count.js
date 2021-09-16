export default function getCommonCharacterCount(s1, s2) {
  s1 = [...s1]
  s2 = [...s2]
  return s1.reduce((acc, n) => {
    if (!s2.length) return acc
    const idx = s2.findIndex(l => l === n)
    if (idx !== -1) {
      s2.splice(idx, 1)
      acc++
    }
    return acc
  }, 0)
}