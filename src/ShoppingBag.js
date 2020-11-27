import React from "react";
import ProductSummary from "./ProductSummary.js";
import TotalSummary from "./TotalSummary.js";

function ShoppingBag({ products, deleteProductFromBasket }) {
  const totalProductPrice = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  return (
    <div className="shopping-bag">
      <div>
        <h2>Mon panier</h2>
        <div className="my-shopping-bag">
          {products.map((product) => {
            return (
              <ProductSummary
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                key={product.id}
                deleteProductFromBasket={deleteProductFromBasket}
              />
            );
          })}
        </div>
      </div>
      <div className="summary">
        <h2>Récapitulatif</h2>
        <TotalSummary totalProductPrice={totalProductPrice} deliveryPrice={5} />
      </div>
    </div>
  );
}

export default ShoppingBag;
