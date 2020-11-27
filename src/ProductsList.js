import React from "react";
import ProductRow from "./ProductRow.js";

function ProductsList({ games, addProductToBasket }) {
  return (
    <main>
      {games.map((game) => {
        return (
          <ProductRow
            id={game.id}
            name={game.name}
            description={game.description}
            price={game.price}
            image={game.image}
            key={game.id}
            addProductToBasket={addProductToBasket}
          />
        );
      })}
    </main>
  );
}

export default ProductsList;
