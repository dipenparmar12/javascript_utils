/**
 *
 * @param {*} obj {key:val}
 * @param {*} keysMap {key:val}
 * @returns {*} obj
 * @src https://www.30secondsofcode.org/js/s/rename-keys
 * @src https://medium.com/free-code-camp/30-seconds-of-code-rename-many-object-keys-in-javascript-268f279c7bfa
 */
function renameKey(obj, keysMap) {
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

// obj = {
//   name: 'Bobo',
//   job: 'Front-End Master',
//   target: 'value'
// }
// keysMap = {
//   name: 'firstName',
//   job: 'passion',
//   target: 'targetOutput'
// }
// renameKey(obj,keysMap)
// // { firstName: 'Bobo', passion: 'Front-End Master', targetOutput:'value' }

export default renameKey

/*
const renameKey = (obj,keysMap) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
// const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
// renameKey({ name: 'firstName', job: 'passion' }, obj);
// { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
*/
