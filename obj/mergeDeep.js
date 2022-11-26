const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Deep Merge JavaScript Objects Merging Recursively
 * @param {Object} target
 * @param  {...Object} sources
 * @returns {Object}
 * @see https://thewebdev.info/2021/03/06/how-to-deep-merge-javascript-objects/
 * @see https://stackoverflow.com/a/34749873/8592918
 * @see https://attacomsian.com/blog/javascript-merge-objects
 * @example 
 * 
const merged = mergeDeep(
  {
    a: 11,
    b: { bb: 11 },
    c: 11,
  },
  { b: { bbb: 222 }, c: 222 }
)
console.log(merged) 
// {
//   a: 11,
//   b: { bb: 11, bbb: 222 },
//   c: 222,
// }
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(target, {
            [key]: {},
          })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, {
          [key]: source[key],
        })
      }
    }
  }

  return mergeDeep(target, ...sources)
}

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
