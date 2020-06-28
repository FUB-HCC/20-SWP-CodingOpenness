import React from "react";
import { Icon } from "@blueprintjs/core";
import "./About.css";

class About extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }

  getMember(link, name, groups) {
    return (
      <>
        <a
          className={"about-link"}
          href={`https://github.com/${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <span>{` - ${groups}`}</span>
      </>
    );
  }

  getGroupMemberList(members) {
    return members.map((member) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Icon iconSize={10} icon={"minus"} />
        {this.getMember(member.githubLink, member.name, member.groups)}
      </div>
    ));
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
                Wer sind <span style={{ color: "#6b9e1f" }}>wir</span>
              </div>

              <div className={"abschnitt"}>
                {`Wir sind Studierende am`}
                <a
                  className={"about-inst-link"}
                  href={`https://www.mi.fu-berlin.de/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Institut für Informatik an der Freien Universität Berlin
                </a>
                {`und beschäftigen uns im Modul Softwareprojekt - Coding Openness 
                mit der deutschen Corona App.`}
              </div>

              <div className={"abschnitt"}>
                {`Die Beiträge jeder Person werden aufgelistet und jeweils  
                die persönliche Github-Seite verlinkt.`}
              </div>

              <div className={"abschnitt"}>
                {`Letztlich besteht das Vorhaben, die deutsche Corona App zu installieren 
                und zu erweitern.`}
              </div>
            </div>
          </div>
          <div className={"about-member-container"}>
            <div>
              {this.getGroupMemberList([
                {
                  name: "Oussama Bouanani",
                  groups: "Team Webseite, DP-3T",
                  githubLink: "OussamaBouanani",
                },
                {
                  name: "Johannes Brose",
                  groups: "Team Technik, PEPP-PT",
                  githubLink: "JohBrose",
                },
                {
                  name: "Julius Brose",
                  groups: "Team Technik, DCTS, Corona-Warn-App: Risk",
                  githubLink: "JuliusBro",
                },
                {
                  name: "Keno Wilhelm Budde",
                  groups: "Team Organisation, DP-3T",
                  githubLink: "Clearwood",
                },
                {
                  name: "Son Tung Duong",
                  groups: "Team Webseite, DP-3T",
                  githubLink: "sontungg",
                },
                {
                  name: "Claas Fandre",
                  groups: "Team Vergleich, DCTS, Corona Warn App: Data Privacy",
                  githubLink: "erdanf",
                },
                {
                  name: "Linus Helfmann",
                  groups:
                    "Team Vergleich, PEPP-PT, Corona Warn App: Data Privacy",
                  githubLink: "linuxhelf",
                },
                {
                  name: "Long Dang Pham Hoang",
                  groups: "Team Technik, PEPP-PT, Corona Warn App: Risk",
                  githubLink: "DPHLong",
                },
                {
                  name: "Omer Hod",
                  groups: "Team Webseite, DP-3T",
                  githubLink: "Hod04",
                },
                {
                  name: "Torben Knaak",
                  groups: "Team Fragebogen, DCTS",
                  githubLink: "eagle-seagull",
                },
              ])}
            </div>

            <div>
              {this.getGroupMemberList([
                {
                  name: "Viktoriya Kraleva",
                  groups: "Team Vergleich, PEPP-PT, Corona-Warn-App: UI Design",
                  githubLink: "kraleva",
                },
                {
                  name: "Adriana Pinto Diaz Luz",
                  groups: "Team Organisation, DP-3T",
                  githubLink: "adrianapintod",
                },
                {
                  name: "Dennis Nikolaus Natusch",
                  groups: "Team Technik, DP-3T",
                  githubLink: "dennisn00",
                },
                {
                  name: "David Paulini",
                  groups: "Team Fragebogen, PEPP-PT",
                  githubLink: "pada1015",
                },
                {
                  name: "Bernd Sahre",
                  groups: "Team Vergleich, DCTS",
                  githubLink: "bernd961",
                },
                {
                  name: "Felix Sekul",
                  groups: "Team Fragebogen, PEPP-PT",
                  githubLink: "molpremotone",
                },
                {
                  name: "Ingrid Tchilibou",
                  groups: "Team Fragebogen, PEPP-PT, Corona-Warn-App: Exposure",
                  githubLink: "gancia-kiss",
                },
                {
                  name: "Di Wang",
                  groups: "Team Webseite, PEPP-PT",
                  githubLink: "tratond01",
                },
                {
                  name: "Julia Zimmermann",
                  groups:
                    "Team Vergleich, DP-3T, Corona-Warn-App: Data Privacy",
                  githubLink: "julizet",
                },
              ])}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default About;
