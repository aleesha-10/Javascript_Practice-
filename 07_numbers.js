const score = 1000 // defining a number
// console.log(score) // 1000

const balance = new Number(1000); // directly defining that we need a number
// console.log(balance) // Number : 1000

// some other functions for numbers:

// toPrecision , toLocalString, toFixed, toExponential,constructor

// console.log(balance.toString()); // prints 1000 as a string
// console.log(balance.toString().length) // 4
// console.log(balance.toFixed(2)); // 1000.00

const myNumber = 23.8966

// returns a string containing a number represented either in exponential
// or fixed-point notation with a specofoed number of digits

// console.log(myNumber.toPrecision(3)) // 23.9

const myNumber2 = 123.8966
// console.log(myNumber.toPrecision(3)) // 124 

const hundreds = 100000;

// console.log(hundreds.toLocaleString()) // 100,000 // according to american number system ( you can do it for other systems too)


// ********* others : 

// .isNaN, MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER,isSafeInteger ...... 

// ++++++++++++++++++++++++++++ MATHS 

// console.log(Math) // object 

// console.log(Math.abs(-4)) // 4
// console.log(Math.round(4.3)) // 4 
console.log(Math.ceil(4.2)) // 5 //  chooses the top value 
console.log(Math.floor(4.9)) // 4 // chooses the lower value  

// ********* other functions:

// Pow,random,sign,sin,sinh, min( lowest value in an array), sqrt.....

console.log(Math.random()) // always between 0 and 1 
// however you can customize it e.g
// we can also use it with floor Math.floor(MAth.random())

console.log(Math.random()*10) // 1-10 // 0 will be included, *10+1 now 0 wont be included

const min = 10
const max = 20

// Formula !! NUmbers will be beween 10 and 20 

console.log(Math.floor(Math.random() * (max - min + 1))+ min )


 
 