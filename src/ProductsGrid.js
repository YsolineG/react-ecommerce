import React from "react";
import ProductCard from "./ProductCard.js";

function ProductsGrid({ games, addProductToBasket }) {
  return (
    <main>
      <div className="products-grid">
        {games.map((game) => {
          return (
            <ProductCard
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
      </div>
    </main>
  );
}

export default ProductsGrid;
