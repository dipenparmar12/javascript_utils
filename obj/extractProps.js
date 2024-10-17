/**
 * Extracts specific properties from an object.
 *
 * @param {Object} source - The source object to extract properties from.
 * @param {Object} keysToExtract - An object where keys are the properties to extract and values are either an array of nested properties or `true` to extract the entire object.
 * @param {Object} [defaults={}] - An object containing default values for properties that do not exist in the source object.
 * @param {any} [defaultValue] - A universal default value for properties that do not exist in the source object or the defaults object.
 * @param {string} [parentKey=''] - The parent key for nested properties (used internally).
 * @param {string} [sep='.'] - The separator for nested properties.
 * @returns {Object} An object containing the extracted properties.
 *
 * @example
 * const source = { a: 1, b: 2, c: 3 };
 * const props = { a: true, c: true, d: true };
 * const defaults = { d: 4 };
 *
 * const result = extractProps(source, props, defaults, 'default');
 * console.log(result); // { a: 1, c: 3, d: 4 }
 *
 * const data = {
 *   "base_case": {
 *     "elec_carbon": 1.129,
 *     "gas_carbon": 2.932,
 *     "elec_gj": 26.328,
 *     "gas_gj": 123
 *   },
 *   "package_retrofit": {
 *     "annual_results": {
 *       "elec_gj": 26.328,
 *       "gas_gj": 123,
 *       "elec_carbon": 1.129,
 *       "gas_carbon": 2.932,
 *     },
 *     "carbon": {
 *       "elec_carbon": 1.302,
 *       "gas_carbon": 0
 *     }
 *   },
 *   "one": "this is one value"
 * };
 *
 * const keys_to_extract = {
 *   "base_case": ['elec_carbon', 'gas_carbon'],
 *   "package_retrofit": ['annual_results.elec_gj', 'annual_results.gas_gj'],
 *   "one": true
 * };
 *
 * const result = extractProps(data, keys_to_extract);
 * console.log(result);
 * // {
 * //   "base_case": {
 * //     "elec_carbon": 1.129,
 * //     "gas_carbon": 2.932
 * //   },
 * //   "package_retrofit": {
 * //     "annual_results": {
 * //       "elec_gj": 26.328,
 * //       "gas_gj": 123
 * //     }
 * //   },
 * //   "one": "this is one value"
 * // }
 */
function extractProps(
  data,
  keysToExtract,
  defaults = {},
  defaultValue = null,
  parentKey = '',
  sep = '.',
) {
  function _extract(data, keys) {
    if (typeof data !== 'object' || data === null) {
      return {} // Return an empty object if data is not an object
    }

    if (keys === true) {
      return data
    }
    let result = {}
    for (let key of keys) {
      if (typeof key === 'string' && key.includes(sep)) {
        let nestedKeys = key.split(sep)
        let value = getNestedAttr(data, nestedKeys)
        if (value === undefined) {
          value = getNestedAttr(defaults, nestedKeys)
        }
        if (value === undefined) {
          value = defaultValue
        }
        if (value !== undefined) {
          _setNestedAttr(result, nestedKeys, value)
        }
      } else {
        let value = data[key]
        if (value === undefined) {
          value = defaults[key]
        }
        if (value === undefined) {
          value = defaultValue
        }
        if (value !== undefined) {
          result[key] = value
        }
      }
    }
    return result
  }

  function _setNestedAttr(data, keys, value) {
    for (let i = 0; i < keys.length - 1; i++) {
      let key = keys[i]
      if (!(key in data)) {
        data[key] = {}
      }
      data = data[key]
    }
    data[keys[keys.length - 1]] = value
  }

  let extracted = {}
  for (let key in keysToExtract) {
    if (data && key in data) {
      extracted[key] = _extract(data[key], keysToExtract[key])
    } else if (key in defaults) {
      extracted[key] = defaults[key]
    } else if (defaultValue !== undefined) {
      extracted[key] = defaultValue
    }
  }
  return extracted
}

function getNestedAttr(data, keys) {
  return keys.reduce(
    (obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined),
    data,
  )
}

export default extractProps
