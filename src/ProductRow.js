import React from "react";
import { Button, Divider } from "semantic-ui-react";
import "./App.css";

function ProductRow(props) {
  const { addProductToBasket } = props;

  return (
    <div>
      <div className="product-row">
        <img className="product-image" src={props.image} />
        <div className="product-content">
          <div className="product-name">{props.name}</div>
          <div className="product-description">{props.description}</div>
        </div>
        <div className="product-price">{props.price} €</div>
        <Button
          onClick={() =>
            addProductToBasket({
              id: props.id,
              name: props.name,
              description: props.description,
              price: props.price,
              image: props.image,
            })
          }
        >
          Acheter
        </Button>
      </div>
      <div>
        <Divider />
      </div>
    </div>
  );
}

export default ProductRow;
