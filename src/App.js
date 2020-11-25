import React, { useState } from "react";
import AppBar from "./AppBar.js";
import AppView from "./AppView.js";
import { BrowserRouter } from "react-router-dom";
import ShoppingBag from "./ShoppingBag.js";
import { Switch, Route } from "react-router";

const gamesList = [
  {
    id: 1,
    image:
      "https://www.actugaming.net/wp-content/uploads/2020/08/fall-guys3.jpg",
    name: "Fall Guys",
    description: "Fall Guys: Ultimate Knockout, soit le dernier survivant.",
    price: "20€",
    category: {
      id: 1,
      name: "PC",
      slug: "pc",
    },
  },
  {
    id: 2,
    image:
      "http://ubistatic19-a.akamaihd.net/ubicomstatic/fr-fr/global/search-thumbnail/ubicom-jd2021-page-meta-artwork_mobile_363097.jpg",
    name: "Just Dance 2021",
    description: "Jeu de danse par excellence avec 40 nouveaux tubes",
    price: "60€",
    category: {
      id: 2,
      name: "Switch",
      slug: "nintendo-switch",
    },
  },
];

function App() {
  const [games, setGames] = useState(gamesList);

  const handleMenuChanged = React.useCallback((category) => {
    const gamesFiltered = gamesList.filter(
      (game) => game.category.id === category.id
    );
    setGames(gamesFiltered);
  }, []);

  return (
    <BrowserRouter>
      <AppBar onMenuChanged={handleMenuChanged} />
      <Switch>
        <Route path="/panier">
          <ShoppingBag games={games} />
        </Route>
        <Route path="/">
          <AppView games={games} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
