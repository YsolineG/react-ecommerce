import React from "react";
import { Button } from "semantic-ui-react";
import "./App.css";
import { connect } from "react-redux";

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-element">
        <img className="product-image" src={props.image} />
        <div className="product-name">{props.name}</div>
        <div className="product-description">{props.description}</div>
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
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (product) => dispatch({ type: "ADD_TO_BASKET", product }),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
