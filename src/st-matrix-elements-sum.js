export default function getMatrixElementsSum(matrix) {
  let acc = 0
  for (let x = 0; x < matrix[0].length; x++) {
    for (let n = 0; n < matrix.length; n++) {
      if (matrix[n][x] === 0) break
      acc += matrix[n][x]
    }
  }
  return acc
}