const myArr = [0,1,2,3,4,5] // you can add add other elements such as true, "aleesha"
const heros = ["batman","spiderman"]
const array2 = new Array(1,2,3,4,5) 
// console.log(myArr[3]) // 3 


  // Array methods 

  myArr.push(6) // adds a new value 
  // console.log(myArr)
  myArr.pop() // removes the last value 

  myArr.unshift(0) // adds an element to the start of the array 
  myArr.shift() // removed the value added by unshift
  // console.log(myArr.includes(5)) // true 
 // console.log(myArr.indexOf(3)) // 3
 const newArr = myArr.join()
 // console.log(newArr) // converted it to string 


 // slice , splice 
 // console.log("A",myArr) // A [ 0, 1, 2, 3, 4, 5 ]

 const myarr1 = myArr.slice(1,3) // returns a section of the array
 // console.log(myarr1) // [ 1, 2 ]

// console.log("B",myArr) // B [ 0, 1, 2, 3, 4, 5 ]

 const myarr2 = myArr.splice(1,3)  // the original array isnt maintained after this 
 // returns a section of the array
 // console.log("C",myArr) // Printing original array //  [0,4,5] 
 // console.log(myarr2) // [ 1, 2, 3 ]


  


  


