import React from "react";
import { Icon } from "@blueprintjs/core";
import "./About.css";

class About extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }

  getGroupMemberList(members) {
    return members.map((member) => <li key={member}>{member}</li>);
  }
  render() {
    return (
      <>
        <div className={"about-container"}>
          <div className={"about-second-container"}>
            <div className={"about-main"}>
              <div
                style={{ fontSize: 50, fontWeight: 800 }}
                className={"abschnitt"}
              >
                Wer sind wir
              </div>
              <div className={"abschnitt"}>
                {`Wir sind Studenten am Institut für Informatik an der Freien Universität Berlin und beschäftigen uns im 
            Modul Softwareprojekt - Coding Openness mit der deutschen Corona App.`}
              </div>
              <div className={"abschnitt"}>
                {`Letztlich besteht die Hoffnung, dass wir die Möglichkeit erhalten, die deutsche Corona App zu installieren und 
              zu erweitern. Zur Umsetzung haben wir uns in Folgende Teams aufgeteilt.`}
              </div>
              <div className={"abschnitt"} style={{ fontWeight: 10 }}>
                <strong style={{ textDecoration: "underline" }}>
                  {"Links:"}
                </strong>
                <br />
                <div>
                  <a
                    style={{ margin: 5, color: "#6b9e1f" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/FUB-HCC/20-SWP-CodingOpenness"
                  >
                    <Icon icon="link" />
                    <span
                      style={{
                        fontWeight: 400,
                        color: "black",
                        paddingLeft: 2,
                      }}
                    >
                      {"20-SWP-CodingOpenness official GitHub Repository"}
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    style={{ margin: 5, color: "#6b9e1f" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.fu-berlin.de/campusleben/forschen/2020/200512-corona-interview-mueller-birn/index.html"
                  >
                    <Icon icon="link" />
                    <span
                      style={{
                        fontWeight: 400,
                        color: "black",
                        paddingLeft: 2,
                      }}
                    >
                      {
                        "Interview with Prof. Claudia Müller Birn on the tracing app"
                      }
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className={"team"}>
                <div className={"team-title"}>{"Team Technik"}</div>
                <ul>
                  {this.getGroupMemberList([
                    "Julius Brose",
                    "Long Dang Pham Hoang",
                    "Dennis Nikolaus Natusch",
                    "Johannes Brose",
                  ])}
                </ul>
                <div className={"team-title"}>{"Team Organisation"}</div>
                <ul>
                  {this.getGroupMemberList([
                    "Keno Wilhelm Budde",
                    "Adriana Pinto Diaz Luz",
                  ])}
                </ul>
              </div>
              <div className={"team"}>
                <div className={"team-title"}>{"Team Webseite"}</div>
                <ul>
                  {this.getGroupMemberList([
                    "Di Wang",
                    "Oussama Bouanani",
                    "Son Tung Duong",
                    "Omer Hod",
                  ])}
                </ul>
                <div className={"team-title"}>{"Team Fragebogen"}</div>
                <ul>
                  {this.getGroupMemberList([
                    "Ingrid Tchilibou",
                    "Felix Sekul",
                    "David Paulini",
                    "Torben Knaak",
                  ])}
                </ul>
              </div>
              <div className={"team"}>
                <div className={"team-title"}>{"Team Vergleich"}</div>
                <ul>
                  {this.getGroupMemberList([
                    "Claas Fandre",
                    "Linus Helfmann",
                    "Bernd Sahre",
                    "Viktoriya Kraleva",
                    "Julia Zimmermann",
                  ])}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default About;
