/**
 * Filters the given data based on the filters provided.
 * @param {Array} data - The data to be filtered.
 * @param {Object} filters - An object containing the filters to be applied.
 * @param {Array|String} [filters.prop] - The filter value(s) for the property `prop`.
 *                                        If an array, the item is included in the filtered
 *                                        result if all elements of the filter value are
 *                                        included in the corresponding property of the item.
 *                                        If a string, it should follow the format
 *                                        `[comparison operator][value]` where comparison
 *                                        operator can be one of `<`, `>`, `<=`, or `>=`,
 *                                        and value is a number.
 * @returns {Array} The filtered data.
 *
 * @example
 * const data = [
 *   {id: 1, name: 'eva', gender: 'female', hobbies: ['cricket', 'football']},
 *   {id: 2, name: 'john', gender: 'male', hobbies: ['cricket', 'football']},
 *   {id: 3, name: 'bob', gender: 'male', hobbies: ['cricket', 'football']},
 *   {id: 4, name: 'alice', gender: 'female', hobbies: ['cricket', 'football']},
 * ];
 * const filters = {
 *   gender: ['male'],
 *   hobbies: ['cricket'],
 *   id: '>2'
 * };
 * const filteredData = filterData(data, filters);
 *
 * console.log(filteredData);
 * // Output: [{id: 3, name: 'bob', gender: 'male', hobbies: ['cricket', 'football']}]
 */
function filterData(data, filters) {
  return data.filter(item => {
    return Object.entries(filters).every(([prop, filterVal]) => {
      if (!item.hasOwnProperty(prop)) {
        console.error(`Item is missing the property: "${prop}"`);
        return false;
      }

      if (Array.isArray(filterVal)) {
        if (Array.isArray(item[prop])) {
          return filterVal.every(el => item[prop].includes(el));
        }
        return filterVal.includes(item[prop]);
      } else if (typeof filterVal === 'string') {

        if (Array.isArray(item[prop])) {
          return item[prop].includes(filterVal)
        }

        const [comparison, value] = filterVal.split(/([><=]+)/);
        if (!['>', '<', '>=', '<=', '=='].includes(comparison)) {
          console.error(`Unsupported comparison operator: "${comparison}"`);
          return false;
        }

        if (isNaN(value)) {
          console.error(`Invalid value for comparison: "${value}"`);
          return false;
        }

        switch (comparison) {
          case '>':
            return item[prop] > Number(value);
          case '<':
            return item[prop] < Number(value);
          case '>=':
            return item[prop] >= Number(value);
          case '<=':
            return item[prop] <= Number(value);
          case '==':
            return item[prop] === value;
          default:
            return false;
        }
      }
    });
  });
}

export default filterData


/*

const data = [
  {id: 1, name: 'eva', gender: 'female', hobbies: ['cricket', 'football']},
  {id: 2, name: 'john', gender: 'male', hobbies: ['football']},
  {id: 3, name: 'bob', gender: 'male', hobbies: ['cricket', 'football']},
  {id: 4, name: 'alice', gender: 'female', hobbies: ['cricket', 'football']},
  {id: 5, name: 'dipen', gender: 'male', hobbies: ['cricket']},
]

const onlyMale = ['male']
const bothFemaleMale = ['male', 'female']
const hobbyCricket = ['cricket']
const hobbyFootballAndFemale = ['cricket']

// onlyMale
filterData(data, { gender: ['male'] })

// bothFemaleMale
filterData(data, { gender: ['male', 'female'] })

// hobbyFootballAndFemale
filterData(data, { gender: ['male'], hobbies:'football'})


// Male and hobby cricket and football and id >= 2
filterData(data, {
  gender: ['male'],
  bobbies: ['cricket', 'football'],
  id: '>2'
})

// // Test-cases 
describe('filterData', () => {
  const data = [
    {id: 1, name: 'eva', gender: 'female', hobbies: ['cricket', 'football']},
    {id: 2, name: 'john', gender: 'male', hobbies: ['cricket', 'football']},
    {id: 3, name: 'bob', gender: 'male', hobbies: ['cricket', 'football']},
    {id: 4, name: 'alice', gender: 'female', hobbies: ['cricket', 'football']},
  ];

  it('filters data based on the filters provided', () => {
    const filters = {
      gender: ['male'],
      hobbies: ['cricket'],
      id: '>2'
    };

    const filteredData = filterData(data, filters);

    expect(filteredData).toEqual([{id: 3, name: 'bob', gender: 'male', hobbies: ['cricket', 'football']}]);
  });

  it('returns an empty array if no data matches the filters', () => {
    const filters = {
      gender: ['male'],
      hobbies: ['tennis'],
      id: '>4'
    };

    const filteredData
  });
}); 


// Simple version cuold be 
/**
 * Filter data based on filters provided
 * @param {Array} data - The data to be filtered
 * @param {Array} filters - The filters to be applied on data
 * @param {String} filterKey - The key on which filters will be applied
 * @returns {Array} - The filtered data
* /
function filterData(data, filters = {gendor}, filterKey) {
  if (filters.length) return data
  if (!data.length) return data //  should not be empty
  if (!Array.isArray(data)) return data // should be an array

  return data.filter(item => filters.includes(item[filterKey]));
}
*/
