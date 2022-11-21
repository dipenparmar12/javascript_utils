/**
 * get difference in specified unit between two dates
 * @param {Date} d1
 * @param {Date} d2
 * @param {String} unit
 * @returns
 */
function differenceOfDates(d1, d2, unit) {
  const diff = d2.getTime() - d1.getTime()
  switch (unit) {
    case 'years':
      return diff / (1000 * 60 * 60 * 24 * 365)
    case 'months':
      return diff / (1000 * 60 * 60 * 24 * 30)
    case 'days':
      return diff / (1000 * 60 * 60 * 24)
    case 'hours':
      return diff / (1000 * 60 * 60)
    case 'minutes':
      return diff / (1000 * 60)
    case 'seconds':
      return diff / 1000
    default:
      return diff
  }
}

export default differenceOfDates
