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
            <p>
              Die Corona-App kann nur ein Baustein von einer Vielzahl
              Ma&szlig;nahmen sein, mit dem wir versuchen, die
              SARS-CoV-2-Epidemie einzud&auml;mmen. Leider gibt es nicht
              &quot;die Corona-App&quot;, sondern eine Vielzahl
              unterschiedlicher, teilweise konfligierende Ans&auml;tze, daher
              ist zun&auml;chst unsere Aufgabe, diese Ans&auml;tze zu
              identifizieren, zu vergleichen und zu bewerten.
            </p>
            <p>
              In dem Softwareprojekt wollen wir uns vor allem auf
              Erklärungsmechanismen fokussieren. Das primäre Ziel besteht darin,
              dass Bürger|innen vom App-Betreiber|innen genügend Informationen
              erhalten, um die Ursachen eines Ereignisses oder einer
              Entscheidung zu verstehen.
            </p>
            <p>Wir fokussieren uns vor allem auf Vorschläge aus Deutschland:</p>
            <div className={"home-ansaetze-list"}>
              <ul>
                <li>
                  Pan European Privacy Preserving Proximity Tracing -
                  <Link className={"ansatz-link"} to={"/approaches#PEPP-PT"}>
                    PEPP-PT
                  </Link>
                </li>
                <li>
                  Decentralized Privacy Preserving Proximity Tracing protocol -
                  <Link className={"ansatz-link"} to={"/approaches#DP-3T"}>
                    DP3T
                  </Link>
                </li>
                <li>
                  Digital Contact Tracing Service -
                  <Link className={"ansatz-link"} to={"/approaches#DCTS"}>
                    DCTS
                  </Link>
                </li>
              </ul>
            </div>
            <div className={"home-fragebogen"}>
              Außerdem führen wir im Rahmen des Softwareprojekts notwendige
              Befragungen durch und untersuchen die Tracing-App. Um die
              Perspektive von Nutzer|innen an einer solchen App zu
              berücksichtigen haben wir einen
              <Link className={"home-fragebogen-link"} to="/fragebogen">
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
