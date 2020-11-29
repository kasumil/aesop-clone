import React from "react";
import { Link } from "react-router-dom";
import "./Recommendproduct.scss";

export default function Recommendproduct() {
  const { id, name, image } = this.props;
  return (
    <div className="Recommendproduct">
      <div className="imgContainer">
        <Link to="/skin/details">
          <img id={id} src={image} />
        </Link>
      </div>
      <div className="productInfo">
        <h5 className="name">{name}</h5>
      </div>
    </div>
  );
}