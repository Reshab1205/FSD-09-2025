const arr = [1,2,3,4,5]


// console.log(arr.at(2))
// console.log(arr.concat(arr))


const data = arr.map((item) => {return item * 2})
const fil = arr.filter((item) => {return item < 2})
const red = arr.reduce(add)
console.log(red)

function add(total, item) {
    return total + item
}


console.log(data)
console.log(fil)


// for(i=0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for(i in arr) {
//     console.log(i)
// }

// for(i of arr) {
//     console.log(i)
// }

// arr.forEach((num) => {
//     console.log(num)
// })



// const a = 25
// const b = 0
// const c = a / b
// console.log(c)





