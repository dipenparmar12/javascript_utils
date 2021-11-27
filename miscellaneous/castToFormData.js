/**
 *
 * @param {*} formData
 * @param {*} data
 * @param {*} parentKey
 * @src https://stackoverflow.com/a/42483509/8592918
 */
function castToFormData(formData, data, parentKey) {
  if (
    data &&
    typeof data === 'object' &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      castToFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key,
      )
    })
  } else {
    const value = data == null ? '' : data

    formData.append(parentKey, value)
  }
}

function jsonToFormData(data) {
  const formData = new FormData()
  castToFormData(formData, data)
  return formData
}

export default jsonToFormData

// const my_data = {
//   num: 1,
//   falseBool: false,
//   trueBool: true,
//   empty: '',
//   und: undefined,
//   nullable: null,
//   date: new Date(),
//   name: 'str',
//   another_object: {
//     name: 'my_name',
//     value: 'whatever',
//   },
//   array: [
//     {
//       key1: {
//         name: 'key1',
//       },
//     },
//   ],
// }
// const res = [...jsonToFormData(my_data).entries()] // [ ['num', '1'], ...]
