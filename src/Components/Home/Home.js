import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }

  render() {
    return (
      <>
        <div className={"home-page-container"}>
          <div className={"home-page-second-container"}>
            <div style={{ fontWeight: 800, fontSize: 50 }}>
              Coding Openness -
              <br />
              <span style={{ color: "#6b9e1f" }}> Software Projekt</span>
            </div>
            <br />
            <div style={{ paddingTop: 20, fontSize: 20 }}>
              Das Ziel unseres Open-Source Softwareprojekt im Sommersemester
              2020 ist es, <br />
              uns an der Entwicklung der Corona-App zu beteiligen.
            </div>
          </div>
          <div className={"hcc-home"} style={{ fontSize: "medium" }}>
            <div className={"home-div"}>
              Die
              <Link className={"home-div-link"} to="/corona-warn-app">
                Corona-Warn-App
              </Link>
              ist seit Mitte Juni im Google und Apple Store zum Download bereit.
              Ihr Ziel ist es Infektionsketten in der Corona Pandemie zu
              frühzeitig zu erkennen und zu stoppen.
            </div>
            <div className={"home-div"}>
              Auf unserer Webseite stellen wir zusätzliche Informationen zu
              ihrer Funktionsweise zur Verfügung und dokumentieren außerdem
              <Link className={"home-div-link"} to="/team-beitraege">
                unsere Beiträge
              </Link>
              , die wir zur deutschen Corona-Warn-App geleistet haben.
            </div>
            <div className={"home-div"}>
              Außerdem führen wir im Rahmen des Softwareprojekts notwendige
              Befragungen durch und untersuchen die Tracing-App. Um die
              Perspektive von Nutzer|innen an einer solchen App zu
              berücksichtigen haben wir einen
              <Link className={"home-div-link"} to="/fragebogen">
                Fragebogen
              </Link>
              erstellt.
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
