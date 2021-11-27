/**
 * 
 * @param {*} x 
 * @returns boolean
 * @src https://stackoverflow.com/a/17772086/8592918
 */
function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]"
}