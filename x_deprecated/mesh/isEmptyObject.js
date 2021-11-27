/**
 * test for an empty JavaScript object
 * @param {Object} object
 * @returns {Boolean}
 */
const isEmptyObject = (obj) => obj !== null && !Object.entries(obj).length

module.exports = isEmptyObject

// Src: https://stackoverflow.com/a/66032827/8592918
// const obj1 = {};
// const obj2 = {somekey: "someValue"};

// console.log(isEmpty(obj1))
// // -> true

// console.log(isEmpty(obj2))
// // -> false
