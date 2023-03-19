
/**
 * Get value from a deeply nested object using a string path.
 * @param {*} object The object to query.
 * @param {Array|string} path (): The path of the property to get.
 * @param {*} defaultValue The value returned for undefined resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 * ```
 * const object = { a: { b: { c: 3 } } }
 * get(object, 'a.b.c')
 * // => 3
 * ```
 * @example
 * ```
 * const object = { a: [{ b: { c: 3 } }] }
 * get(object, 'a[0].b.c')
 * // => 3
 * ```
 * @example
 * ```
 * const object = { a: [{ b: { c: 3 } }] }
 * get(object, 'a[0].b.c', 'default')
 * // => 3
 * ```
 */
function get(object, path, defaultValue = undefined) {
  let paths = []
  const isString = typeof path === 'string'
  paths = isString ? path.replace(/\[(\d+)\]/g, '.$1').split('.') : path
  let result = object
  let i = 0
  const { length } = paths
  while (result != null && i < length) {
    result = result[paths[i++]]
  }
  return result == null || i !== length ? defaultValue : result
}



/*

Can we update `get` method  that take second argument string or array of strings, and 3rd arg as options to controll behavior
new signature should be
 * Get value from a deeply nested object using a string path.
 * @param {*} object The object to query.
 * @param {Array|string} path (): The path of the property to get.
 * @param {Object} options
 * @param {Array|string} options.defaultValue: The value returned for undefined resolved values. Accordion to path Value
 * @param {Boolean} options.shouldContainOriginalPath: Should get original tree if true, or just values if false
 * @returns {*} Returns the resolved value.
function get(object, path, options = {}) {
  // ?
}

const myObj = { a: [{ b: { c: 3 } }] }
get(myObj, 'a[0].b.c', {defaultValues: 'NotFound' }) // returns 3
get(myObj, 'a.b.c.d', {defaultValues: 'NotFound' }) // returns 'NotFound'

const myObj2 = {
  a: [{ b: { c: 3 } }, {bb:'a_1_bb', bbb:'a_a_bbb'}],
  b: {c: 'b.c.Val', d: 'b.d.Val' },
  c: {c3: 'c.c3.Val', d: 'c.b.d.Val' },
  found: {prop: 100},
}
get(myObj2, ['a[0].b.c', 'b.d']) //  [3, 'b.d.Val']

get(myObj2, ['a[0].b.c', 'b.d'], {shouldContainOriginalPath: false} ) //  [3, 'b.d.Val']
get(myObj2, ['a[1].bb.c', 'c.d'], {shouldContainOriginalPath: true} ) //  { a: [null, { b: bb:'a_1_bb'}], d: 'c.b.d.Val'} }

get(myObj2, ['not.found.prop', 'not.found.prop2'], {defaultValues:[1,2]} ) // [1, 2]
get(myObj2, ['found.prop', 'not.found.prop2'], {defaultValues:[100, 0]} ) // [1001, 0]

get(myObj2, ['found.prop', 'not.found.prop2'], { shouldContainOriginalPath:true, defaultValues:[100, 0]} ) 
// {
//   found: {prop: 100},
//   not: {found:{prop2:0}}
// }


 */