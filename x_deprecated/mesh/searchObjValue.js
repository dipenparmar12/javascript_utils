/**
 * Search value inside array of Object
 * @param {Object} arrOfObjects
 * @param {string[]} keys
 * @returns {Object}
 */
export const searchObjValue = (arrOfObjects, value, key) => {
	return arrOfObjects && arrOfObjects.find((el) => el[key] === value)
};

// Src: https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript


// /**
//  * Represents a search trough an array.
//  * @function search
//  * @param {Array} array - The array you wanna search trough
//  * @param {string} key - The key to search for
//  * @param {string} [prop] - The property name to find it in
//  */

// function search(array, key, prop){
//     // Optional, but fallback to key['name'] if not selected
//     prop = (typeof prop === 'undefined') ? 'name' : prop;    

//     for (var i=0; i < array.length; i++) {
//         if (array[i][prop] === key) {
//             return array[i];
//         }
//     }
// }
