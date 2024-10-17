// Helper function to handle cyclic references in JSON.stringify
/*
 * This function is used to handle cyclic references when using JSON.stringify.
 * It returns a replacer function that replaces circular references with the string '[Circular]'.
 * Usage:
 * ```
 * const obj = { a: 1 }
 * obj.b = obj
 * JSON.stringify(obj, getCircularReplacer())
 * ```
 *
 */
export function getCircularReplacer() {
  const seen = new WeakSet()
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return '[Circular]'
      }
      seen.add(value)
    }
    return value
  }
}
