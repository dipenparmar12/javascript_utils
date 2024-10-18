/**
 * Filters objects from a collection based on a condition map of property values.
 *
 * @param {Array} collection - Array of objects to filter.
 * @param {Object|Array} conditionMap - Object or array containing property values to filter by.
 * @param {String} propName - The property name in the collection objects to match with conditionMap keys or values.
 * @returns {Array} - Filtered collection of objects.
 * @throws {Error} - If the collection is not an array of objects, conditionMap is not a valid object or array, or propName is not a string.
 * @example // Filter by an object of property values
 * const pickNames = {
 *  measure1: true,
 *  measure2: false,
 *  measure3: true,
 *  measure4: false,
 *  measure5: true,
 * }
 * const collection = [
 * { id: 1, name: 'measure1', status: 'active' },
 * { id: 2, name: 'measure2', status: 'inactive' },
 * { id: 3, name: 'measure3', status: 'active' },
 * { id: 4, name: 'measure4', status: 'inactive' },
 * { id: 5, name: 'measure5', status: 'active' },
 * ]
 * const result = filterByTrueProps(collection, pickNames, 'name')
 * console.log(result)
 * // Output: [
 * // { id: 1, name: 'measure1', status: 'active' },
 * // { id: 3, name: 'measure3', status: 'active' },
 * // { id: 5, name: 'measure5', status: 'active' }
 * // ]
 *
 * @example // Filter by an array of property values
 * const pickNamesArray = ['measure1', 'measure3', 'measure5']
 * const collection = [
 * { id: 1, name: 'measure1', status: 'active' },
 * { id: 2, name: 'measure2', status: 'inactive' },
 * { id: 3, name: 'measure3', status: 'active' },
 * { id: 4, name: 'measure4', status: 'inactive' },
 * { id: 5, name: 'measure5', status: 'active' },
 * ]
 * const result = filterByTrueProps(collection, pickNamesArray, 'name')
 * console.log(result)
 * // Output: [
 * // { id: 1, name: 'measure1', status: 'active' },
 * // { id: 3, name: 'measure3', status: 'active' },
 * // { id: 5, name: 'measure5', status: 'active' }
 * // ]
 */
function filterByPropMap(collection, conditionMap, propName) {
  // Validate inputs
  if (!Array.isArray(collection)) {
    console.debug('filterByPropMap[36]:', collection, conditionMap, propName)
    throw new Error('The collection must be an array of objects.')
  }

  if (typeof conditionMap !== 'object' || conditionMap === null) {
    console.debug('filterByPropMap[41]:', collection, conditionMap, propName)
    throw new Error('The conditionMap must be a valid object.')
  }

  if (typeof propName !== 'string' || propName.trim() === '') {
    console.debug('filterByPropMap[46]:', collection, conditionMap, propName)
    throw new Error('The propName must be a non-empty string.')
  }

  // Check if conditionMap is an array
  const isArrayCondition = Array.isArray(conditionMap)

  // Filter the collection based on the conditionMap
  return collection.filter((item) => {
    if (item.hasOwnProperty(propName)) {
      if (isArrayCondition) {
        return conditionMap.includes(item[propName])
      } else if (conditionMap.hasOwnProperty(item[propName])) {
        return conditionMap[item[propName]] === true
      }
    }
    return false
  })
}

export default filterByPropMap

/*
// Example usage
const pickNames = {
  measure1: true,
  measure2: false,
  measure3: true,
  measure4: false,
  measure5: true,
}

const collection = [
  { id: 1, name: 'measure1', status: 'active' },
  { id: 2, name: 'measure2', status: 'inactive' },
  { id: 3, name: 'measure3', status: 'active' },
  { id: 4, name: 'measure4', status: 'inactive' },
  { id: 5, name: 'measure5', status: 'active' },
]

// Filter based on true values in pickNames
const result = filterByTrueProps(collection, pickNames, 'name')

console.log(result)
// Example usage
const pickNames = {
  measure1: true,
  measure2: false,
  measure3: true,
  measure4: false,
  measure5: true,
}

const collection = [
  { id: 1, name: 'measure1', status: 'active' },
  { id: 2, name: 'measure2', status: 'inactive' },
  { id: 3, name: 'measure3', status: 'active' },
  { id: 4, name: 'measure4', status: 'inactive' },
  { id: 5, name: 'measure5', status: 'active' },
]

// Filter based on true values in pickNames
const result = filterByTrueProps(collection, pickNames, 'name')

console.log(result)

*/
