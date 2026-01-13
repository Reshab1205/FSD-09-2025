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

const obj = {
  fname: "Reshab",
  lname: "Kumar",
  age: 27,
  abc: {
    city: "Vaishali",
    state: "Bihar",
    def: {
      nation: "India"
    }
  },
};
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

const arr = ["A", "B", "C", "D"]

// for(let x in obj) {
//   console.log(x)
// }
// for(let y in arr) {
//   console.log(y)
// }

let a;
const obj1 = {
  fname: "Reshab",
  lname: "Kumar",
  fullName: function xyz() {
   return a = this.fname + " " + this.lname
  }
}
console.log(obj1.fullName())


function myData(fname, lname) {
  this.first_name = fname
  this.last_name = lname
}

const d = new myData("Reshab", "Kumar")
const e = new myData("Baibhav", "Kumar")
console.log(d)
console.log(e)
