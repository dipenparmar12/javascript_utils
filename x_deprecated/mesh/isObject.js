/**
 * 
 * @param {*} x 
 * @returns boolean
 * @src https://stackoverflow.com/a/8511350/8592918
 */
function isObject(x) {
  return typeof x === 'object' && x !== null && !Array.isArray(x)
  // return Object.prototype.toString.call(x) === "[object String]"
    // return typeof x === 'object' && x !== null
}
/// inline
/// Object.prototype.toString.call(myVar) === "[object String]"
