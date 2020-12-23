import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

function UserAccount({ basket }) {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  async function submitForm() {
    const response = await axios.post(
      "http://localhost:8000/api/v1/customers",
      {
        firstname: firstname,
        name: lastname,
        adress: address,
        address: address,
        email: email,
      }
    );

    const result = await axios.post("http://localhost:8000/api/v1/orders", {
      customer_id: response.data.id,
    });

    // on souhaite ajouter les produits du panier à la commande
    // 1. parcourir avec une boucle le tableau de produits dans le panier (basket)
    // 2. pour chaque élément du tableau de produits dans le panier (basket)
    // on appelle l'API avec l'ID de la commande dans l'URL et en paramètres
    // l'ID de la commande (order_id), l'ID du produit (product_id) et la quantité (quantity)

    for (var i = 0; i < basket.length; i++) {
      await axios.post(
        "http://localhost:8000/api/v1/orders/" + result.data.id + "/products",
        {
          order_id: result.data.id,
          product_id: basket[i].id,
          quantity: 1,
        }
      );
    }
  }

  return (
    <div>
      <h1>Inscription</h1>
      <Form>
        <Form.Field>
          <label>Nom</label>
          <input
            placeholder="Nom"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Prénom</label>
          <input
            placeholder="Prénom"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Adresse</label>
          <input
            placeholder="Adresse"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </Form.Field>
        <Button type="submit" onClick={submitForm}>
          Confirmer
        </Button>
      </Form>
    </div>
  );
}

export default UserAccount;
