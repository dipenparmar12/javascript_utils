/**
 * Generate sequence of numbers
 * @param {Number} start
 * @param {Number} end=0
 * @param {Number} step
 * @returns {Array}
 * @see https://www.joshwcomeau.com/snippets/javascript/range/
 * @example
 * range(5); // [0, 1, 2, 3, 4]
 * range(5, 10); // [5, 6, 7, 8, 9]
 * range(10, 12, 0.5); // [10, 10.5, 11, 11.5]
 *
 */
function range(start, end, step = 1) {
  let output = []
  if (typeof end === 'undefined') {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}

export default range

/* 
========================================================
  example
======================================================== 
const PaginationWidget = () => {
  return (
    <div>
      {range(1, 11).map((num) => (
        <PageNum key={num}>{num}</PageNum>
      ))}
    </div>
  );
};
*/
