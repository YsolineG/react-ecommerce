import React from "react";
import "./App.css";
import { Button, Input, Menu, Divider } from "semantic-ui-react";

const menuItems = [
  {
    key: 1,
    name: "PC",
  },
  {
    key: 2,
    name: "Nintendo Switch",
  },
  {
    key: 3,
    name: "Xbox",
  },
  {
    key: 4,
    name: "Playstation",
  },
];

function AppBar() {
  return (
    <header>
      <div className="top-header">
        <Input
          fluid
          className="input-search"
          icon="search"
          iconPosition="left"
          placeholder="Rechercher"
        />
        <Button icon="user" content="Compte" />
        <Button icon="shopping basket" content="Panier" />
      </div>
      <Menu secondary>
        {menuItems.map((item) => (
          <Menu.Item
            name={item.name}
            onClick={() => console.log("click on " + item.name)}
          />
        ))}
      </Menu>
      <Divider />
    </header>
  );
}

export default AppBar;
