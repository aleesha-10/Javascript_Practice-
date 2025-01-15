// singleton 

// object literals 

// Object.create // => constructor method  

// Symbol 

// You need to declare it before adding it to the keys
const mysym = Symbol ("Key1")

const JsUser = {
    name : "aleesha",
    "full name" : "aleesha b", 
    age: 20,
    location: "Earth",
    email:"aleesha@google.com", // inshallah 
    isLoggedIn: false,
    DaysLoggedIn: ["Monday","Tuesday","Wednesday"],
    [mysym] : "myekey1"
    
}

 // console.log(JsUser.email)
 console.log(JsUser["email"]) // needs to be accessed as a string 
 // console.log(JsUser["full name"]) // Proper way to access the full name key

 // console.log(JsUser.mysym) // prints but isnt working like a symbol 

 // console.log(typeof JsUser.mysym) // string and we need to use it as a symbol

// now we wll add square brackets [] in the object

// accessing : 
console.log(JsUser[mysym])

// JsUser.email = "aleeshab@google.com" // changing value 

// Object.freeze(JsUser) // now no changes can be made, you wont get an error but it wont change anything 

// JsUser.email = "aleeshab@google.com"  // wont work now


// console.log(JsUser) // now we know its a symbol 
JsUser.greeting = function(){
    console.log("hello");
}

//console.log(JsUser.greeting) // anonymous 

console.log(JsUser.greeting()) // hello 

JsUser.greeting2 = function(){
    console.log(`hello, ${this.email}`);
}

console.log(JsUser.greeting2()) // hello, aleesha@google.com

