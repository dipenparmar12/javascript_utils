/**
 *
 * @param {Array} collection
 * @param {*} newObj
 * @param {String} key
 * @returns {*}
 */
function insertUnique(collection, newObj, key = 'id') {
  if (!collection?.findIndex) return collection
  if (!newObj?.[key]) return collection

  const result = [...collection]
  const index = collection.findIndex((i) => i[key] === newObj[key])

  if (index > -1) result.splice(index, 1) // Remove element if already exits in collection

  result.splice(result.length, 1, newObj) // Insert element at end of the collection

  return result
}

export default insertUnique



/* 
========================================================
  example
======================================================== 

users = [
  { id: 1, name: 'dipen' },
  { id: 2, name: 'john' },
]

usersUpdated = insertUnique(users, { id: 3, name: 'Mike' }, 'id')
// usersUpdated = [
//   { id: 1, name: 'dipen' },
//   { id: 3, name: 'Mike' }, // Inserted at index 1
//   { id: 2, name: 'john' },
// ]

insertUnique(users, { id: 1, name: 'dipen' }, 'id') // nothing will change, since entry already exist with id=1 will return same result

*/
