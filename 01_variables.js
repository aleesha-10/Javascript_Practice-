const accountId = 14455 // changing consts isnt allowed
let accountEmail = "xyz@gmail.com" //used for scope
var accountPassword = "12345" // avoid using var bec of the issue in block and functional scope
accountCity = "lahore"
let accountState; // undefined

console.log(accountId);

accountEmail = "ac@ab.com" // can be changed
  
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

