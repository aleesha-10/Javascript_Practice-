let age = 33
console.log(typeof age);
let age1="333abc" // string  

// When you know you're going to be working with numbers

let valueInNumber = Number(age)
console.log(typeof age);

// converting 
let valueInNumber1 = Number(age1)

console.log(typeof valueInNumber1) // number

console.log(valueInNumber1) // NaN ( if we have a number in the string it will print the number)

// "33" => 33
// "33abc" => NaN
//true => 1 ; false => 0

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn); // true 
// in case of empty string the output is "false"


 let someNumber = 33

 let stringNumber = String(someNumber)
 console.log(stringNumber)
 console.log(typeof stringNumber)