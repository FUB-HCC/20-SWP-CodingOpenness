import React from 'react';
import { useHistory } from "react-router-dom";

import "./NavBarButton.css";

import { Button } from "@blueprintjs/core";

function NavBarTextButton(props) {
  let history = useHistory();

  function handleClick() {
    history.push(props.content);
  }

  return (
    <Button
        className="bp3-minimal navbar-button navbar-button-content"
        text={props.name}
        active={props.activeContent === props.content}
        onClick={handleClick}
    />
  );
}

export default NavBarTextButton;