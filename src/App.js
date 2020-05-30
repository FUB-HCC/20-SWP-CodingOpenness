import React from "react";
import Home from "./Components/Home/Home";
import Ansaetze from "./Components/Ansaetze/Ansaetze";
import About from "./Components/About/About";
import Kontakt from "./Components/Kontakt/Kontakt";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import "./App.css";
import Vergleich from "./Components/Vergleich/Vergleich";

export const Content = {
  HOME: "HOME",
  ABOUT: "ABOUT",
  ANSAETZE: "ANSAETZE",
  VERGLEICH: "VERGLEICH",
  KONTAKT: "KONTAKT",
};

class App extends React.Component {
  state = {
    activeContent: Content.HOME,
  };

  handleNavbarClick = (activeContent) => this.setState({ activeContent });

  render() {
    return (
      <>
        <Navbar id={"navbar-menu"} className={"navbar-menu"} fixedToTop>
          <Navbar.Group
            style={{
              height: "inherit",
              width: "inherit",
              placeContent: "space-between",
            }}
            align={Alignment.RIGHT}
          >
            <Button
              className={"bp3-minimal navbar-button hcc-button"}
              active={this.state.activeContent === Content.HOME}
              onClick={() => this.handleNavbarClick(Content.HOME)}
            >
              <img
                alt="hcc"
                style={{ width: 17, marginRight: 10 }}
                src={require("./Assets/hcc-logo-white.png")}
              />
              {"Coding Openness"}
            </Button>
            <div>
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
        <div>
          {this.state.activeContent === Content.HOME && (
            <Home
              moveToAnsaetze={() => this.handleNavbarClick(Content.ANSAETZE)}
            />
          )}
          {this.state.activeContent === Content.ANSAETZE && <Ansaetze />}
          {this.state.activeContent === Content.VERGLEICH && <Vergleich />}
          {this.state.activeContent === Content.ABOUT && <About />}
          {this.state.activeContent === Content.KONTAKT && <Kontakt />}
        </div>
      </>
    );
  }
}

export default App;
