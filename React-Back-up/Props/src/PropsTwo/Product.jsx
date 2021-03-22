import React from "react";
import ProductDetails from "./ProductDetails";
class Product extends React.Component {
  shirt_Name = "Men Slim Fit Solid Slim Collar Formal Shirt";
  shirt_Image =
    "https://rukminim1.flixcart.com/image/570/684/kh80vww0-0/shirt/o/y/c/m-fo-shrt-499-wht-5th-anfold-original-imaeue3b4zycypnw.jpeg?q=50";
  size = [38, 40, 42, 444];
  discount = function () {
    console.log("Discount not Available");
  };
  render() {
    return (
      <>
        <h2> Product Component</h2>
        <h3> Shirt Name : {this.shirt_Name} </h3>
        <h4>
          {" "}
          Size:{this.size[0]} | {this.size[2]} | {this.size[3]}
        </h4>
        <hr />
        <ProductDetails
          size={this.size}
          name={this.shirt_Name}
          image={this.shirt_Image}
          discount={this.discount}
        />
      </>
    );
  }
}
export default Product;
