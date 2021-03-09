const bcrypt = require("bcryptjs"); // Es5
//import bcrypt from 'bcryptjs'   // Es6

let login = {
  name: "Raj Kumar",
  email: "greetlab@gmail.com",
  password: "Hello@GN",
};

let salt = bcrypt.genSaltSync(5);
let newPassword = bcrypt.hashSync(login.password, salt);
/* console.log(newPassword); */
let newLogin = { ...login, password: newPassword };
/* console.log(newLogin); */

if (bcrypt.compareSync("Hello@GM", newPassword)) {
  console.log("Password Match - Continue");
} else {
  console.log("Password Doesnt Match - Try Agin");
}
