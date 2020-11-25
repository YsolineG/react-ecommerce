import React from "react";
import "./App.css";
import { Button, Input, Menu, Divider } from "semantic-ui-react";

const categories = [
  {
    id: 1,
    name: "PC",
    slug: "pc",
  },
  {
    id: 2,
    name: "Nintendo Switch",
    slug: "nintendo-switch",
  },
  {
    id: 3,
    name: "Xbox",
    slug: "xbox",
  },
  {
    id: 4,
    name: "Playstation",
    slug: "playstation",
  },
];

function AppBar(props) {
  // const { onShoppingBagChange } = props;

  const { onMenuChanged } = props;

  const [selected, setSelected] = React.useState(categories[0]);

  const handleMenuClick = React.useCallback(
    (category) => {
      setSelected(category);

      if (onMenuChanged) {
        onMenuChanged(category);
      }
    },
    [onMenuChanged]
  );

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
        <Button
          icon="shopping basket"
          content="Panier"
          // onClick={onShoppingBagChange}
        />
      </div>
      <Menu secondary>
        {categories.map((category) => (
          <Menu.Item
            name={category.name}
            onClick={() => handleMenuClick(category)}
            active={selected.id === category.id}
            key={category.id}
          />
        ))}
      </Menu>
      <Divider />
    </header>
  );
}

export default AppBar;
