import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Input, Menu, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

function AppBar(props) {
  const [data, setData] = useState({ categories: [] });

  // Appel API catégories
  useEffect(() => {
    async function fetchData() {
      const response = await axios("http://localhost:8000/api/v1/categories");
      setData({ categories: response.data });
    }
    fetchData();
  }, []);

  const { onMenuChanged } = props;

  const [selected, setSelected] = React.useState(data.categories);

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
        <Button as={Link} to="/compte" icon="user" content="Compte" />
        <Button
          as={Link}
          to="/panier"
          icon="shopping basket"
          content="Panier"
        />
      </div>
      <Menu secondary>
        {data.categories.map((category) => (
          <Menu.Item
            name={category.name}
            onClick={() => handleMenuClick(category)}
            active={selected.id === category.id}
            key={category.id}
            as={Link}
            to={"/" + category.name}
          />
        ))}
      </Menu>
      <Divider />
    </header>
  );
}

export default AppBar;
