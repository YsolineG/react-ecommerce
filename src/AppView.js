import React from "react";
import ProductsList from "./ProductsList.js";
import ProductsGrid from "./ProductsGrid.js";
import DropDown from "./DropDown.js";
import { Switch, Route, useHistory } from "react-router";
import Paging from "./Paging.js";

function AppView(props) {
  const { games } = props;

  const history = useHistory();

  const handleViewChanged = React.useCallback(
    (e, menu) => {
      history.push(`/${menu.options.find((o) => o.value === menu.value).text}`);
    },
    [history]
  );

  return (
    <div className="content">
      <DropDown onViewChanged={handleViewChanged} />
      <Switch>
        <Route path="/liste" render={() => <ProductsList games={games} />} />
        <Route path="/grille" render={() => <ProductsGrid games={games} />} />
      </Switch>
      <Paging />
    </div>
  );
}

export default AppView;
