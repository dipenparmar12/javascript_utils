/**
 * Returns an array of percentages that correspond to each value in the input data array.
 * @param {number[]} dataSet - The input data array to calculate percentages for.
 * @param {number} [decimals=0] - The number of decimal places to round the percentages to.
 * @param {Boolean} [precise=true] - A boolean value indicating whether the function should ensure that the sum of the calculated percentages is exactly 100% of the total, rather than allowing it to exceed 100% when the decimal values are rounded
 * @returns {number[]} An array of percentages with one element for each value in the input data array.
 * @example
 * const data = {
 *   data: [100, 200, 300, 500],
 *   percentages: [],
 * };
 * data.percentages = getPercentages(data.data, 2); // [9.09, 18.18, 27.27, 45.45]
 */
function getPercentages(dataSet, decimals = 1, precise = true) {
  const sum = dataSet.reduce((acc, curr) => acc + curr, 0)
  let percentages = dataSet.map((value) =>
    Number(((value / sum) * 100).toFixed(decimals)),
  )

  if (precise) {
    const roundedSum = percentages.reduce((acc, curr) => acc + curr, 0)
    if (roundedSum > 100) {
      const diff = 100 - roundedSum
      const largestValue = Math.max(...percentages)
      return percentages.reduce((acc, currItem, idx) => {
        acc[idx] = currItem
        if (currItem === largestValue) {
          acc[idx] += diff
        }
        return acc
      }, [])
    }
    // if (roundedSum < 0) {
    //   // TODO::if required
    // }
  }

  return percentages
}

export default getPercentages

/*
const data = {
  data: [100, 200, 300, 500],
  percentages: [],
};
data.percentages = getPercentages(data.data, 2); // [9.09, 18.18, 27.27, 45.45]
*/
