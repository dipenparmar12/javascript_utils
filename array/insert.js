/**
 * Insert an item into an array at a specific index (JavaScript),
 * Modify the array length
 * @param {Array} arr
 * @param {Number} index=0
 * @param {*} value
 * @returns {Array}
 * @see https://stackoverflow.com/a/586189/8592918
 * @example
 * arr = ['a','b']
 * insert(arr,2,'c') // arr = ['a', 'b', 'c']
 * 
 * arr = [11,22]
 * insert(arr, 2, 33 ) // arr = [11, 22, 33]
 *
 */
function insert(arr, index = 0, value) {
  arr.splice(index, 0, value)
  return arr
}

export default insert
