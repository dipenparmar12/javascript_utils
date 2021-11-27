const capitalize = (str) =>
  str && str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)

const format_str = (str) =>
  str && str.constructor.name === 'String'
    ? capitalize(str.toString().replace(/_/g, ' ').trim())
    : str

export { capitalize, format_str }

export default capitalize
