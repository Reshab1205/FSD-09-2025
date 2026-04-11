// console.log("Hello");

// setTimeout(() => {
//   console.log("Ist");
//   setTimeout(() => {
//     console.log("2nd");
//     setTimeout(() => {
//       console.log("3rd");
//     }, 1000);
//   }, 1000);
// }, 1000);

// setTimeout(() => {
//   console.log("4th");
// });

// Promise.resolve().then(() => console.log("Promise"));
// console.log("Bye");



// function hello(callback) {
//   console.log('Hello')
//   callback()
//   // hii()
// }

// function hii() {
//   console.log('Hii')
// }

// function bye() {
//   console.log('BYe')
// }

// hello(bye)


// property 
// method

// let AtmType = ['VISA', 'MASTERCARD', 'RUPAY']

// function fetchAtmType(callback, callback2) {
//   let type = '';
//   if(!AtmType.includes(type)) {
//     return 'Card not supported'
//   }
//   callback(callback2)
// }

// function checkBalance(callback2) {
// callback2()
// }

// verifyAtmPin()
// function cashWithDrawl(callback2) {
// callback2()
// }

// function verifyAtmPin() {

// }
// fetchAtmType(cashWithDrawl, verifyAtmPin)


function getUser(callback) {
  setTimeout(() => {
    callback({id:1, name: "Reshab"})
  }, 1000)
}

function getOrders(user, callback) {
  setTimeout(() => {
    callback(["Order1", "Order2", "Order3"])
  }, 1000)
}

function getOrderDetails(callback) {
  setTimeout(() => {

  }, 1000)
}

getUser( function ({id: user}) {
  getOrders()
})