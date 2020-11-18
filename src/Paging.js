import React from "react";
import { Pagination } from "semantic-ui-react";
import "./App.css";

function Paging() {
  return (
    <div className="paging">
      <Pagination defaultActivePage={1} totalPages={5} />
    </div>
  );
}

export default Paging;
