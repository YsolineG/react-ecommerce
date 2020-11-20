import React from "react";
import { Button, Divider } from "semantic-ui-react";

function TotalSummary() {
  return (
    <div className="total-summary">
      <div className="total-products">Total des articles</div>
      <Divider />
      <div className="shipping-cost">Frais de livraison</div>
      <Divider />
      <div className="total">Total</div>
      <Button>Valider mon panier</Button>
    </div>
  );
}

export default TotalSummary;
