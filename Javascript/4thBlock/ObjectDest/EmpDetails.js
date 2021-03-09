let empDetails = {
  emp: { name: "Narasimha", age: 37, loc: "Bangalore" },
  assets: ["Laptop", "Monitor", "Mouse"],
  sal: 50000,
};
//  to convert object properties as variables

let { sal, emp } = empDetails;
console.log(sal);
console.log(emp);
sal = 40000;

console.log(sal);
console.log(empDetails);
