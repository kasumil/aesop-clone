import React from "react";
import "./Product.scss";

class Product extends React.Component {
  render() {
    const { name, size, price, image } = this.props;
    return (
      <div className="Product">
        <a href="-">
          <img src={image} />
        </a>
        <div className="productInfo">
          <h5 className="name">{name}</h5>
          <div className="sizePrice">
            <span className="size">{size}</span>
            <span className="seperator">/</span>
            <span className="prrce">{price}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
