export default function nullableNum(originalValue) {
  // Remove commas and convert to number
  const value = Number(String(originalValue).replace(/,/g, ''))
  return isNaN(value) ? null : value
}
