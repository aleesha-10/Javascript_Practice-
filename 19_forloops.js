// For 

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
       // console.log("5 printed") // loop within a loop
    }
   // console.log(element) // cant be accessed outside the loop
    
}

for (let index = 0; index < 10; index++) {
   // console.log(`outer loop value: ${index}`)
    for (let j =0 ; j<10;j++){
      //  console.log(`inner loop value: ${j},outer loop value: ${index}`)
      //  console.log(index + '*' + j+ '=' + index*j )
        // printing tables
    }
    
}

// Using Arrays

let myArray = ["flash","batman","superman"]

for ( index = 0; index < myArray.length; index++){
    const element = myArray[index];
   // console.log(element)
}


// break and continue 

for (let index = 1; index <=20; index++) {
    if (index == 5){
       // console.log("5 detected")
        break;
    }
   // console.log(`Value of i is ${index}`)
    
}

for (let index = 1; index <=20; index++) {
    if (index == 5){
       // console.log("5 detected")
        continue; // condition can be skipped once without coming out of the loops once 
    }
   // console.log(`Value of i is ${index}`)
    
}
