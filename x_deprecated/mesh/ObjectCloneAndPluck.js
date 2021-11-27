const cloneAndPluck = function (sourceObj, keys) {
  return Object.values(keys).reduce(
    (acc, key) => (sourceObj[key] && (acc[key] = sourceObj[key]), acc),
    {},
  )
}

export default cloneAndPluck

