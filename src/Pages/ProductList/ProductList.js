import React from "react";
import Productfilternav from "../../Components/Productfilternav";
import Nav from "../../Components/Nav";
import Productslider from "./Components/Productslider";
<<<<<<< HEAD
=======
import { PLData } from "../../config";
>>>>>>> master
import "./ProductList.scss";

class ProductList extends React.Component {
  state = {
    products: {},
    category: [],
    item: [],
  };

  componentDidMount() {
<<<<<<< HEAD
    fetch("http://10.58.6.25:8080/board/1")
=======
    fetch(`${PLData}`)
>>>>>>> master
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.data }));
  }
  render() {
    const { products } = this.state;
    return (
      <div className="ProductList">
        <Nav />
        <Productfilternav />
        <Productslider products={products} />
      </div>
    );
  }
}

export default ProductList;
