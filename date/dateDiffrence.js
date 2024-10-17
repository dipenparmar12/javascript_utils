/**
 * get difference in specified unit between two dates
 * @param {Date} d1
 * @param {Date} d2
 * @param {String} unit
 * @returns
 */
function differenceOfDates(d1, d2, unit) {
  // console.log('dateDiffrence.js::[9] d1', d1)
  // console.log('dateDiffrence.js::[10] d2', d2)
  // console.log('dateDiffrence.js::[11] unit', unit)

  //  Input validations
  if (typeof d1?.getMonth !== 'function') {
    throw `${d1}:: Invalid date`
  }
  if (typeof d2?.getMonth !== 'function') {
    throw `${d2}:: Invalid date`
  }

  const units = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']
  if (!units.includes(unit)) {
    throw `${unit}:: Invalid unit, Unit must be one of following ${units.join(
      ', ',
    )}`
  }

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
