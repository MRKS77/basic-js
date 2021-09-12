export default function countCats(matrix) {
  return matrix.reduce((ac, m) => ac + m.filter(i => i === '^^').length, 0)
}
