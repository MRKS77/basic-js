export default function sortByHeight(arr) {
  const arrSorted = arr.filter(x => x !== -1).sort((a, b) => a - b)
  return arr.map(x => x === -1 ? x : arrSorted.shift())
}