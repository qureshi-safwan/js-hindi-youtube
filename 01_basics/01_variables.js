const accountId = 144553
let accountEmail = "qureshi_safwan1@outlook.com"
var accountPassword = "12345"
AccountCity = "Gilgit"
let accountState;

// accountId = 2 // not allowed



accountEmail = "abc@hc.com"
accountPassword = "54321"
AccountCity = "Islamabad"

/* 
prefer not to use var 
because of issue in block scope and functional scope
 */

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, AccountCity, accountState])