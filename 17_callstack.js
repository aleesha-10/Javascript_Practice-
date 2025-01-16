// JS execution context 
// (2) Function execution context 
// (3) Eval execution context

// this is kept in global exection context

// {} => memory creation phase / creation phase then execution phase
// 

let v1 = 10
let v2 = 20

function addNum(num1, num2){
    let total = num1 + num2
    return total;
}

let result1 = addNum(v1,v2)
let result2 = addNum(10,20)

// 1 GE 
// 2 Memory phase - first cycle - val 1 - undefined - val 2 - undefined - add num - definition - 
// result 1 - undefined - result 2 - undefined 
// execution phase : val 1 - 10 - val 2 - 5 
// add num - [new environment + execution thread] - made each time you run the function - memory pahse - val1,val2,total - undefined
// execution phase : num1: 10, num 2: 20, total -30 - returned to global executional context
// GE - last in first out - LIFO 







 

