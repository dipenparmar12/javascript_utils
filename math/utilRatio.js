/**
 * A utility object for calculating and retrieving aspect ratios.
 * @formula
 *  w = 1280, h = 600, ratio = 2.13333
 *  1280 / 2.133 = 600 // get Height
 *  600 * 2.133 = 1280 // get Width
 * @type {{
 *    getRatio: (function(Number, Number): Number),
 *    calcRatio: (function(Number,Number): {width: Number, height: number, ratio: string})
 * }}
 */
const utilRatio = {
  /**
   * Calculates the aspect ratio of an image or container, given its width and height.
   *
   * @param {Number} width - The width of the image or container.
   * @param {Number} height - The height of the image or container.
   * @returns {Number} The aspect ratio, which is the width divided by the height.
   */
  getRatio: function (width, height) {
    return width / height;
  },

  /**
   * Calculates the height and aspect ratio of an image or container, given its width and a reference ratio.
   *
   * @param {Number} width - The width of the image or container.
   * @param {Number} referenceRatio - The reference aspect ratio, which is the width divided by the height.
   * @returns {{width: Number, height: Number, ratio: string}} An object containing the width, height, and aspect ratio.
   */
  calcRatio: function (width, referenceRatio) {
    const height = width / referenceRatio;
    const ratio = `${width}:${height}`;
    return {width, height, ratio};
  }
};


export default utilRatio

/*
* Example
*
  const ratio = utilRatio.getRatio(960, 450) // 2.13333333
  const ratioReversed = utilRatio.calcRatio(960, ratio) // width: 960, height: 450
*/

/*
function calculateRatios(width, height) {
  const ratio = width / height;
  const reverseRatio = height / width;
  return {ratio, reverseRatio};
}

const {ratio, reverseRatio} = calculateRatios(960, 450);
console.log(ratio); // 2.133333
console.log(reverseRatio); // 0.46875

function calculateRatio(width, referenceRatio) {
  const height = width / referenceRatio;
  const ratio = `${width}:${height}`;
  return [ratio, width, height];
}

const referenceRatio = 16 / 9; // 16:9
const width = 960;
const [_ratio, _width, _height] = calculateRatio(width, referenceRatio);
console.log(`Width: ${width}, Height: ${height}, Ratio: ${ratio}`);
// Output: Width: 960, Height: 540, Ratio: 960:540

* */
