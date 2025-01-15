//Immediately Invoked Function expressions (IIFE)

(function myfunc(){
    console.log(`DB CONNECTED`)
})() ; // added the semi colon so it knows where to stop the context

// now the function is being immediately invoked
// to avoid the pollution of the global scope 

(function mycode(){
    // named IIFE
    console.log(`DB CONNECTED`)
})()   

((name) => { // argument 
    // unnamed IIFE
    console.log(`DB CONNECTED to ${name}`)
})("aleesha")   // passing the parameter here 

