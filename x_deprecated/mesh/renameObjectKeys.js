/**
 *
 * @param obj
 * @param keysMap
 * @returns obj
 * @src https://www.30secondsofcode.org/js/s/rename-keys
 * @src https://medium.com/free-code-camp/30-seconds-of-code-rename-many-object-keys-in-javascript-268f279c7bfa
 */
function renameKeys(obj, keysMap) {
  return Object.keys(obj).reduce((acc, key, i) => {
    const [newKey, newValue] = Array.isArray(keysMap[key])
      ? keysMap[key]
      : [keysMap[key], obj[key]]

    const renamedObject = {
      [newKey || key]: newValue,
    }

    return {
      ...acc,
      ...renamedObject,
    }
  }, {})
}

// newObj = renameKeys(tableHeadings, {
//   name: 'firstName',
//   job: ['passion', 'newValue Optional'],
// })
// { firstName: 'Bobo', passion: 'newValue Optional' }

// obj = {
//   name: 'Bobo',
//   job: 'Front-End Master',
// }
// keysMap = {
//   name: 'firstName',
//   job: 'passion',
// }
// renameKeys(obj,keysMap)
// // { firstName: 'Bobo', passion: 'Front-End Master' }

/*
const renameKeys = (obj,keysMap) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
  
// const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
// renameKeys({ name: 'firstName', job: 'passion' }, obj);
// { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
*/