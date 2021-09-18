export default function isMAC48Address(n) {
  const len = 17
  if (n.length !== len) return false
  for (let x = 1; x <= len; x++) {
    if (x % 3 === 0 && n[x - 1] !== '-') return false
    else if (x % 3 !== 0 && !n[x - 1].match(/^[0-9a-f]$/i)) return false
  }
  return true
}