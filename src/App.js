import React, { useEffect, useState } from "react";
import AppBar from "./AppBar.js";
import AppView from "./AppView.js";
import { BrowserRouter } from "react-router-dom";
import ShoppingBag from "./ShoppingBag.js";
import { Switch, Route } from "react-router";
import axios from "axios";
import UserAccount from "./UserAccount.js";

function App() {
  // Produits
  const [data, setData] = useState({ products: [] });

  //Appel API Produits
  useEffect(() => {
    async function fetchData() {
      const response = await axios("http://localhost:8000/api/v1/products");
      setData({ products: response.data.data });
    }
    fetchData();
  }, []);

  const handleMenuChanged = React.useCallback(async (category) => {
    const response = await axios.get("http://localhost:8000/api/v1/products", {
      params: {
        category_id: category.id,
      },
    });
    setData({ products: response.data.data });
  }, []);

  return (
    <BrowserRouter>
      <AppBar onMenuChanged={handleMenuChanged} />
      <Switch>
        <Route path="/panier">
          <ShoppingBag />
        </Route>
        <Route path="/compte">
          <UserAccount />
        </Route>
        <Route path="/">
          <AppView games={data.products} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
