/**
 * Returns the first key in an object that corresponds to a given value.
 * @param {object} obj - The object to search in.
 * @param {*} value - The value to search for.
 * @returns {string|undefined} - The first key that corresponds to the value, or undefined if not found.
 * @example
 * const colors = {
 *   red: '#ff0000',
 *   green: '#00ff00',
 *   blue: '#0000ff'
 * };
 * const colorName = getKey(colors, '0000ff');
 * console.log(colorName); // Output: 'blue'
 */
function getKey(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}

export default getKey

/*
// Usage examples

const colors = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff'
};
const colorValue = '#00ff00';
const colorName = getKeyByValue(colors, colorValue);
console.log(colorName); // Output: 'green'

const myObj = {a: 1, b: 2, c: 3};
const key = getKeyByValue(myObj, 2);
console.log(key); // "b"

*/
