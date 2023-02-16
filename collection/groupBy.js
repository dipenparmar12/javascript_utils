/**
 * Groups the elements in an array by a given key.
 *
 * @param {Array} data - The array to be grouped
 * @param {string} key - The key to group the elements by
 * @param {Object} [options={omitEmptyKeys: false, setGroupProp: false}] - The options object
 * @param {Boolean} [options.omitEmptyKeys=false] - Whether to omit items with empty or null keys
 * @param {Boolean} [options.setGroupProp=false] - Whether to set the group key in every item of the group
 * @returns {Object} An object where each key is the value of the grouping key, and its value is an array of all the items that have that key.
 *
 * @example
 * const data = [{name: 'John', age: 25}, {name: 'Jane', age: 26}, {name: 'Jim', age: 25}]
 * const groupedData = groupBy(data, 'age', {setGroupProp: true})
 * console.log(groupedData)
 * // Output:
 * // {
 * //   25: [{name: 'John', age: 25, ageKey: 25}, {name: 'Jim', age: 25, ageKey: 25}],
 * //   26: [{name: 'Jane', age: 26, ageKey: 26}]
 * // }
 */

function groupBy(
    data,
    key,
    options = {},
) {
  if (!data) return []
  const {
    omitEmptyKeys = false,
    setGroupProp = false,
  } = options || {}

  return data?.reduce((acc, item) => {
    const groupKey = item[key]
    if (omitEmptyKeys || groupKey === null || groupKey === '') return acc
    // if (setGroupProp) item[key][groupKey] = groupKey

    acc[groupKey] = acc[groupKey] || []
    acc[groupKey].push(item)
    return acc
  }, {})
}


/* 
========================================================
  example
======================================================== 
*/

// var collect = [
//   { id: 11, dir: 'left', color: 'red' },
//   { id: 22, dir: 'right', color: 'green' },
//   { id: 33, dir: 'top', color: 'red' },
//   { id: 44, dir: 'bottom', color: 'green' },
// ]
// groupBy(collect, 'color')

// const res = {
//   red: [
//     { id: 11, dir: 'left', color: 'red' },
//     { id: 33, dir: 'top', color: 'red' },
//   ],
//   green: [
//     { id: 22, dir: 'right', color: 'green' },
//     { id: 44, dir: 'bottom', color: 'green' },
//   ],
// }

export default groupBy

/*
/**
 * @param {*} data
 * @param {*} key
 * @returns {Array}
function groupBy(data, key) {
  if (!data) return []
  return data.reduce((acc, item) => {
    const groupKey = item[key]
    acc[groupKey] = acc[groupKey] || []
    acc[groupKey].push(item)
    return acc
  }, {})
}
*/


/**
 * Groups the elements in an array by a given key.
 *
 * @param {Array} data - The array to be grouped
 * @param {string} key - The key to group the elements by
 * @param {Object} [options={omitEmptyKeys: false, setGroupProp: false}] - The options object
 * @param {Boolean} [options.omitEmptyKeys=false] - Whether to omit items with empty or null keys
 * @param {Boolean} [options.setGroupProp=false] - Whether to set the group key in every item of the group
 * @param {Boolean} [options.callback=key=>key] - Callback handler for each key
 * @returns {Object} An object where each key is the value of the grouping key, and its value is an array of all the items that have that key.
 *
 * @example
 * const data = [{name: 'John', age: 25}, {name: 'Jane', age: 26}, {name: 'Jim', age: 25}]
 * const groupedData = groupBy(data, 'age', {setGroupProp: true})
 * console.log(groupedData)
 * // Output:
 * // {
 * //   25: [{name: 'John', age: 25, ageKey: 25}, {name: 'Jim', age: 25, ageKey: 25}],
 * //   26: [{name: 'Jane', age: 26, ageKey: 26}]
 * // }
 */


export function groupByV2(
    data,
    key,
    options = {},
) {
  if (!data) return []
  const {
    omitEmptyKeys = false,
    setGroupProp = false,
    callback = (key) => key
  } = options || {}

  return data?.reduce((acc, item) => {
    const groupKey = item[key]
    if (omitEmptyKeys || groupKey === null || groupKey === '') return acc
    // if (setGroupProp) item[key][groupKey] = groupKey
    const keyModified = callback ? callback?.(groupKey) || groupKey : groupKey

    acc[keyModified] = acc[keyModified] || []
    acc[keyModified].push(item)
    return acc
  }, {})
}

