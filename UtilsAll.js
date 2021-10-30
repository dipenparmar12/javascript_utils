console.clear()

function test(n, arr) {
  
  console.log(n,arr) 
}

test()

/*    

*/

// str="abd abe ababca aec abc cba"
// find='abc'
// return str.split(find).length - 1



/// Gen Arrays
function getArr(min){
  return (new Array(min)).fill(0).map((_,i)=>i)
}

/// Gen random
function getRandomArr(min, maxVal=10){
  return (new Array(min)).fill(0).map((_,i)=> Math.floor(Math.random() * maxVal+1) )
}


function shuffle(arr) {
  let last = arr.length
  let random

  let rand = (n) => Math.floor(Math.random() * n)

  let swap = function (arr, a, b) {
    ;[arr[a], arr[b]] = [arr[b], arr[a]]
  }

  while (last > 0) {
    random = rand(last)
    swap(arr, --last, random)
  }

  return arr
}



// shuffle([10, 15, 8, 6, 2, 4, 17, 20, 13])
getArr(8) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
getRandomArr(8, 10)


function getRnd(a, n){
  return new Array(n).fill(null).map(() => a[Math.floor(Math.random() * a.length)])
};
//  const arr = myArray
//       .map((a) => ({sort: Math.random(), value: a}))
//       .sort((a, b) => a.sort - b.sort)
//       .map((a) => a.value)

getRnd([1,2,3,4],1)


// let per = {
//     e: [1,2],
//     d: [12,3,4],
//     c: [1],
//     b: [1,2,3,4,5],
//     a: [],
// }

// function sortProperties(obj, asc=true)
// {
//   // convert object into array
// 	var sortable=[];
// 	for(var key in obj)
// 		if(obj.hasOwnProperty(key))
// 			sortable.push([key, obj[key]]); // each item is an array in format [key, value]
	
// 	// sort items by value
// 	sortable.sort(function(a, b)
// 	{
// 		return asc ? a[1].length - b[1].length : b[1].length - a[1].length; 
// 	});

// 	return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
// }

// sortProperties(per)

// let search = [
// { name:'a' },
// { name:'b' },
// { name:'c' },
// ]

//  findValue = (arrObj, val,key='name') =>(arrObj.find((el) => {
//     return el[key] === val
//   }))

// findValue(search,'a')