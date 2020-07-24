import React from "react";
import Productfilternav from "../../Components/Productfilternav";
import Nav from "../../Components/Nav";
import Productslider from "./Components/Productslider";
import "./ProductList.scss";

class ProductList extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/productlist.json")
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.data }));
  }

  render() {
    const { products } = this.state;
    return (
      <div className="ProductList">
        <Nav />
        <Productfilternav products={products} />
        <Productslider products={products} />
      </div>
    );
  }
}

export default ProductList;
