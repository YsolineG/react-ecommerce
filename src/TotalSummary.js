import React from "react";
import { Button, Divider } from "semantic-ui-react";

function TotalSummary(props) {
  const { totalProductPrice, deliveryPrice } = props;

  return (
    <div className="total-summary">
      <div className="total-products">
        <div>Total des articles</div>
        <div>{totalProductPrice} €</div>
      </div>
      <Divider />
      <div className="shipping-cost">
        <div>Frais de livraison</div>
        <div>{deliveryPrice} €</div>
      </div>
      <Divider />
      <div className="total">
        <div>Total</div>
        <div>{totalProductPrice + deliveryPrice} €</div>
      </div>

      <Button>Valider mon panier</Button>
    </div>
  );
}

export default TotalSummary;
