const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Deep Merge JavaScript Objects Merging Recursively
 * @param {Object} target
 * @param  {...Object} sources
 * @returns {Object}
 * @see https://thewebdev.info/2021/03/06/how-to-deep-merge-javascript-objects/
 * @example
 * let merged = mergeRecursive(
 *     {
 *       a: 11,
 *       b: {bb: 11},
 *       c: 11,
 *     },
 *     {b: {bbb: 222}, c: 222}
 * )
 * console.log(merged)
 * merged = {
 *   a: 11,
 *   b: {bb: 11,bbb: 222 },
 *   c: 222
 * }
 */
function mergeRecursive(target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(target, {
            [key]: {},
          })
        mergeRecursive(target[key], source[key])
      } else {
        Object.assign(target, {
          [key]: source[key],
        })
      }
    }
  }

  return mergeRecursive(target, ...sources)
}

export default mergeRecursive

// let merged = mergeRecursive(
//     {
//       a: 11,
//       b: {bb: 11},
//       c: 11,
//     },
//     {b: {bbb: 222}, c: 222}
// )
// console.log(merged)
// merged = {
//   a: 11,
//   b: {bb: 11, bbb: 222},
//   c: 222
// }

export default mergeDeep

/**
 * Merge one or more object and Clone an object recursively. Array,Date,RegExp,Object,Map,Set
 * @param {*} obj
 * @returns {*}
 * @example
  ```
    const obj = { name: 'John', age: 0,city: 'New York' }
    const obj2 = { name: 'new John', age: 50, }
    deepCloneMerge(obj, obj2)
    // { name: 'new John', age: 50, city: 'New York' }
  ```
 */
export function mergeDeepV2(obj, ...args) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Map) return new Map(obj)
  if (obj instanceof Set) return new Set(obj)
  if (obj instanceof Array) return obj.map((v) => mergeDeepV2(v))
  if (obj instanceof Object) return Object.assign({}, obj, ...args)
  return obj
}

/* 
========================================================
  Example/Usage
======================================================== 
*/
// const merged = mergeDeep(
//   {
//     a: 11,
//     b: { bb: 11 },
//     c: 11,
//   },
//   { b: { bbb: 222 }, c: 222 }
// )
// console.log(merged)

// const merged2 = mergeDeep(
//   {
//     a: 1,
//     b: { bb: 11 },
//     c: 1,
//     d: {
//       d: {
//         d2: 123,
//       },
//     },
//   },
//   { d: { d: { d3: 333 } } }
// )
// console.log(merged2)

// const merged3 = mergeDeep(
// {
//     a: '_aa',
//     b : { ba: '_ba', bb:'bb', b3:{ bc: { bca:1 }} },
//     c: { ca:'_ca', cb: '_cb' },
//     e: 0,
//     d: {}

// },
// {
//     b: { bb: 'bb', b3:{ bc: { bcd: 1 }}},
//     d: { da: 'da', db: 'db', },
// },
// {
//     e: 123,
//     f: 'newProp',
//     g: 0,
//     h: false,
//     i: true,
//     j: null,
//     k: undefined,
// }
// )
// console.log(merged3)


const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Deep merge two objects, merging arrays and their elements recursively.
 * @param {Object} object - The target object to merge into.
 * @param {Object} source - The source object to merge from.
 * @returns {Object} - The merged object.
 * @see https://stackoverflow.com/a/34749873/8592918
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @example
 * const target = { a: 1, b: { c: 2 } }
 * const source = { b: { d: 3 } }
 * const result = deepMerge(target, source)
 * console.log(result) // { a: 1, b: { c: 2, d: 3 } }
 */
function mergeRecursive(object, source) {
  if (isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!object[key]) Object.assign(object, {[key]: {}})
        mergeRecursive(object[key], source[key])
      } else if (Array.isArray(source[key])) {
        object[key] = object[key] || []
        object[key] = object[key].concat(source[key])
      } else {
        Object.assign(object, {[key]: source[key]})
      }
    }
  }
  return object
}

/*
const data = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: ['#a6a6a6','#ed7d31','#5b9bd5','#4472c4','#ffc000',],
    },
  ],
}

const labels = ['Water Heating', 'Equipment', 'Heating', 'Lighting', 'Cooling']
const datasetsData = [{ data: [53, 43, 35, 7, 7], backgroundColor: [] }]

const mergedData = deepMerge(data, {
  labels: labels,
  datasets: datasetsData
})

console.log(mergedData)
//  {
//   labels: ['Water Heating', 'Equipment', 'Heating', 'Lighting', 'Cooling'],
//   datasets: [
//     {
//       data: [53, 43, 35, 7, 7],
//       backgroundColor: ['#a6a6a6', '#ed7d31', '#5b9bd5', '#4472c4', '#ffc000',],
//     },
//   ],
// }

*/



// function deepMergeV2(target, source) {
// // Create a copy of the source object to prevent modification of the original object
//   const newSource = JSON.parse(JSON.stringify(source));

//   // Loop through each key in the newSource object
//   for (const key in newSource) {
//     if (Object.prototype.hasOwnProperty.call(newSource, key)) {
//       // If the key exists in both objects, recursively merge the values
//       if (target[key] !== undefined) {
//         deepMergeV2(target[key], newSource[key]);
//       } else {
//         // Otherwise, assign the value of the key in newSource to the key in target
//         target[key] = newSource[key];
//       }
//     }
//   }
//   return target;
// }

// export deepMergeV2

/*
// Usage Example
const data = {
  labels: [],
  datasets: [
    {
      data: [],
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
//       data: [100, 200, 300, 500],
//       backgroundColor: ['#a6a6a6', '#ed7d31', '#5b9bd5', '#4472c4', '#ffc000',],
//     },
//   ],
// }
*/