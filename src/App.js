import React from "react";
import history from "./history";
import { Route, Switch } from "react-router-dom";

import NavBarTextButton from "./Components/Layout/NavBarTextButton";
import NavBarImgButton from "./Components/Layout/NavBarImgButton";

import Home from "./Components/Home/Home";
import Ansaetze from "./Components/Ansaetze/Ansaetze";
import About from "./Components/About/About";
import Kontakt from "./Components/Kontakt/Kontakt";
import Vergleich from "./Components/Vergleich/Vergleich";
import Fragebogen from "./Components/Fragebogen/Fragebogen";

import { Navbar, Button } from "@blueprintjs/core";
import "./App.css";
import Footer from "./Components/Footer/Footer";

//content values are used as the URLs for routing
export const Content = {
  BAD: "bad_path",

  HOME: "/",
  ABOUT: "/about",
  ANSAETZE: "/approaches",
  VERGLEICH: "/comparison",
  KONTAKT: "/contact",
  FRAGENBOGEN: "/fragebogen",
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
      <>
        <Navbar id={"navbar-menu"} className={"navbar-menu"} fixedToTop>
          <Navbar.Group
            style={{
              height: "inherit",
              width: "inherit",
              placeContent: "space-between",
            }}
          >
            <NavBarImgButton 
              name="Coding Openness"
              content={Content.HOME}
              activeContent={this.state.activeContent}
              imgName="hcc-logo-white.png"
            />

            <div className={"menu-button-group"}>
              <NavBarTextButton 
                name="Ansätze"
                content={Content.ANSAETZE}
                activeContent={this.state.activeContent}
              />
              <NavBarTextButton
                name="Vergleich der Ansätze"
                content={Content.VERGLEICH}
                activeContent={this.state.activeContent}
              />
              <NavBarTextButton
                name="Fragebogen"
                content={Content.FRAGENBOGEN}
                activeContent={this.state.activeContent}
              />
              <NavBarTextButton
                name="Über uns"
                content={Content.ABOUT}
                activeContent={this.state.activeContent}
              />
              <NavBarTextButton
                name="Kontak"
                content={Content.KONTAKT}
                activeContent={this.state.activeContent}
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
          <Route path={Content.FRAGENBOGEN} exact>
            <Fragebogen
              handleNavbarClick={() =>
                this.setState({ activeContent: Content.FRAGENBOGEN })
              }
            />
          </Route>
          <Route>
            {/* BAD ROUTE */}
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
