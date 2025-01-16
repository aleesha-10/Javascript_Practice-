// if 

//if (condition=>true){} // executed
// if(condition=>false){} // not executed
// = - assignment , != - not equal, == - comaprison , === - checks the type as well

//if(){ // if this isnt executed

//}
//else{ // this is executed

//}

const b = 1000

//if(b>500) console.log("yes"); // add commas to add more but this isnt a good practice 

// nesting :

if (b>500){
  //console.log("greater than 500") // will be printed
} else if (balance<750){
console.log("less than 750")
} else {
    console.log("1000")
}

// ++++ Switch 

const month = 1

switch(month){
    case(1):
    //console.log("January")  
    break; // no break prints everuthing after the valid key except for default
    default:
        console.log("February") // when nothing is executed
        break;
}


// +++++++++++++ Truthy Values

 const userEmail = "aleesha@google.com" // this is the truthy value
 
 // we are assuming the value in the string to be true

// will work for an empty array asw

 if(userEmail) {
   // console.log("Got the user email")

 } else {
    console.log("Dont have the user email")
 }


 // ++++++++++++++ Falsy Values :

 // false, 0, -0, BigInt 0n, "", null, undefined, NaN

 // the rest are truthy values

// "0" (in a string) , "false" (in a string),[],{},function(){}

// E.g for objects

const emptyObj = {}

if(Object.keys(emptyObj).length===0) {
    //console.log("Objecy is empty")
} else {
    console.log("Object isnt empty")
}


// ++++++++++++++  Nullish Coalescing Operator (??): null undefined 

let v1;
v1 = 30 ?? 10 
//console.log(v1)  // 30 

// Terniary Operator 
// condition ? true : false 


const Price = 100
Price>=80 ? console.log("<80"):console.log(">80")
