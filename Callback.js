// setTimeout(() => {
//     console.log('Hello First')
// }, 1000)


// setTimeout(() => {
//     console.log('Hello 2nd')
// }, 2000)


// setTimeout(() => {
//     console.log('Hello 3rd')
// }, 3000)



// setTimeout(() => {
//     console.log('Hello 4th')
// }, 1000)



// setTimeout(() => {
//     console.log('Hello 5th')
// })

// function hello() {
//     console.log('Hello Reshab')
//     greetings()
// }

// function greetings() {
//     console.log('How are you')
// }

// setTimeout(() => {
//     console.log('Hey!!!')
// })

// setTimeout(() => {
//     hello()
// }, 2000);



setTimeout(() => {
    console.log('First')
    setTimeout(() => {
        console.log('2nd')
        setTimeout(() => {
            console.log('3rd')
        },2000)
    },1000)
}, 3000)


