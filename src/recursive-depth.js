export default class DepthCalculator {

  calculateDepth(arr, acc = 0) {
    if (Array.isArray(arr)) {
      acc++
      if (arr.length) {
        acc = Math.max(...arr.map(n => this.calculateDepth(n, acc)))
      }
    }
    return acc
  }

}