// console.log('Hello')
// setTimeout(() => {
//     console.log('2nd')
// },3000)
// setTimeout(() => {
//     console.log('Ist')
// })

// Promise.resolve().then(() => console.log('Promise'))
// console.log('Bye')


// const data = Promise.reject('Hello')
// data.then((x) => console.log(x)).catch((err) => console.log('err',err))


// const obj = {
//     fname: 'Reshab',
//     greet: function () {
//         console.log('Hello ' + this.fname)
//     }
// }

// obj.greet()

// const result = new Promise((resolve, reject)=> {
//     let success = true;
//     if(success) {
//         resolve("Payment successfull")
//     } else {
//         reject("Payment Failed")
//     }
// });
// result
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
// .finally(() => console.log('Mai Hamesa Chalunga'))

fetch('https://jsonplaceholder.typicode.com/posts/2')
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))
