/**
 * 
 * @param obj 
 * @param cb 
 * @returns 
 * @src https://newbedev.com/javascript-how-to-loop-through-nested-objects-in-javascript-code-example
 */
function IterateObject(obj, cb = () => {}) {
  const res = {}
  function recurse(obj, current) {
    for (const key in obj) {
      let value = obj[key]
      if (value !== undefined) {
        if (value && typeof value === 'object') {
          recurse(value, key)
        } else {
          // Do your stuff here to var value
          res[key] =
            Object.prototype.toString.call(cb) === '[object Function]'
              ? cb(value, res[key], res, obj)
              : value
        }
      }
    }
  }
  recurse(obj)
  return res
}


/**
 * 
 * @param {*} obj 
 * @param {*} cb 
 * @returns obj
 */
function traverseObj(obj, cb = (value, key, currentObj) => {}) {
  const res = {}
  function recurse(obj, current) {
    for (const key in obj) {
      let value = obj[key]
      if (value !== undefined) {
        if (value && typeof value === 'object') {
          recurse(value, key)
        } else {
          // Do your stuff here to var value
          res[key] =
            Object.prototype.toString.call(cb) === '[object Function]'
              ? cb(value, key, res)
              : value
        }
      }
    }
  }
  recurse(obj)
  return res
}


const exampleUserObj = {
  name: 'Test Name',
  age: 30,
  car : {
    make:'BMW',
    color:'black',
    year:2021
  }
}

traverseObj(exampleUserObj, (value, key) => {
  console.log( key,':' ,value)
  return value
})