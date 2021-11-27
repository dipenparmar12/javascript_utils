import { format } from 'date-fns'

/**
 * @param {*} date
 * @param {string} d_format
 * @param error
 * @doc https://date-fns.org/v2.22.1/docs/format
 */
function format_date(date, d_format = 'd MMM yyy', error) {
  try {
    if (!date) return null
    return typeof date.getMonth === 'function' // determine given date is DateObject or stringDate
      ? format(date, d_format)
      : format(new Date(date), d_format)
  } catch (e) {
    console.log('format_date.js::14 e', e)
    return error
  }
}

export default format_date
