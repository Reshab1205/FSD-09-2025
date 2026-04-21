// console.log('Hii')
// setTimeout(() => {
//     console.log('Ist')
// }, 1000)
// setTimeout(() => {
//     console.log('2nd')
// })
// Promise.resolve('Promise').then((data) => console.log(data))
// console.log('Bye')
// console.log('Bye')
// console.log('Bye')
// console.log('Bye')
// console.log('Bye')
// console.log('Bye')
// console.log('Bye')
// console.log('Bye')
// console.log('Bye')

// Promise.resolve('Hello').then((data) => console.log(data))
// Promise.reject('Error').catch((err) => console.log(err))

// new Promise((resolve,reject) => {
//     let success = false
//     if(success) {
//         resolve('Payment successfull')
//     } else {
//         reject('Payment Failed')
//     }
// })
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// new FormData()

// const url = 'https://jsonplaceholder.typicode.com/posts'
// fetch(url)
// .then((data) => data.json())
// .then((result) => console.log(result[0]))
// .catch((err) => console.log(err))

// const data = 'Reshab'
// const data1 = "Kumar"
// const fulname = `${data}, ${data1}`
// console.log(fulname)

// let lat = 23.76
// let lng = 76.57
// let apiKey = '23a13401e6964d149835d8022a7fa787'

// const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;

// fetch(url)
// .then((data) => data.json())
// .then((result) => console.log(result.results[0].formatted))
// .catch((err) => console.log(err))

//async / await
//try/catch

//  async function getLocation() {
//     try {
//         const data = await fetch(url)
//         const result = await data.json()
//         console.log(result.results[0].formatted)
//     } catch(err) {
//         console.log(err)
//     }
// }

// getLocation()

const arr = [1, 2, 3, 4, 5];
const arr1 = [6, 7, 8, 9, 10];
const arr2 = [11, 12, 13, 14, 15];

for (let i in arr) {
  console.log(i);
  console.log(arr[i]);
}
for (let i in arr1) {
  console.log(i);
  console.log(arr1[i]);
}
for (let i in arr2) {
  console.log(i);
  console.log(arr2[i]);
}
