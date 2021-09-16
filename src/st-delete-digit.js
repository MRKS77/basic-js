export default function deleteDigit(n) {
  const digits = [...String(n)]
  const nums = digits.map((_, idx0) => +digits.filter((_, idx1) => idx0 !== idx1).join(''))
  return Math.max(...nums)
}