function capitalize(str, regex = /[_-]/g, replacer = ' ') {
  const sanitized = str.replace(regex, replacer)
  return sanitized.charAt(0).toUpperCase() + sanitized.slice(1)
}

function formatStr(str) {
  return str && str.constructor.name === 'String'
    ? capitalize(str.toString().replace(/_/g, ' ').trim())
    : str
}

export default formatStr
