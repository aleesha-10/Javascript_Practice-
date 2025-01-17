// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// For - Of 

for (const num of arr) {
    //console.log(num)
    
}

const greeting = "Hello world"
for (const greet of greeting) {
   // console.log(`Each char is ${greet}`)
    
}

// +++++ MAPS

const map = new Map()
//map.//set//get//foreach//keys//values//clear//delete//entries......
map.set('PK',"Pakistan")
map.set('USA',"United States Of America")

//console.log(map)

//Map(2) { 'PK' => 'Pakistan', 'USA' => 'United States Of America' }


for (const key of map) {
 //  console.log(key)
    
}

// [ 'PK', 'Pakistan' ]
// [ 'USA', 'United States Of America' ]

for (const [key, value]of map) // syntax 
{
   // console.log(key, ':-' , value)
    
}

//PK :- Pakistan
//USA :- United States Of America

const obj = {
    "country1":"Pakistan",
    "country2":"Persia"
}

//for (const [key,value] of obj) {
   // console.log(key, ':-' , value) // Wont work , objects cant be iterated using this loop
    
//}

const myObj = {
    js : "JavaScript",
    cpp : "C++",
    py : "Python"
}

// now using the for IN loop

//for (const key in myObj) {
    //console.log(`${key} is for ${myObj[key]}`)
    
//}

// js is for JavaScript
//cpp is for C++
//py is for Python

const languages = ["JS","PY","CSS"]

for (const key in languages) {
  // console.log(languages[key])
}


// for ins dont print for maps for ofs do

// ++++++++++++ For Each

// requires a callback function - no name

//languages.forEach(function (item){
  //  console.log(item)
//} )

// using arrow function

//languages.forEach((values) => {
  //  console.log(item)
//})

// another method :
// function printMe(item){
//    console.log(item)
// }

// languages.forEach(printMe)

const myLanguages = [
   { languageName:"JavaScript",
     shortcut:"JS"
   },
   { languageName:"CPP",
     shortcut:"C++"
   },
   { languageName:"Python",
     shortcut:"Py"
   }
]

myLanguages.forEach((value) => {
    console.log(value.shortcut)
    console.log(value.languageName)
})

