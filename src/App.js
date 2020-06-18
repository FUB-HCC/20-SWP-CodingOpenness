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
import BadRoute from "./Components/BadRoute/BadRoute";

import { Navbar } from "@blueprintjs/core";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import TeamContribution from "./Components/TeamContribution/TeamContribution";
import CoronaWarnApp from "./Components/CoronaWarnApp/CoronaWarnApp";

// content values are used as the URLs for routing
export const Content = {
  BAD: "bad_path",

  HOME: "/",
  ABOUT: "/about",
  ANSAETZE: "/approaches",
  VERGLEICH: "/comparison",
  KONTAKT: "/contact",
  FRAGENBOGEN: "/fragebogen",
  CORONA_WARN_APP: "/corona-warn-app",
  TEAM_CONTRIBUTION: "/team-beitraege",
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
                name="Corona-Warn-App"
                content={Content.CORONA_WARN_APP}
                activeContent={this.state.activeContent}
              />
              <NavBarTextButton
                name="Team Beiträge"
                content={Content.TEAM_CONTRIBUTION}
                activeContent={this.state.activeContent}
              />
              <NavBarTextButton
                name="Ansätze"
                content={Content.ANSAETZE}
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
                name="Kontakt"
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
          <Route path={Content.TEAM_CONTRIBUTION} exact>
            <TeamContribution
              handleNavbarClick={() =>
                this.setState({ activeContent: Content.TEAM_CONTRIBUTION })
              }
            />
          </Route>
          <Route path={Content.CORONA_WARN_APP} exact>
            <CoronaWarnApp
              handleNavbarClick={() =>
                this.setState({ activeContent: Content.CORONA_WARN_APP })
              }
            />
          </Route>
          <Route>
            <BadRoute />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
