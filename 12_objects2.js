// const appUser = new object () // singleton object
const appUser = {} // non-sigleton object
// console.log(appUser) // empty object 

appUser.id = "1a2b3c"
appUser.name = "her"
appUser.isLoggedIn = false 

// console.log(appUser)

const regularUser = {
    name : "regularuser@gmail.com",
    fullName : { 
        userFullNAme:{
            firstName: "Aleesha",
            lastName : "B"
        }

    }
}

// console.log(regularUser.fullName) // keep adding dots to access nests
//console.log(regularUser.fullName.userFullNAme.firstName) // Aleesha 

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
//const obj3 = {obj1, ojb2} // objects within an object 
const obj4 = {5: "a", 6:"b"}

// const obj3 = Object.assign({},obj1, obj2,obj4) // the paranthesis are optional

// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
    {

    },
    {

    },

    {
        id: 1,
        email: "ab@google.com",

    }
]

users[1].email
// console.log(appUser)


// console.log(Object.values(appUser))

// console.log(Object.keys(appUser)); // output datatype is an array so we can use loops

// console.log(Object.entries(appUser)) //[ [ 'id', '1a2b3c' ], [ 'name', 'her' ], [ 'isLoggedIn', false ] ]

// to see if a vaue exists or not 

// console.log(appUser.hasOwnProperty('email')); // false

// some other properties 

// propertyIsEnumerable, isPrototypeOf, 


// +++++++++++++++++++++++++++++++++++++++++++++++


// destructuring of objects


const course = {
    coursename : "JS",
    instructor : "aleesha"
}

//course.coursename
const {coursename,instructor} = course 
console.log(coursename,instructor) // JS,aleesha

// const navbar = ({company}) => {

// } used in react, destructuring 

navbar(company = "aleesha" )


// ++++++++ JSON => not an obejct 


//{
// "name" :"Aleesha",
// "coursename": "JS"
//}

// APIs can also be in the format of an array

[
    {},
    {}
]

// JSON formatter => formart, beautify => tree,ext,code