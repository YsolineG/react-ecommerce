import "./App.css";
import { Button, Icon, Input, Menu } from "semantic-ui-react";

const menuItems = [
  {
    name: "PC",
  },
  {
    name: "Nintendo Switch",
  },
  {
    name: "Xbox",
  },
  {
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
          <Menu.Item name={item.name} />
        ))}
      </Menu>
    </header>
  );
}

export default AppBar;
