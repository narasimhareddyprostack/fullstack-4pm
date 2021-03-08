const bcrypt = require("bcryptjs");

let login = {
  name: "Raj Kumar",
  email: "greetlab@gmail.com",
  password: "Hello@GM",
};

let salt = bcrypt.genSaltSync(5);
let newPassword = bcrypt.hashSync(login.password, salt);

console.log(newPassword);

/* let newLogin = { ...login, password: newPassword };

console.log(newLogin);
 */
