/**
 * @param {number | bigint | string} num
 * @param options
 * @param locales
 * @src https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
function numberFormat(num, options, locales) {
  return new Intl.NumberFormat(locales, options).format(num)
}

export default numberFormat

/*
*
numberFormat(number || 0, {
  minimumSignificantDigits: 4,
})
*
*
 options = {
     localeMatcher?: string;
      style?: string;
      currency?: string;
      currencyDisplay?: string;
      currencySign?: string;
      useGrouping?: boolean;
      minimumIntegerDigits?: number;
      minimumFractionDigits?: number;
      maximumFractionDigits?: number;
      minimumSignificantDigits?: number;
      maximumSignificantDigits?: number;
        }
* */
