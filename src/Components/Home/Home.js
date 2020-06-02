import React from "react";
import "./Home.css";
import { Button } from "@blueprintjs/core";

class Home extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }

  render() {
    return (
      <>
        <div style={{ margin: "15% 15% 10% 15%", display: "flex" }}>
          <div style={{ width: "-webkit-fill-available" }}>
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
              Letztlich besteht die Hoffnung, dass wir im Sommersemester die
              M&ouml;glichkeit erhalten, die eine oder andere App zu
              installieren und zu erweitern.
            </p>
            <p>
              In dem Softwareprojekt wollen wir uns vor allem auf
              Erklärungsmechanismen fokussieren. Das primäre Ziel besteht darin,
              dass Bürger|innen vom App-Betreiber|innen genügend Informationen
              erhalten, um die Ursachen eines Ereignisses oder einer
              Entscheidung zu verstehen.
            </p>
            <p>
              Im Rahmen des Softwareprojekts fokussieren wir vor allem auf
              Vorschläge aus Deutschland:
            </p>
            <div style={{ paddingLeft: 40 }}>
              <ul>
                <li>
                  Pan European Privacy Preserving Proximity Tracing (PEPP-PT)
                </li>
                <li>
                  Decentralized Privacy Preserving Proximity Tracing protocol
                  (DP3T)
                </li>
                <li>Digital Contact Tracing Service (DCTS)</li>
              </ul>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", paddingLeft: 30 }}
            >
              Mehr Informationen Finden Sie
              <Button
                minimal
                intent={"success"}
                style={{ padding: 5 }}
                onClick={() => this.props.moveToAnsaetze()}
              >
                <div style={{ fontSize: "medium" }}>hier</div>
              </Button>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            style={{ marginRight: 30 }}
            src={require("../../Assets/fu-logo.png")}
            alt={"fu-logo"}
          />
        </div>
      </>
    );
  }
}

export default Home;
