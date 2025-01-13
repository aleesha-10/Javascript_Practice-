// Date : represents a single moment

let myDate  = new Date()
// console.log(myDate) // 2025-01-13T09:38:46.186Z

// console.log(myDate.toString()) // Mon Jan 13 2025 14:39:59 GMT+0500 (Pakistan Standard Time)

// console.log(myDate.toLocaleDateString()) // 1/13/2025

// ** so many other funcions 
// console.log(myDate.toDateString())
// console.log(myDate.getDate())
// console.log(myDate.toUTCString()) 
// ***** and more 


// console.log(typeof myDate) // object 

let myCreatedDate = new Date(2025,0,23)
// console.log(myCreatedDate) // 2025-01-22T19:00:00.000Z
// console.log(myCreatedDate.toDateString()) // Thu Jan 23 2025

let myNewDate = new Date(2025,0,25,6,3)
// console.log(myNewDate.toLocaleString()) // Thu Jan 23 2025

let myDate2 = new Date("2025-01-15")   
// console.log(myDate2.toLocaleString()) // 1/15/2025, 5:00:00 AM


// Time Stamps 

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // 1736770686156 milliseconds
// console.log(myDate2.getTime()) // 1736899200000 

// We can also convert it to seconds 
// console.log(Math.floor(Date.now()/1000)) // added floor to avod decimals 

let newDate = new Date()
// console.log(newDate.getDay()) // 1 => monday // there are so many other functions 
// console.log(newDate.getDay() + 1)

// `${newDate.getDay()} and the time is...`

newDate.toLocaleDateString('default',{
    // you can define an entire object here
     weekday:"short", // long,narrow,short
     
})

