import React from "react";
import { Button, Divider } from "semantic-ui-react";
import "./App.css";
import { connect } from "react-redux";

function ProductRow(props) {
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
            props.addToBasket({
              id: props.id,
              name: props.name,
              description: props.description,
              price: props.price,
              image: props.image,
              quantity: 1,
            })
          }
        >
          Ajouter au panier
        </Button>
      </div>
      <div>
        <Divider />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    addToBasket: (product) => dispatch({ type: "ADD_TO_BASKET", product }),
  };
};

export default connect(null, mapDispatchToProps)(ProductRow);
