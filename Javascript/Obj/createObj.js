let emp = {
  name: "Raj",
  getSal: function () {
    console.log("Emp Sal: 3000 USD");
    return 3000;
  },
};
/* console.log(emp);
console.log(emp.getSal());
console.log(emp.loc());
 */
delete emp.name;
console.log(emp);

delete emp.getSal;

console.log(emp);
emp.loc = "Bangalore";

console.log(emp);
