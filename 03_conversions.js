let age = 33;

console.log(typeof age); // number

let age1 = "333abc"; // string

// When you know you're going to be working with numbers

let valueInNumber = Number(age);

// console.log(typeof age); // number

// converting
let valueInNumber1 = Number(age1);

console.log(typeof valueInNumber1); // number

// console.log(valueInNumber1); // NaN ( if we have a number in the string it will print the number)

// "33" => 33
// "33abc" => NaN
//true => 1 ; false => 0

let isLoggedIn = 1;

let booleanisLoggedIn = Boolean(isLoggedIn);
// console.log(booleanisLoggedIn); // true
// in case of empty string the output is "false"

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber); //33 
// console.log(typeof stringNumber); // string

//*****operations*****//


let value = 3
let negValue = -value
console.log(negValue); // -3

//console.log(2+3) 
//console.log(2/3)
//console.log(2*3)
//console.log(2**3) // 8
//console.log(2%3)


let str1="hello"
let str2=" world"

// console.log(str1+str2) wont work
 
let str3= str1+str2
 console.log(str3) // hello world

// console.log("1" + 2); //12
// console.log(1+"2"); // 12
// console.log("1"+2+2) //122
// console.log(1+2+"2") //32

console.log(3+4*5%3) // 5// avoid writing expressions like this use brackets

console.log(+true) // 1 
// console.log(true+); //error
// console.log(+""); // 0

let num1,num2,num3;

// num1 = num2 = num3 = 2 + 2 - avoid writing like this

let gameCounter = 100
gameCounter++; // or ++gameCounter
console.log(gameCounter) // incremented

let x = 3;
const y = x++; // post fix

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
// value of y will be incremented afterwards

let a = 3;
const b = ++a; // pre fix

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
// value of y will be incremented before 
