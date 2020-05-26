import React from "react";
import "./Kontakt.css";
import { Button } from "@blueprintjs/core";

class Kontakt extends React.Component {
  getInfoButton = () => (
    <a
      href="https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button small minimal icon={"info-sign"} />
    </a>
  );

  render() {
    return (
      <div
        style={{
          paddignBottom: 20,
        }}
      >
        <h3 style={{ textDecoration: "underline" }}>Kontakt:</h3>
        <br />
        <p style={{ fontWeight: 800 }}>
          {"Wir würden uns über Rückmeldungen von Ihnen freuen."}
        </p>
        <br />
        <p>
          {`Falls Sie Fragen, Anmerkungen oder Ergänzungen bezüglich unserer Website
        haben, freuen wir uns sehr über eine Rückmeldung von Ihnen.`}
        </p>
        <p>
          {`Erstellen Sie dafür einfach ein Issue in unserem Github-Repository: `}
          <a
            href="https://github.com/FUB-HCC/20-SWP-CodingOpenness/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            20-SWP-CodingOpenness
          </a>
        </p>
        <p>
          {`Benötigen Sie Hilfe diesbezüglich, finden Sie unter `}
          <a
            href="https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue
          </a>

          {` eine anschauliche Anleitung.`}
        </p>
      </div>
    );
  }
}

export default Kontakt;
