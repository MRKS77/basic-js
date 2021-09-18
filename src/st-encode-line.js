export default function encodeLine(str) {
  return [...str].reduce((acc, n) => {
    if (acc.length && acc[acc.length - 1][0] === n) acc[acc.length - 1].push(n)
    else acc.push([n])
    return acc
  }, []).map(a => a.length > 1 ? String(a.length) + a[0] : a[0]).join('')
}