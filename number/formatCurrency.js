/**
 * @param {number | bigint} num
 * @param {string} currency
 * @param options
 * @src https://stackoverflow.com/a/68536579/8592918,
 *      https://flaviocopes.com/how-to-format-number-as-currency-javascript/
 */
function formatCurrency(num, options = {}, currency = 'USD') {
  // Check if num is a valid number
  if (isNaN(num)) {
    return num
  }

  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      ...options,
    }).format(num)
  } catch (error) {
    console.error('formatCurrency.js::[18] error', error, { options, num })
    return num
  }
}

export default formatCurrency

// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2,
// })
//
// export default formatter
// formatter.format(1000) // "$1,000.00"
// formatter.format(10) // "$10.00"
// formatter.format(123233000) // "$123,233,000.00"
