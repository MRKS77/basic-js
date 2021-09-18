export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  try {
    date.toUTCString()
  }
  catch {
    throw new Error('Invalid date!')
  }
  const SEASONS = ['winter', 'spring', 'summer', 'autumn']
  return SEASONS[Math.floor(((date.getMonth() + 1) % 12) / 3)]
}