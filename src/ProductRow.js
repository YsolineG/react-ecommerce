import React from "react";
import "./App.css";
import { Button, Divider } from "semantic-ui-react";

function ProductRow(props) {
  return (
    <div>
      <div className="product-row">
        <img className="product-image" src={props.image} />
        <div className="product-content">
          <div className="product-name">{props.name}</div>
          <div className="product-description">{props.description}</div>
        </div>
        <div className="product-price">{props.price}</div>
        <Button>Acheter</Button>
      </div>
      <div>
        <Divider />
      </div>
    </div>
  );
}

export default ProductRow;
