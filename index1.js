// var a = 10;
// var a = 18;
// console.log(a)


// let b = 10;
//  b = 19;

// // const c = 5;
// // // c = 10;
// // console.log(c)



// // console.log(a)
// // var a = 10;

// // function something() {
// //     console.log('Hello')
// // }

// something()

// // function something() {
// //     console.log('BYe')
// // }


// var something = () => {
//     console.log('Hello')

// }

// var something = () => {
//     console.log('Hello')

// }

// console.log(d)



// console.log(Math.floor(100000 + Math.random() * 900000) )

// console.log(parseInt(Math.random() * 900000))


function randomString() {
     alp = 'QWERTYUIOPLKJHGFDSAZXCVBNM'
    alphabet = alp.charAt(Math.floor(Math.random() * alp.length))
    alphabet1 = alp.charAt(Math.floor(Math.random() * alp.length))

    return alphabet + alphabet1
    
}


const num = parseInt(Math.random() * 9000)
const data = randomString() + num

console.log(data)