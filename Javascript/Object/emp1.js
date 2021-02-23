var emp = {
  emp_Name: "Ramesh",
  emp_Sal: 50000,
  loc: ["hyd", "Bangalore", "chennai"],
};

//how to iterate/access obj properties
for (property in emp) {
  console.log("....", property, "...", emp[property]);
  console.log("....", property, "...", emp.property);
}
