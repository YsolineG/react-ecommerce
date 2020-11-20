import React from "react";
import ProductSummary from "./ProductSummary.js";
import TotalSummary from "./TotalSummary.js";

function ShoppingBag({ games }) {
  return (
    <div className="shopping-bag">
      <h2>Mon panier</h2>
      <div className="my-shopping-bag">
        {games.map((game) => {
          return (
            <ProductSummary
              image={game.image}
              name={game.name}
              price={game.price}
              key={game.id}
            />
          );
        })}
      </div>
      <h2>Récapitulatif</h2>
      <TotalSummary />
    </div>
  );
}

export default ShoppingBag;
