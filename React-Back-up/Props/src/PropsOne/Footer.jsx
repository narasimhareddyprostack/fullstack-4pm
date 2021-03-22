let Footer = (props) => {
  return (
    <>
      <h2> Footer Comp</h2>
      {JSON.stringify(props)}
      <h2>
        Name:{props.emp.name} age: {props.emp.age}
      </h2>
    </>
  );
};
export default Footer;
