import React from "react";
import history from "./history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Components/Home/Home";
import Ansaetze from "./Components/Ansaetze/Ansaetze";
import About from "./Components/About/About";
import Kontakt from "./Components/Kontakt/Kontakt";
import Vergleich from "./Components/Vergleich/Vergleich";

import { Navbar, Button } from "@blueprintjs/core";
import "./App.css";

//content values are used as the URLs for routing
export const Content = {
  HOME: "/20-SWP-CodingOpenness",
  ABOUT: "/about",
  ANSAETZE: "/approaches",
  VERGLEICH: "/comparison",
  KONTAKT: "/contact",
};

class App extends React.Component {
  state = {
    activeContent: Content.HOME,
  };

  handleNavbarClick = (activeContent) => {
    this.setState({ activeContent });
    history.push(activeContent);
  };

  render() {
    return (
      <Router history={history}>
        <Navbar id={"navbar-menu"} className={"navbar-menu"} fixedToTop>
          <Navbar.Group
            style={{
              height: "inherit",
              width: "inherit",
              placeContent: "space-between",
            }}
          >
            <Button
              className={"bp3-minimal navbar-button hcc-button"}
              active={this.state.activeContent === Content.HOME}
              onClick={() => this.handleNavbarClick(Content.HOME)}
            >
              <img
                className={"menu-hcc-logo"}
                alt="hcc"
                src={require("./Assets/hcc-logo-white.png")}
              />
              {"Coding Openness"}
            </Button>
            <div className={"menu-button-group"}>
              <Button
                className="bp3-minimal navbar-button navbar-button-content"
                text={"Ansätze"}
                active={this.state.activeContent === Content.ANSAETZE}
                onClick={() => this.handleNavbarClick(Content.ANSAETZE)}
              />
              <Button
                className="bp3-minimal navbar-button navbar-button-content"
                text={"Vergleich der Ansätze"}
                active={this.state.activeContent === Content.VERGLEICH}
                onClick={() => this.handleNavbarClick(Content.VERGLEICH)}
              />
              <Button
                className="bp3-minimal navbar-button navbar-button-content"
                text="Über uns"
                active={this.state.activeContent === Content.ABOUT}
                onClick={() => this.handleNavbarClick(Content.ABOUT)}
              />
              <Button
                className="bp3-minimal navbar-button navbar-button-content"
                text="Kontakt"
                active={this.state.activeContent === Content.KONTAKT}
                onClick={() => this.handleNavbarClick(Content.KONTAKT)}
              />
            </div>
          </Navbar.Group>
        </Navbar>
        <Switch>
          <Route path={Content.HOME} exact>
            <Home
              handleNavbarClick={() =>
                this.setState({ activeContent: Content.HOME })
              }
            />
          </Route>
          <Route path={Content.ANSAETZE} exact>
            <Ansaetze
              handleNavbarClick={() =>
                this.setState({ activeContent: Content.ANSAETZE })
              }
            />
          </Route>
          <Route path={Content.VERGLEICH} exact>
            <Vergleich
              handleNavbarClick={() =>
                this.setState({ activeContent: Content.VERGLEICH })
              }
            />
          </Route>
          <Route path={Content.ABOUT} exact>
            <About
              handleNavbarClick={() =>
                this.setState({ activeContent: Content.ABOUT })
              }
            />
          </Route>
          <Route path={Content.KONTAKT} exact>
            <Kontakt
              handleNavbarClick={() =>
                this.setState({ activeContent: Content.KONTAKT })
              }
            />
          </Route>
          <Redirect from="/" to="/20-SWP-CodingOpenness" />
        </Switch>
      </Router>
    );
  }
}

export default App;
