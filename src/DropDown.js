import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import "./App.css";

const options = [
  { key: 1, text: "Liste", value: 1 },
  { key: 2, text: "Grille", value: 2 },
];

function DropDown(props) {
  const { onViewChanged } = props;

  React.useEffect(() => {
    onViewChanged(null, { options, value: 1 });
  }, []);

  return (
    <Menu secondary>
      <Menu.Menu position="right">
        <Dropdown
          text="Affichage"
          options={options}
          selection
          defaultValue={1}
          onChange={onViewChanged}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default DropDown;
