import React from "react";
import GithubAPI from "../API/GithubAPI";

import { Icon } from "@blueprintjs/core";
import "./About.css";

const REPO_ID = 254040556;

class About extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }

  getSum = (lastSum, json) => {
    return (
      lastSum !== undefined
        ? lastSum 
        : 0)
      + json.length;
  };

  getRepoWatchers = (lastStars, json) => {
    return this.getRepoCountStats(lastStars, json, "watchers_count")
  }

  getRepoStars = (lastStars, json) => {
    return this.getRepoCountStats(lastStars, json, "stargazers_count")
  }

  getRepoCountStats = (lastCount, json, type) => {
    for(let key in json)
    {
      if(json[key]["id"] === REPO_ID)
      {
        return json[key][type];
      }
    }

    return lastCount !== undefined ? lastCount : 0;

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
          <div className={"about-first-container"}>
            <div className={"about-first-main"}>
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

            <div className={"about-first-main-stats"}>
              <br />
              <br />
              <br />
              <div className="abschnitt">
                <a
                  href="https://github.com/FUB-HCC/20-SWP-CodingOpenness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"github-repo"}
                >
                  <img
                    className="img-responsive"
                    src={require("../../Assets/github.svg")}
                    alt="20-SWP-CodingOpenness Repo"
                  />
                  20-SWP-CodingOpenness
                </a>
              </div>

              <div className="abschnitt">
                <GithubAPI 
                repoFetch={false}
                subLink='repos?'
                title="Stars"
                parseFunction={this.getRepoStars} />

                <GithubAPI 
                repoFetch={true}
                subLink='contributors?' 
                title="Contributors"
                parseFunction={this.getSum} />

                <GithubAPI 
                repoFetch={true}
                subLink='commits?'
                title="Commits (master)"
                parseFunction={this.getSum} />

                <GithubAPI 
                repoFetch={true}
                subLink='commits?sha=website/master'
                title="Commits (website/master)"
                parseFunction={this.getSum} />
              </div>

            </div>


          </div>
          <div className={"about-second-container"}>
            <div className={"about-second-main"}>
              <div className="abschnitt">
                {this.getGroupMemberList([
                  {
                    name: "Oussama Bouanani",
                    groups: "Team Webseite, DP-3T",
                    githubLink: "OussamaBouanani",
                  },
                  {
                    name: "Johannes Brose",
                    groups: "Team Technik, PEPP-PT, Corona-Warn-App: UI Design",
                    githubLink: "JohBrose",
                  },
                  {
                    name: "Julius Brose",
                    groups:
                      "Team Technik, DCTS, Corona-Warn-App: Risk of Infection",
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
                    groups:
                      "Team Vergleich, Team Fragebogen, DCTS, Corona Warn App: Data Privacy Information",
                    githubLink: "erdanf",
                  },
                  {
                    name: "Linus Helfmann",
                    groups:
                      "Team Vergleich, Team Fragebogen, PEPP-PT, Corona Warn App: Data Privacy Information",
                    githubLink: "linuxhelf",
                  },
                  {
                    name: "Long Dang Pham Hoang",
                    groups:
                      "Team Technik, PEPP-PT, Corona-Warn-App: Risk of Infection",
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
            </div>

            <div className={"about-second-main"}>
              <div className="abschnitt">
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
                    groups: "Team Technik, DP-3T, Corona-Warn-App: UI Design",
                    githubLink: "dennisn00",
                  },
                  {
                    name: "David Paulini",
                    groups: "Team Fragebogen, PEPP-PT",
                    githubLink: "pada1015",
                  },
                  {
                    name: "Bernd Sahre",
                    groups: "Team Vergleich, Team Fragebogen, DCTS",
                    githubLink: "bernd961",
                  },
                  {
                    name: "Felix Sekul",
                    groups:
                      "Team Fragebogen, PEPP-PT, Corona-Warn-App: Exposure Logging, Data Privacy Information",
                    githubLink: "molpremotone",
                  },
                  {
                    name: "Ingrid Tchilibou",
                    groups:
                      "Team Fragebogen, PEPP-PT, Corona-Warn-App: Exposure Logging",
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
                      "Team Vergleich, Team Fragebogen, DP-3T, Corona-Warn-App: Data Privacy Information",
                    githubLink: "julizet",
                  },
                ])}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default About;
