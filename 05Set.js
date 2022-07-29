let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
let arr2 = [3, 4, 5, 4, 5]

//求并集
/*let arrResult = new Set([...arr, ...arr2])
console.log(arrResult)*/

//求交集
let arrResult2 = [... new Set(arr)].filter(item => new Set(arr2).has(item))
console.log(arrResult2)

//求差集
let arrResult3 = [... new Set(arr)].filter(item => !new Set(arr2).has(item))
console.log(arrResult3)