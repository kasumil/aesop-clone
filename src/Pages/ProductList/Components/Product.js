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
          <h5 className="productName">{name}</h5>
          <div className="productSizePrice">
            <span className="productSize">{size}</span>
            <span className="seperator">/</span>
            <span className="productProce">{price}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
