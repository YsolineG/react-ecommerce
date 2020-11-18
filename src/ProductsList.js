import React from "react";
import { Menu, Dropdown, Divider } from "semantic-ui-react";
import "./App.css";
import ProductRow from "./ProductRow.js";

const options = [
  { key: 1, text: "Liste", value: 1 },
  { key: 2, text: "Grille", value: 2 },
];

function ProductsList({ games }) {
  return (
    <main>
      <div className="dropdown">
        <Menu compact>
          <Dropdown text="Affichage" options={options} simple item />
        </Menu>
      </div>
      <Divider />
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
