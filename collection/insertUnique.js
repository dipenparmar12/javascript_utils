/**
 *
 * @param {Array} collection
 * @param {*} newObj
 * @param {String} key
 * @param {Number|String} position Optional
 * @returns {*}
 * @example
 * users = [
 *   { id: 1, name: 'dipen' },
 *   { id: 2, name: 'john' },
 * ]

 * usersUpdated = insertUnique(users, { id: 3, name: 'Mike' }, 'id', 1)
 * // usersUpdated = [
 * //   { id: 1, name: 'dipen' },
 * //   { id: 3, name: 'Mike' }, // Inserted at index 1
 * //   { id: 2, name: 'john' },
 * // ]
 */
function insertUnique(collection, newObj, key = 'id', position) {
  if (!collection?.findIndex) return collection
  if (!newObj?.[key]) return collection
  if (position == undefined) position = collection.length // Defined position where new item inserted

  // const collection = [...collection]
  const foundIdx = collection.findIndex((el) => el[key] === newObj[key])

  if (foundIdx === -1) {
    collection.splice(position, 0, newObj) // Insert element at end of the collection
  } else {
    collection[foundIdx] = newObj
  }

  return collection
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

usersUpdated = insertUnique(users, { id: 3, name: 'Mike' }, 'id', 1)
// usersUpdated = [
//   { id: 1, name: 'dipen' },
//   { id: 3, name: 'Mike' }, // Inserted at index 1
//   { id: 2, name: 'john' },
// ]

insertUnique(users, { id: 1, name: 'dipen' }, 'id', 1) // nothing will change, since entry already exist with id=1 will return same result

*/
