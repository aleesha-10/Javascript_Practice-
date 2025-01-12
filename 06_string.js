const name = "aleesha"
//console.log(name + " is my name") // avoid writing it like this

console.log(`Hello my name is ${name}`); // this is preferred

// another way to declare a string 
const gameName = new String("Aleesha")

// To access an index 
console.log(gameName[0]) // 0

//console.log(gameName.__proto__.)

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)) // e
// console.log(gameName.indexOf("a")) // 6

let nameGame = "Aleesha-B"

// slicing
const newString = nameGame.substring(0,7)
console.log(newString) // aleesha

const anotherString = nameGame.slice(-6,4) // can include negative values to reverse
console.log(anotherString) // e

let newName = "      aleesha    "
console.log(newName.trim()) // removes the end spaces 

const url = "https://aleesha.com/aleesha%20b"

console.log(url.replace('%20','-')) //  simply replaces %20 with -

// ***  you can also check if it includes something using .includes
console.log(url.includes('b')) // returns true

//** to convert string to an array 
let myName = "Aleesha-B"

// lets seperate it based on -, it could be anything e.g spaces

console.log(myName.split('-')) // will result in an array 




