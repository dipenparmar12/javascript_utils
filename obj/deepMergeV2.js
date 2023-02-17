/**
 * Recursively merges the properties of two objects, overwriting the properties in the first object with the properties in the second object.
 *
 * @param {Object} target - The target object to merge the properties into.
 * @param {Object} source - The source object to merge the properties from.
 * @returns {Object} The merged object.
 */
function deepMergeV2(target, source) {
// Create a copy of the source object to prevent modification of the original object
  const newSource = JSON.parse(JSON.stringify(source));

  // Loop through each key in the newSource object
  for (const key in newSource) {
    if (Object.prototype.hasOwnProperty.call(newSource, key)) {
      // If the key exists in both objects, recursively merge the values
      if (typeof target[key] === "object" && typeof newSource[key] === "object") {
        deepMergeV2(target[key], newSource[key]);
      } else {
        // Otherwise, assign the value of the key in newSource to the key in target
        target[key] = newSource[key];
      }
    }
  }
  return target;
}

export default deepMergeV2

/*
// Usage Example
const data = {
  labels: [],
  datasets: [
    {
      data: [50],
      backgroundColor: ['#a6a6a6', '#ed7d31', '#5b9bd5', '#4472c4', '#ffc000',],
    },
  ],
}

const dataToBeMerged = {
  labels: ['Water Heating', 'Equipment', 'Heating', 'Lighting', 'Cooling'],
  datasets: [{data: [100, 200, 300, 500], backgroundColor: []},]
}

const mergedData = deepMergeV2(data, dataToBeMerged);

console.log(mergedData);
//  {
//   labels: ['Water Heating', 'Equipment', 'Heating', 'Lighting', 'Cooling'],
//   datasets: [
//     {
//       data: [50, 100, 200, 300, 500],
//       backgroundColor: ['#a6a6a6', '#ed7d31', '#5b9bd5', '#4472c4', '#ffc000',],
//     },
//   ],
// }
*/
