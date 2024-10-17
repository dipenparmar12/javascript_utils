/**
 * Returns a replacer function that removes circular references from a JSON string.
 * @returns {function} The replacer function.
 * @example
 *
 * const circularObj = { a: 1 };
 * circularObj.b = circularObj;
 *
 * const jsonString = JSON.stringify(circularObj, getCircularReplacer());
 * console.log(jsonString); // Output: {"a":1}
 */
function getCircularReplacer() {
  const seen = new WeakSet()
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  }
}
export default getCircularReplacer

/* ------------------------------------
  Example

const circularObj = { a: 1 };
circularObj.b = circularObj;

const jsonString = JSON.stringify(circularObj, getCircularReplacer());
console.log(jsonString); // Output: {"a":1}

 ------------------------------------ */
