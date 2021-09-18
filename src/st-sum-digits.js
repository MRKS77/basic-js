export default function getSumOfDigits(n) {
  n = String(n).split('').map(x => Number(x)).reduce((acc, x) => acc + x, 0)
  return n > 9 ? getSumOfDigits(n) : n
}