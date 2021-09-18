export default function minesweeper(matrix) {
  let res = []
  for (let row = 0; row < matrix.length; row++) {
    res.push([])
    for (let col = 0; col < matrix[row].length; col++) {
      const env = []
      if (matrix[row - 1]) env.push(
        matrix[row - 1][col - 1], matrix[row - 1][col], matrix[row - 1][col + 1]
      )
      env.push(
        matrix[row][col - 1], matrix[row][col + 1]
      )
      if (matrix[row + 1]) env.push(
        matrix[row + 1][col - 1], matrix[row + 1][col], matrix[row + 1][col + 1]
      )
      res[row].push(env.reduce((acc, e) => e === true ? ++acc : acc, 0))
    }
  }
  return res
}