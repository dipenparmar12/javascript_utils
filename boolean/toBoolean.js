/**
 *
 * @param {*} str
 * @returns {boolean} true if str is a 'true'
 */
function toBoolean(str) {
  // @src: https://stackoverflow.com/a/69397610/8592918
  return String(str && str.valueOf()).toLowerCase() === true.toString()
}

export default toBoolean
