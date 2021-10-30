
/**
 * @param {*} date
 * @param {string} date
 */
 const parseDate = (date) => {
  if (!date) return null
  return typeof date.getMonth === 'function' // determine given date is DateObject or stringDate
    ? date
    : new Date(date)
}

export default parseDate