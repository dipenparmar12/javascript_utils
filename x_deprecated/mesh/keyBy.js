/**
 *
 * @param {*} data
 * @param {*} key
 * @returns
 * @src https://codereview.stackexchange.com/a/123735/251248
 */
function keyBy(data, key) {
  return data?.reduce((acc, obj, currentIndex) => {
    return { ...acc, [obj[key] || currentIndex]: obj }
  }, {})
}

export default keyBy
