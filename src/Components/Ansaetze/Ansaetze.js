import React from "react";
import "./Ansaetze.css";
import Footer from "../Footer/Footer";

class Ansaetze extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }

  render() {
    return (
      <>
        <div className={"ansaetze-container"}>
          <div className="topnav" id="topnav">
            <a href="#PEPP-PT">PEPP-PT</a>
            <a href="#DP-3T">DP-3T</a>
            <a href="#DCTS">DCTS</a>
          </div>

          <div className={"ansaetze-intro"}>
            <div style={{ fontSize: 50, fontWeight: 800 }}>
              <span style={{ color: "#6b9e1f" }}>Ansätze</span> der
              Corona-Tracing-App
            </div>
            <div>
              <p>
                Es gibt mittlerweile eine Vielzahl von Ansätzen, wie eine solche
                Corona-App umgesetzt werden kann.
              </p>
              <p>
                Nach Wochen der Diskussion scheint sich die Bundesregierung für
                den dezentralen Ansatz entschieden zu haben.
              </p>
              <p>
                Im Folgenden sehen Sie eine Auswahl der Ansätze für die
                Corona-App die wir recherchiert und technisch analysiert. Um
                ihre Funktionalitäten zu verstehen haben wir Diagramme zur
                Visualisierung erstellt. Hier unten finden Sie eine Übersicht
                der Ansätze angeschaut haben.
              </p>
              <div className={"ansaetze-vergleich"}>
                Einen detaillierten Vergleich der Ansätze finden Sie unter dem
                <a
                  className={"home-fragebogen-link"}
                  href="/comparison"
                  rel="noopener noreferrer"
                >
                  Vergleich der Ansätze Tab
                </a>
              </div>
            </div>
          </div>

          <div className="PEPP-PT" id="PEPP-PT">
            <h2>PEPP-PT</h2>

            <div className="paragraph">
              <div className={"project-title"}>
                <h3>Pan European Privacy Preserving Proximity Tracing</h3>
              </div>

              <p>
                PEPP-PT ist eine Organisation, die in der Schweiz als
                gemeinnützige Organisation gegründet wurde, um eine Lösung zu
                finden, die sich an europäische Gesetze und Grundsätze zum
                Schutz der Privatsphäre und des Datenschutzes hält. Das
                PEPP-PT-Team, das am 31. März 2020 mehr als 130 Mitglieder in
                acht europäischen Ländern zählt.
              </p>
              <a
                href="https://github.com/pepp-pt"
                target="_blank"
                rel="noopener noreferrer"
                className={"ansaetze-github-link"}
              >
                <img
                  className="img-responsive"
                  src={require("../../Assets/github.svg")}
                  alt="Github Link"
                />
                PEPP-PT's GitHub Repository
              </a>
            </div>

            <div className="graphic">
              <div id="pepp-pt-diagram">
                <img
                  className={"diagram pepp-pt-diagram"}
                  src={require("../../Assets/pepp-pt.png")}
                  alt="pepp-pt-diagram"
                />
              </div>
            </div>

            <div className="DP-3T" id="DP-3T">
              <h2>DP-3T</h2>

              <div className="paragraph">
                <div className={"project-title"}>
                  <h3>
                    Decentralized Privacy Preserving Proximity Tracing protocol{" "}
                  </h3>
                </div>

                <p>
                  DP-3T ist ein Vorschlag für ein Sicherheit- und
                  Privatsphäre-wahrendes System zum Proximity Tracing, das eine
                  technologische Grundlage für die Verlangsamung der Ausbreitung
                  des SARS-CoV-2-Virus schaffen soll, wenn es in großem Maßstab
                  eingesetzt wird. Das Projekt wurde unter anderem von Forschern
                  der École Polytechnique fédérale de Lausanne und der ETH
                  Zürich ins Leben gerufen. Die Zielsetzung des Projektes ist es
                  die Benachrichtigung von Nutzern, die mit Infizierten in
                  Kontakt gekommen sind, zu vereinfachen und beschleunigen.
                  Dieses System bietet eine Lösung zur Wahrung der Privatsphäre
                  und Sicherheit für Einzelpersonen und Gemeinschaften, indem es
                  ein Höchstmaß an Datenschutz gewährleistet.
                </p>

                <a
                  className={"ansaetze-github-link"}
                  href="https://github.com/DP-3T"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="img-responsive"
                    src={require("../../Assets/github.svg")}
                    alt="Github Link"
                  />
                  DP-3T's GitHub Repository
                </a>
              </div>

              <div className="graphic">
                <div id="dp-3t-diagram">
                  <img
                    className="diagram"
                    src={require("../../Assets/a.png")}
                    alt="dp-3t-diagram"
                  />
                </div>
              </div>
            </div>

            <div className="DCTS" id="DCTS">
              <h2>DCTS</h2>

              <div className="paragraph">
                <div className={"project-title"}>
                  <h3>Digital Contact Tracing Service</h3>
                </div>
                <p>Kontaktverfolgungsdienst von der TU München.</p>
              </div>

              <div className="graphic">
                <div id="dp-3t-diagram">
                  <img
                    className="diagram"
                    src={require("../../Assets/dcts.png")}
                    alt="dp-3t-diagram"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer position={"relative"} />
      </>
    );
  }
}

export default Ansaetze;
