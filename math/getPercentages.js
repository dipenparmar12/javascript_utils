/**
 * Returns an array of percentages that correspond to each value in the input data array.
 * @param {number[]} dataSet - The input data array to calculate percentages for.
 * @param {number} [decimals=0] - The number of decimal places to round the percentages to.
 * @returns {number[]} An array of percentages with one element for each value in the input data array.
 * @example
 * const data = {
 *   data: [100, 200, 300, 500],
 *   percentages: [],
 * };
 * data.percentages = getPercentages(data.data, 2); // [9.09, 18.18, 27.27, 45.45]
 */
function getPercentages(dataSet, decimals = 1) {
  const sum = dataSet.reduce((acc, curr) => acc + curr, 0);
  return dataSet.map((value) => Number(((value / sum) * 100).toFixed(decimals)));
}

export default getPercentages

/*
const data = {
  data: [100, 200, 300, 500],
  percentages: [],
};
data.percentages = getPercentages(data.data, 2); // [9.09, 18.18, 27.27, 45.45]
*/
