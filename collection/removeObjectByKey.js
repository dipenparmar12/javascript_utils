/**
 * Remove an object from an array based on a key value
 * @param {Array} array - The array to modify
 * @param {String} key - The key to use for comparison
 * @param {*} value - The value of the key to match
 * @returns {Array} - The modified array
 */
function removeObjectByKey(array, key, value) {
  return array.filter((item) => item[key] !== value)
}

// // Example usage:
// const people = [
//   { id: 1, name: 'John', age: 32 },
//   { id: 2, name: 'Jane', age: 25 },
//   { id: 3, name: 'Bob', age: 48 },
//   { id: 4, name: 'Mary', age: 18 }
// ];

// // Remove the object with id = 2
// const updatedPeople = removeObjectByKey(people, 'id', 2);

// console.log(updatedPeople);
