// something()

// var a = 10;
// // console.log('Hii',a)
// // var a = 12;
// // a = 14;

// // console.log(a)
// // // var a;

// // let b = 10;
// // //  let b = 12;
// //  b = 16;

// const c = 12;
// c = 15;
// console.log(c)
// const c = 13;

// ECMAScript

// const x = 12;
// const y = 13;
// const z = x + y;
// console.log(z)

// const a = 19;
// const b = 19;

// const c = parseInt(prompt('Enter the time: '))

// const c = Date.now()

// if(6 <= c && c<= 12 ) {
//     console.log(`Good Morning`)
// } else if(12 <= c && c <= 16) {
//     console.log(`GD AfterNoon`)
// } else if(16 < c && c <= 20) {
//     console.log(`GD Evening`)
// } else if((20 < c && c <= 24) || (1 <= c && c <6)) {
//     console.log(`GD night`)
// } else if(c > 24) {
//     console.log(`Enter Valid Time`)
// }


// 6 < c < 12

// if(a >= b) {
//     console.log(`A is Greater`)
// } else if (b >= a) {
//     console.log(`B is Greater`)
// } else {
//     console.log(`Both are Equal`)
// }

// const fname = 'reshab'
// console.log(fname)

// console.log(fname)

// const data = ['Reshab', 'Kumar', 'Bihar']
// // console.log(typeof(data))

// const obj = {
//   fname: "Reshab",
//   lanme: "Kumar",
//   city: "Vaishali",
//   state: "Bihar",
// };

// console.log(obj.city);

// const facultyOfCodingThinker = [
//   {
//     faculty_id: 1,
//     faculty_name: "Reshab Kumar",
//     faculty_subject: "FSD",
//   },
//   {
//     faculty_id: 2,
//     faculty_name: "Ravi Kumar",
//     faculty_subject: "Java FSD",
//   },
//   {
//     faculty_id: 3,
//     faculty_name: "Baibhav Kumar",
//     faculty_subject: "HTML",
//   },
// ];

// console.log(facultyOfCodingThinker[1].faculty_subject);

// const arr = ["App", "Web", "Desktop", "IoT"]
// for(let i = 0; i <arr.length; i++) {
//   console.log(arr[i])
// }

// const data = (eligiblity > 18)

// const age = parseInt(prompt("Enter the age: "))
// if(age>18) {
//     console.log("Adult")
// } else {
//     console.log("Minor")
// }

// const check = (age >= 18) ? "Adult" : "Minor"
// console.log(check)

// let data = "Reshab";

// let check = age ?? "I don't have data, Please provide data"
// console.log(new Date().getMilliseconds())

// switch(new Date().getDay()) {
//   case 0:
//   console.log("Sunday")
//   break
//   case 4:
//   console.log("Thursday")
//   break
// }

// function something() {
//   console.log('Hello World')

// }
// let num = 2
// function something(a) {
//   const c = a + a + num
//   console.log('Hello World Part -2', c)
// }

// const something1 = () => {
//   console.log('Hello Coding Thinker')
// }
// something(5)
// something1()

// function something() {
//   const a = 5;
//   console.log('Hello World', a)
// }

// Take input Rank (number)
// create a function which checks rank < 100 returns output true else false
// Print msg based on TRue or False and only apply ternary operator

// const rank = parseInt(prompt('Enter rank: '))

// function checkRank() {
//   let check = (rank < 100) ? true : false
//   return check
// }

// const msg = checkRank() ? "Apply for Next Step" : "Better Luck Next time"
// console.log(msg)

// console.log(data)
// var data = 10;

// let rank = 89;
// var checkRank = () => {

//   let check = (rank < 100) ? true : false
//   console.log('Hii')

// }

// checkRank()
//Hoisting

// const data = ["A","B","C"]

// const arr = {
//   name: "Reshab",
//   roll_no: 123,
//   name: "Ankit",
// }
// console.log(arr)

// arr.seal

// arr[0] = "Reshab"

// console.log((arr[0]))

// [[0,1, [2,4, [5,6, "Reshab"]]],[1,2],[]]

