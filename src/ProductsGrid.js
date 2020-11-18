import React from "react";
import ProductCard from "./ProductCard.js";

function ProductsGrid({ games }) {
  return (
    <main>
      <div className="products-grid">
        {games.map((game) => {
          return (
            <ProductCard
              name={game.name}
              description={game.description}
              price={game.price}
              image={game.image}
            />
          );
        })}
      </div>
    </main>
  );
}

export default ProductsGrid;
