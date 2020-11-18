import React from "react";
import { Button } from "semantic-ui-react";
import "./App.css";

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-element">
        <img className="product-image" src={props.image} />
        <div className="product-name">{props.name}</div>
        <div className="product-description">{props.description}</div>
        <div className="product-price">{props.price}</div>
        <Button>Acheter</Button>
      </div>
    </div>
  );
}

export default ProductCard;