// const data = Object.entries(arr)
// keys
//values
//entries
// console.log(data)

// for(let x in data) {
//   console.log(x)
// }
// console.log(a)
// var a = 2;

// console.log(a)
// a = 2;
// a = 4;

// let txt;
// const obj = {
//   fname: "Reshab",
//   lname: "Kumar",
//   age:27,
//   myData: function data() {
//      txt = 'Hello'
//     return txt
//   }
// }

// const obj = {
//   fname: "Reshab",
//   lname: "Kumar",
//   age: 27,
//   abc: {
//     city: "Vaishali",
//     state: "Bihar",
//     def: {
//       nation: "India"
//     }
//   },
// };
// console.log(obj.abc.def.nation)

// const b = Object.keys(obj);
// const c = Object.values(obj);
// const d = Object.entries(obj);
// console.log(b);
// console.log(c);
// console.log(d);
// obj[age] = 29

// console.log(obj[age] = 29)
// console.log(txt)

// obj.city = function
// Object.seal(obj)

// Object.freeze(obj)
// obj.age = 28

// const obj1 = new Object({
//   fname: "Reshab",
//   lname: "Kumar",
//   age:27
// })

// console.log(obj1)

// const arr = ["A", "B", "C", "D"]

// for(let x in obj) {
//   console.log(x)
// }
// for(let y in arr) {
//   console.log(y)
// }

// let a;
// const obj1 = {
//   fname: "Reshab",
//   lname: "Kumar",
//   fullName: function xyz() {
//    return a = this.fname + " " + this.lname
//   }
// }
// console.log(obj1.fullName())


// function myData(fname, lname) {
//   this.first_name = fname
//   this.last_name = lname
// }

// const d = new myData("Reshab", "Kumar")
// const e = new myData("Baibhav", "Kumar")
// console.log(d)
// console.log(e)


// const str = 'Hello'
// const data = str.split("").reverse().join("")
// console.log(data)

// const data = 'Reshab Kumar'
// const date = '15/01/2026'
// const msg = `Hello Mr. ${data}, We are pleased to welcome onboard on ${date}`
// console.log(msg)

// const h = data.toUpperCase()
// const c = data.concat(date)
// const d = data.includes('z')
// const e = data.charAt(5)
// console.log(e)


// const a = 10
// const b = '10'



// if(a = b) {
//   console.log('Equal')
// } else {
//   console.log('NE')
// }

// const arr = [1,2,3,4,5, "Reshab"]
// arr.reverse()
// console.log(arr)
// const str = 'Reshab'

// const d = str.split("")
// console.log(d)


// const obj = {a:"Reshab", b:"Kumar", c:"Bihar"}

// const data = Object.keys(obj)
// console.log(data)

// // const data = Object.keys(obj)

// for(let i= 0; i<data.length;i++) {
//   const val = data[i]
//   const a = obj[val]
//   console.log(a)
// }
//Reshab
//Kumar
//Bihar


// const data = '3.14'
// const d = 3.14
// const z = data + d
// // console.log(z)
// console.log(typeof())

// const data = Symbol('hii')
// console.log(data)




// if(data === d) {
//   console.log('Yes')
// } else {
//   console.log('HII')
// }



// const obj = {a:1, b:2}
// const obj1 = {a:1, b:2}

// const ar = [1,2,3,4,5]
// const ar1 = [1,2,3,4,5]

// const a = 10;

// if(ar == ar1) {
//     console.log('Equal')
// } else {
//     console.log('NE')
// }

const arr = [1,2,3,4,5]
const arr1 = [6,7,8,9]

function cond() {
    return arr > 2
}

const a = arr1.includes(2)
const d = arr.every(cond)
console.log(d)
// console.log(f)
// console.log(a)

const data = arr.concat(arr1)
// console.log(data)

// console.log(arr.length)

// for(i = 0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// for(i in arr) {
//     console.log(i)
// }

// const d = arr.map((data) => {
//      return data > 2
// })
// console.log(d)

// const e = arr.filter((data) => {
//     return data > 2
// })
// console.log(e)
