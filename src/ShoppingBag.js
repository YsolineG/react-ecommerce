import React from "react";
import ProductSummary from "./ProductSummary.js";
import TotalSummary from "./TotalSummary.js";
import { connect } from "react-redux";

function ShoppingBag(props) {
  return (
    <div className="shopping-bag">
      <div>
        <h2>Mon panier</h2>
        <div className="my-shopping-bag">
          {props.products.map((product) => {
            return (
              <ProductSummary
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            );
          })}
        </div>
      </div>
      <div className="summary">
        <h2>Récapitulatif</h2>
        <TotalSummary totalProductPrice={props.total} deliveryPrice={5} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("state=", state);
  return {
    products: state.products,
    total: state.total,
  };
}

export default connect(mapStateToProps)(ShoppingBag);
