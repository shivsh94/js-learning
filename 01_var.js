const accountId = 14526
let accountEmail = "shivam23jan@gmail.com"
var accountPassword = "12345" // var can't  be accessed outside the file, As there is an issue in block and functional scope;
let accountCity = "Jaipur"

//accountId = 2  // const can 't be reassigned, let is used for mutable values

console.log(accountId);

accountEmail = "hello@1234"
accountPassword = "7654"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity]) //prints the details in a table format</s
