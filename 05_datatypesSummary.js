//***** Primitive *****//

// 7 categories: String, Number, Boolean, nulll, undefined,Symbol
// call by value, reference isnt provided copy is provided and all the changes are made in the copy
// BigInt

const score = 100; 
const scorevalue = 100.3;

const isLoggdIn= false;
const outsideTemp = null;
let useEmail; // undefined 


const id = Symbol('123')
const anotherId = Symbol('123') // different types

//console.log(id === anotherId) // false 

const bigNumber = 234577675757545n // bigint

// ***** Reference( Non primitive ) *****//

// arrays,objects,functions

const heros = ["batman","superwoman","spiderman","beastboy"]

let myObj = {
    name : "aleesha",
    age : 20

}

const myFunction = function() {
    console.log("hello world");
}

// console.log(typeof bigNumber) // bigint
// console.log(typeof myFunction) // function
// console.log(typeof heros) //object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)


let myName = "aleesha"

let anotherName = myName

// console.log(anotherName) // aleesha

let user = {
    email : "aleesha@gmail.com"
}

let user2 = user
user2.email = "aleeshab@google.com"

// console.log(user.email) // aleeshab@google.com
// console.log(user2.email) // aleeshab@google.com

