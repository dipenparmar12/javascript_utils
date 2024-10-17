/**
 * Determine whether the given value is a function.
 * @param {*} x
 * @param callMethod
 * @param args
 * @returns {boolean}
 */
export default function isFunction(x, callMethod = false, ...args) {
  const is = Object.prototype.toString.call(x) === '[object Function]'
  if (is && callMethod) return x(...args)
  return is
}

/**
 *
 * @param {*} func
 * @src https://javascript.info/currying-partials
 * @example isFunctionAndCallV2((e)=> console.log(e))('curry function test..')
 * @example const add = (a, b) => a + b;
 * const add5 = add.bind(null, 5);
 * add5(2) // 7
 */
export function isFunctionAndCallV2(func) {
  console.log('IsFunctionAndCallV2.js::[2] func', func)
  if (Object.prototype.toString.call(func) !== '[object Function]') {
    return () => false
  }

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    }
    return function (...args2) {
      return curried.apply(this, args.concat(args2))
    }
  }
}
