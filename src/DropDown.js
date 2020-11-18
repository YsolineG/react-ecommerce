import React from "react";
import { Menu, Dropdown, Divider } from "semantic-ui-react";
import "./App.css";

const options = [
  { key: 1, text: "Liste", value: 1 },
  { key: 2, text: "Grille", value: 2 },
];

function DropDown() {
  return (
    <div>
      <div className="dropdown">
        <Menu compact>
          <Dropdown text="Affichage" options={options} simple item />
        </Menu>
      </div>
      <Divider />
    </div>
  );
}

export default DropDown;
