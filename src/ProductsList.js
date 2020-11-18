import React from "react";
import ProductRow from "./ProductRow.js";

function ProductsList({ games }) {
  return (
    <main>
      {games.map((game) => {
        return (
          <ProductRow
            name={game.name}
            description={game.description}
            price={game.price}
            image={game.image}
          />
        );
      })}
    </main>
  );
}

export default ProductsList;
