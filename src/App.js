import React, { useState } from "react";
import AppBar from "./AppBar.js";
import AppView from "./AppView.js";
import { BrowserRouter } from "react-router-dom";
import ShoppingBag from "./ShoppingBag.js";
import { Switch, Route } from "react-router";
import data from "./GameList.json";

function App() {
  const [games, setGames] = useState(data.gamesList);

  const handleMenuChanged = React.useCallback((category) => {
    const gamesFiltered = data.gamesList.filter(
      (game) => game.category.id === category.id
    );
    setGames(gamesFiltered);
  }, []);

  const [products, setProducts] = useState([]);

  function addProductToBasket(product) {
    setProducts((products) => {
      products.push(product);
      return products;
    });
  }

  function deleteProductFromBasket(productId) {
    setProducts(products.filter((product) => product.id !== productId));
  }

  return (
    <BrowserRouter>
      <AppBar onMenuChanged={handleMenuChanged} />
      <Switch>
        <Route path="/panier">
          <ShoppingBag
            products={products}
            deleteProductFromBasket={deleteProductFromBasket}
          />
        </Route>
        <Route path="/">
          <AppView games={games} addProductToBasket={addProductToBasket} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
