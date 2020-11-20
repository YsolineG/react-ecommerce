import React, { useState } from "react";
import AppBar from "./AppBar.js";
import AppView from "./AppView.js";
import { BrowserRouter } from "react-router-dom";

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
    console.log(category);
    const gamesFiltered = gamesList.filter(
      (game) => game.category.id === category.id
    );
    setGames(gamesFiltered);
  }, []);

  return (
    <div className="App">
      <AppBar onMenuChanged={handleMenuChanged} />

      <BrowserRouter>
        <AppView games={games} />
      </BrowserRouter>
    </div>
  );
}

export default App;
