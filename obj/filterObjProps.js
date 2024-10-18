/**
 * Filters an object and returns a new object with only properties that have `true` values.
 *
 * @param {Object} obj - The object to filter.
 * @param validObj
 * @returns {Object} - A new object with only `true` values.
 * @example
 * obj = {a:false, b:'', c:null, d:undefined, e:[], f:"AM OK"}
 * filterObjProps(obj) // {"e": [],"f": "AM OK" }
 *
 * @example
 * const obj = {  a: true,b: false,  c: true, d: false }
 * filterObjProps(obj) // => { a: true, c: true }
 *
 * @example with an object instead of an array
 * const productInventory = {
 *   "electronics": ["laptop", "smartphone", "headphones"],
 *   "books": ["fiction", "non-fiction", "mystery"],
 *   "clothing": ["t-shirts", "jeans", "jackets"],
 *   "furniture": ["sofa", "bed", "table"]
 * };
 * const activeCategories = {
 *   "electronics": false,
 *   "books": true,
 *   "clothing": false,
 *   "furniture": true
 * };
 * filterObjProps(productInventory, activeCategories);
 * // {
 * //   "books": ["fiction", "non-fiction", "mystery"],
 * //   "furniture": ["sofa", "bed", "table"]
 * // }
 */
function filterObjProps(obj, validObj = null) {
  if (typeof obj !== 'object' || obj === null) {
    console.log('filterObjProps[25]:obj', obj)
    throw new TypeError('Expected an object')
  }

  if (validObj && typeof validObj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => validObj[key]),
    )
  }

  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => value))
}

export default filterObjProps

/*
// Example: Filtering products based on active categories
const activeCategories = {
  "electronics": false,
  "books": true,
  "clothing": false,
  "furniture": true
};
// Example with an object instead of an array
const productInventory = {
  "electronics": ["laptop", "smartphone", "headphones"],
  "books": ["fiction", "non-fiction", "mystery"],
  "clothing": ["t-shirts", "jeans", "jackets"],
  "furniture": ["sofa", "bed", "table"]
};
const filteredInventory = filterObjProps(productInventory, activeCategories);
console.log(filteredInventory);
// {
//   "books": ["fiction", "non-fiction", "mystery"],
//   "furniture": ["sofa", "bed", "table"]
// }
*/
