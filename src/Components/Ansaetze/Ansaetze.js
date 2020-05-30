import React from "react";
import "./Ansaetze.css";
import { Button } from "@blueprintjs/core";

class Ansaetze extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: 70 }}>
        <div class="topnav" id="topnav">
          <a href="#PEPP-PT">PEPP-PT</a>
          <a href="#DP-3T">DP-3T</a>
          <a href="#DCTS">DCTS</a>
        </div>

        <div class="PEPP-PT" id="PEPP-PT">
          <h2>PEPP-PT</h2>

          <div class="paragraph">
            <div className={"project-title"}>
              <h3>Pan European Privacy Preserving Proximity Tracing</h3>
            </div>

            <p>
              PEPP-PT ist eine Organisation, die in der Schweiz als
              gemeinnützige Organisation gegründet wurde, um eine Lösung zu
              finden, die sich an europäische Gesetze und Grundsätze zum Schutz
              der Privatsphäre und des Datenschutzes hält. Das PEPP-PT-Team, das
              am 31. März 2020 mehr als 130 Mitglieder in acht europäischen
              Ländern zählt.
            </p>
            <a
              href="https://github.com/pepp-pt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingLeft: 25, display: "flex", alignItems: "center" }}
            >
              <img
                className="img-responsive"
                src={require("../../Assets/github.svg")}
                alt="Github Link"
              />
              PEPP-PT's GitHub Repository
            </a>
          </div>

          <div class="graphic">
            <div id="pepp-pt-diagram">
              <img
                style={{ width: "55%" }}
                class="diagram"
                src="https://user-images.githubusercontent.com/1636532/81082424-94087200-8ef3-11ea-8dc8-cc556f2705ea.png"
                alt="pepp-pt-diagram"
              />
            </div>
          </div>

          <Button
            style={{ marginLeft: 50 }}
            icon={"arrow-up"}
            minimal
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>

        <div class="DP-3T" id="DP-3T">
          <h2>DP-3T</h2>

          <div class="paragraph">
            <div className={"project-title"}>
              <h3>
                Decentralized Privacy Preserving Proximity Tracing protocol{" "}
              </h3>
            </div>

            <p>
              DP-3T ist ein Vorschlag für ein Sicherheit- und
              Privatsphäre-wahrendes System zum Proximity Tracing, das eine
              technologische Grundlage für die Verlangsamung der Ausbreitung des
              SARS-CoV-2-Virus schaffen soll, wenn es in großem Maßstab
              eingesetzt wird. Das Projekt wurde unter anderem von Forschern der
              École Polytechnique fédérale de Lausanne und der ETH Zürich ins
              Leben gerufen. Die Zielsetzung des Projektes ist es die
              Benachrichtigung von Nutzern, die mit Infizierten in Kontakt
              gekommen sind, zu vereinfachen und beschleunigen. Dieses System
              bietet eine Lösung zur Wahrung der Privatsphäre und Sicherheit für
              Einzelpersonen und Gemeinschaften, indem es ein Höchstmaß an
              Datenschutz gewährleistet.
            </p>

            <a
              href="https://github.com/DP-3T"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingLeft: 25, display: "flex", alignItems: "center" }}
            >
              <img
                className="img-responsive"
                src={require("../../Assets/github.svg")}
                alt="Github Link"
              />
              DP-3T's GitHub Repository
            </a>
          </div>

          <div class="graphic">
            <div id="dp-3t-diagram">
              <img
                class="diagram"
                src={require("../../Assets/a.png")}
                alt="dp-3t-diagram"
              />
            </div>
          </div>

          <Button
            style={{ marginLeft: 50 }}
            icon={"arrow-up"}
            minimal
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>

        <div class="DCTS" id="DCTS">
          <h2>DCTS</h2>

          <div class="paragraph">
            <div className={"project-title"}>
              <h3>Digital Contact Tracing Service</h3>
            </div>
            <p>Kontaktverfolgungsdienst von der TU München.</p>
          </div>

          <div class="graphic">
            <div id="dp-3t-diagram">
              <img
                class="diagram"
                src="https://user-images.githubusercontent.com/4459428/80650567-87f45e80-8a74-11ea-950a-8a833e935226.png"
                alt="dp-3t-diagram"
              />
            </div>
          </div>

          <Button
            style={{ marginLeft: 50 }}
            icon={"arrow-up"}
            minimal
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>
      </div>
    );
  }
}

export default Ansaetze;
