import "./App.css";
import AppBar from "./AppBar.js";
import ProductsList from "./ProductsList.js";

const games = [
  {
    key: 1,
    image:
      "https://www.actugaming.net/wp-content/uploads/2020/08/fall-guys3.jpg",
    name: "Fall Guys",
    description: "Fall Guys: Ultimate Knockout, soit le dernier survivant.",
    price: "20€",
  },
  {
    key: 2,
    image:
      "http://ubistatic19-a.akamaihd.net/ubicomstatic/fr-fr/global/search-thumbnail/ubicom-jd2021-page-meta-artwork_mobile_363097.jpg",
    name: "Just Dance 2021",
    description: "Jeu de danse par excellence avec 40 nouveaux tubes",
    price: "60€",
  },
];

function App() {
  return (
    <div className="App">
      <AppBar />
      <ProductsList games={games} />
    </div>
  );
}

export default App;
