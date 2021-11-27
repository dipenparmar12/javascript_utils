export const random = {
  bool: () => Math.random() >= 0.5,

  int: (min = 0, max) => Math.floor(Math.random() * (max - min + 1)) + min,

  str: (int) =>
    Array(int)
      .fill('')
      .map((v) => Math.random().toString(36).charAt(2))
      .join(''),

  item: (arr) => arr[(Math.random() * arr.length) | 0],

  strFromChars: (length, chars) =>
    Array(length)
      .fill('')
      .map((v) => chars[Math.floor(Math.random() * chars.length)])
      .join(''),

  arrInRange: (min, max, n) =>
    Array.from(
      { length: n },
      () => Math.floor(Math.random() * (max - min + 1)) + min,
    ),

  itemsFromArr: (arr, count) =>
    arr
      .concat()
      .reduce(
        (p, _, __, arr) =>
          p[0] < count
            ? [
                p[0] + 1,
                p[1].concat(arr.splice((Math.random() * arr.length) | 0, 1)),
              ]
            : p,
        [0, []],
      )[1],

  // uuid: (a) =>
  //   a
  //     ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  //     : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a),

  date: (start, end) => {
    const diff = end.getTime() - start.getTime()
    const newDiff = diff * Math.random()
    const date = new Date(start.getTime() + newDiff)
    return date
  },
}
