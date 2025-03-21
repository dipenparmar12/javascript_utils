/**
 * Search for the first matching value inside an array of objects
 * @param {Object[]} arrOfObj - The array of objects to search through
 * @param {string} key - The key to search for
 * @param {*} value - The value to match
 * @returns {Object} - The first matching object, or undefined if no match is found
 * @example
 * const data = [
 *  { id: 1, name: 'John' },
 * { id: 2, name: 'Jane' },
 * { id: 3, name: 'Doe' }
 * ];
 * const result = findFirstVal(data, 'name', 'Jane');
 * console.log(result); // Output: { id: 2, name: 'Jane' }
 */
function findFirstVal(arrOfObj, key, value) {
  return arrOfObj && arrOfObj.find((el) => el[key] === value)
}

export default findFirstVal

/*
const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];
const result = findFirstVal(data, 'name', 'Jane');
console.log(result); // Output: { id: 2, name: 'Jane' }
*/
