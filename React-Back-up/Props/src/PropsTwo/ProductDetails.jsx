let ProductDetails = (props) => {
  return (
    <>
      <h4> Product Details </h4>
      <pre>{JSON.stringify(props)}</pre>
      <h4>Shirt Name:{props.name}</h4>
      <img src={props.image} alt="Shirt one" height="200px" width="300px" />
      {props.discount()}
      <h4> Shirt Size: {props.size[0]}</h4>
    </>
  );
};

export default ProductDetails;
