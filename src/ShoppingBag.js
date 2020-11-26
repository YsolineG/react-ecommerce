import React from "react";
import ProductSummary from "./ProductSummary.js";
import TotalSummary from "./TotalSummary.js";

function ShoppingBag({ products }) {
  return (
    <div className="shopping-bag">
      <div>
        <h2>Mon panier</h2>
        <div className="my-shopping-bag">
          {products.map((product) => {
            return (
              <ProductSummary
                image={product.image}
                name={product.name}
                price={product.price}
                key={product.id}
              />
            );
          })}
        </div>
      </div>
      <div className="summary">
        <h2>Récapitulatif</h2>
        <TotalSummary />
      </div>
    </div>
  );
}

export default ShoppingBag;
