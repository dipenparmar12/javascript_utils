/**
 * Merges an array of data items with an array of related items, based on a shared key.
 * @param {Array} data - The array of data items. [{id:1}, {id:2}]
 * @param {Array} relations - The array of related items. [{id:2, product:'keyboard'}, {id:3, product:'laptop'}]
 * @param {Object} options - The options object.
 * @param {string} [options.dataKey='id'] - The key to use as the shared key for the data items.
 * @param {string} [options.relationKey='id'] - The key to use as the shared key for the related items.
 * @param {string} [options.targetKey='relations'] - The key to use for the merged related items in each data item.
 * @param {boolean} [options.isOneToOne=false] - Indicates if the relation is one-to-one instead of one-to-many.
 * @param {Function} [options.callback=(item)=>item] - Callback handler for each item
 * @returns {Array} - The merged array of data items.
 */
function mapRelations(data, relations, options = {}) {
  const {
    dataKey = 'id',
    relationKey = 'id',
    targetKey = 'relations',
    isOneToOne = false,
    callback = (item) => item
  } = options;

  if (!Array.isArray(data) || !Array.isArray(relations)) {
    console.error('mapRelations[23]:', { data, relations })
    throw new Error('Both data and relations should be arrays')
  }

  if (!dataKey || !relationKey || !targetKey) {
    console.error('mapRelations[28]:', { dataKey, relationKey, targetKey })
    throw new Error('dataKey, relationKey and targetKey should be provided')
  }

  return data.map(item => {
    const matchingRelations = relations.filter(rel => rel[relationKey] === item[dataKey]);
    let _item = item
    if (matchingRelations.length) {
      const mergedItem = {...item};
      mergedItem[targetKey] = isOneToOne ? matchingRelations[0] : matchingRelations;
      _item = mergedItem;
    }
    if (callback) callback?.(_item)
    return _item;
  });
}

export default mapRelations

export default mapRelations

// const users = [
//   {
//     id:1,
//     name: 'dipen',
//     designation:'software-engineer'
//   },
//   {
//     id:3,
//     name: 'bob',
//     designation:'dev-ops'
//   },
// ];

// const profiles = [
//   {
//     designation: 'dev-ops',
//     salary: 10000,
//     grade: 'B1',
//     department: 'development-operations',
//     description: 'employ should work with internal tasks and operations',
//   },
//   {
//     designation: 'dev-ops',
//     salary: 20000,
//     grade: 'A1',
//     department: 'development-operations',
//     description: 'employ should work with internal tasks and operations',
//   },
//   {
//     designation: 'software-engineer',
//     salary: 10000,
//     department: 'software-services',
//     description: 'employ should work with direct clients',
//   }
// ];

// const usersWithProfile = mapRelations(users, profiles, 'designation', 'designations');

// console.log(usersWithProfile);
/*
[
  {
    "id": 1,
    "name": "dipen",
    "designation": "software-engineer",
    "designations": [
      {
        "designation": "software-engineer",
        "salary": 10000,
        "department": "software-services",
        "description": "employ should work with direct clients"
      }
    ]
  },
  {
    "id": 3,
    "name": "bob",
    "designation": "dev-ops",
    "designations": [
      {
        "designation": "dev-ops",
        "salary": 10000,
        "grade": "B1",
        "department": "development-operations",
        "description": "employ should work with internal tasks and operations"
      },
      {
        "designation": "dev-ops",
        "salary": 20000,
        "grade": "A1",
        "department": "development-operations",
        "description": "employ should work with internal tasks and operations"
      }
    ]
  }
]
*/
