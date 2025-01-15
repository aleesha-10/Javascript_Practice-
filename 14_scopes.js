let a=300

if (true)
{
    let a = 10 // in scope
    const b = 20 // in scope
    //var c = 30 // can be acessd outside of scope of if else
   // console.log("inner:",a) // to print the inner value of a asw
}

//console.log(a) // 300 // global will be considered 

// global Scope in browser is different to the scope in the program with node


function one()
{
    const username = "aleesha"
    function two(){ // two can acess one 
        const website = "chrome"
        console.log(username)
    }
    //console.log(website); // one cant access two 
    two()
}

//one() // aleesha 

if (true)
{
    const username = "aleesha"
    if(username==="aleesha")
    { // two can acess one 
        const website = "chrome"
     //   console.log(username + website) // prints
    }
   // console.log(website) // cant access website 
}

//console.log(username) // cant be accessed

// +++++++++++++++++++ interesting ++++++++++++++++++//

function addone(num){
    return num + 1
}

addone(5) // can be declared before the function

const addTwo = function(num){
    return num + 2
}

addTwo(5) // cant be declared before the function because 
// the function is being stored in a variable 
