const mustInteger = (input, boolReturn = false) => {
  const castInt = parseInt(input)
  const isNumber = !Number.isNaN(castInt)
  if (boolReturn && isNumber) return isNumber
  return isNumber ? castInt : 0
}
export default mustInteger


export const mustIntegers = (arrInput, boolReturn = false) => {
  // if (!Array.isArray(arrInput)) return 0
  return arrInput.map(el => mustInteger(el, boolReturn))
}