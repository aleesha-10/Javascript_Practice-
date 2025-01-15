const user = {
    username : "aleesha",
    age: 20,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to the website`)
        //console.log(this)
    } ,
   // we are using this to access the current content bec we have to go oout of the scope of the function
}

user.welcomeMessage()   // aleesha,welcome to the website

// printing this will print the context of the declared object
//console.log(this)

// browser's global object is window object and here it is an empty object


// +++++++++++++++++++++++++++++++++++++++++++++++++

function hello(){
    //let hi= "hello"
    // console.log(this.username) // wont work bec this is a function not an object
    console.log(this) // gives a lot of values if you print this alone
}

//hello()

//const myFunc = function(){
    //let hi= "hello"
    // console.log(this.username) // wont work bec this is a function not an object
    console.log(this) // gives a lot of values if you print this alone
//} // undefined still wont work


// arrow function :

const myFunc = () => {
    let name = "a"
    console.log(this)

}


//myFunc(this) // undefined

const addTwo = (n1, n2) => {
   return n1 + n2
}

// console.log(addTwo(2,2)) // 4

// const addTwo = (n1, n2) =>  n1 + n2 // implicit retutn
 
 
 console.log(addTwo(2,2)) // 4


// basically we use return keyword when we're using the curly {} brackets only

// to return an object you have to use parenthesis

// const addTwo = (n1, n2) =>  ({username: "a"}) // implicit retutn
 
const myArray = [1,2,3,4]

//myArray.forEach(() => {})