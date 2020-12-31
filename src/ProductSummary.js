import React from "react";
import { Button, Divider } from "semantic-ui-react";
import "./App.css";
import { connect } from "react-redux";

function ProductSummary(props) {
  const quantity = props.quantity;

  return (
    <div>
      <div className="product-summary">
        <img className="product-image" src={props.image} />
        <div>
          <div className="product-name">{props.name}</div>
          <Button
            size="mini"
            icon="trash"
            content="Supprimer"
            onClick={() => props.deleteProductFromBasket({ id: props.id })}
          />
        </div>
        <div className="button-quantity">
          <Button
            size="mini"
            content="-"
            onClick={() =>
              props.reduceQuantity({ id: props.id, quantity: quantity - 1 })
            }
          />
          {props.quantity}
          <Button
            size="mini"
            content="+"
            onClick={() =>
              props.addToBasket({ id: props.id, quantity: quantity + 1 })
            }
          />
        </div>
        <div className="product-price">{props.price} €</div>
      </div>
      <Divider />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (product) => dispatch({ type: "ADD_TO_BASKET", product }),
    reduceQuantity: (product) => dispatch({ type: "REDUCE_QUANTITY", product }),
    deleteProductFromBasket: (product) =>
      dispatch({ type: "DELETE_FROM_BASKET", product }),
  };
};

export default connect(null, mapDispatchToProps)(ProductSummary);
