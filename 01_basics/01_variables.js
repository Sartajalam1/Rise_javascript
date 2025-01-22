const accountId = 122244;
let accountEmail = "sartaj62@gmail.com"
var accountPassword = "37900"
accountCity = "Bihar";

// accountId = 23 // constant variable same variables name not Allowed

console.log(accountId)

/* Prefer not to use var
Becouse of isssue in block scope and functional scopeclear */

accountId = 45445454545;
accountEmail = "sa@gmail.com"
accountPassword = "12121121211"
accountCity = "Delhi"

// console.log(accountPassword)

console.table([accountId,accountEmail,accountPassword,accountCity])
