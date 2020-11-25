import React from "react";
import { Button, Divider } from "semantic-ui-react";
import "./App.css";

function ProductSummary(props) {
  return (
    <div>
      <div className="product-summary">
        <img className="product-image" src={props.image} />
        <div>
          <div className="product-name">{props.name}</div>
          <Button size="mini" icon="trash" content="Supprimer" />
        </div>
        <div className="product-price">{props.price}</div>
      </div>
      <Divider />
    </div>
  );
}

export default ProductSummary;
