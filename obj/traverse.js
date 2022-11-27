/**
 * Traverse all the Props/values of a Js Object.
 * @param {Object} obj
 * @param {Function} fn
 * @returns {undefined} undefined
 * @see https://stackoverflow.com/a/722732/8592918
 * @example
 */
function traverse(obj = {}, fn) {
  for (var i in obj) {
    fn.apply(this, [i, obj[i]])
    if (obj[i] !== null && typeof obj[i] == 'object') {
      //going one step down in the object tree!!
      traverse(obj[i], fn)
    }
  }
}

export default traverse
