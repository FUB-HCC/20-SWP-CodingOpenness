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
      className={"bp3-minimal navbar-button hcc-button"}
      active={props.activeContent === props.content}
      onClick={handleClick}
    >
      <img
        className={"menu-hcc-logo"}
        alt="hcc"
        src={require(`../../Assets/${props.imgName}`)}
      />
      {props.name}
    </Button>
  );
}

export default NavBarTextButton;