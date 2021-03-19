import { Fragment } from "react";
import Footer from "./Footer";
function Navbar() {
  let employee = {
    name: "Narasimha",
    age: 38,
    loc: "Bangalore",
  };
  return (
    <Fragment>
      <h2> Navbar Component</h2>
      <h3>
        Employee Data- Name: {employee.name} ,Age: {employee.age} ,Location:
        {employee.loc}
      </h3>
      <hr />
      <Footer emp={employee} />
    </Fragment>
  );
}

export default Navbar;
