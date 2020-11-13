import "./App.css";
import { Button, Icon, Input } from "semantic-ui-react";

function Head() {
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
      <nav className="menu">
        <a href="">PC</a>
        <a href="">Nintendo Switch</a>
        <a href="">Xbox</a>
        <a href="">Playstation</a>
      </nav>
    </header>
  );
}

export default Head;
