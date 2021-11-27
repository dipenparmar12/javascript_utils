// @src: https://github.com/vercel/commerce/blob/main/lib/range-map.ts
export default function rangeMap(n: number, fn: (i: number) => any) {
  const arr = []
  while (n > arr.length) {
    arr.push(fn(arr.length))
  }
  return arr
}

/*
rangeMap(12, (i) => (
<div key={i}>
  {i}
</div>
))
*/