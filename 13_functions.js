//now writing these using functions 

function myName()
{
console.log("A")
console.log("L")
console.log("E")
console.log("E")
console.log("S")
console.log("H")
console.log("A")
}

// myName() // adding brackets is imp

function addNumbers(num1, num2,num3) // parameters 
{
    console.log(num1 + num2 + num3)
}

//addNumbers(1,2,3) // arguments // 6
//addNumbers(3,"4") // 34undefined

//const result = addNumbers(3,4,3) // 10
//console.log("result: ", result); // undefined // bec function isnt returning the value yet 

function addTwoNumbers(num1, num2)  
{
    
let result = num1 + num2
return result ; // returning result
// or
// return num1 + num2 


}


result = addTwoNumbers(3,4) 
//console.log("result: ", result); //result : 7


//function loginUserMessage(username){
   // return `${username} just logged in`

//}

//console.log(loginUserMessage("aleesha"))


// now using if else 
function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return

    }
    return `${username} just logged in`

}

         
//console.log(loginUserMessage())

// ++++++++++ functions with objects and arrays

function calculatePrice(...num1){ //... rest operator 
    return num1 
}
// console.log(calculatePrice(2,3,4)) //    returns an array

const user = {
    username : "aleesha",
    age:20
}

function handleObject(anyObject){
    console.log(`user is ${anyObject.username} and the age is ${anyObject.age}`)
}

//handleObject(user) // user is aleesha and the age is 20

// we can also pass the object directly 

handleObject({
    username : "aleesha",
    age: 20
}) //user is aleesha and the age is 20


// Now for arrays 

const myArray = [1,2,3,4,5]

function returnSecValue(getArray){
    return getArray[1]
}

console.log(returnSecValue(myArray)) // 2
// we can also pass the array instead of passing myArray


