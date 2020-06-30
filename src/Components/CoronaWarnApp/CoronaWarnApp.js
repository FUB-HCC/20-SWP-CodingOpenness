import React from "react";
import { Link } from "react-router-dom";
import "./CoronaWarnApp.css";

class CoronaWarnApp extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }
  render() {
    return (
      <>
        <div className={"page-container"}>
          <div style={{ fontSize: 50, fontWeight: 800 }}>
            <img
              className="page-title-img"
              src={require("../../Assets/corona_warn_app_title_img.png")}
              alt="corona_warn_app_title_img"
            />
          </div>
          <div>
            <p>
              Die Architektur der offiziellen Corona-Warn-App basiert auf der
              <Link className="corona-link" to="/approaches#DP-3T">
                DP-3T Architektur
              </Link>
              . Jede App speichert gesendete und empfangene IDs nur lokal und
              überträgt nur im Falle eines positiven Tests und Einwilligung des
              Users auf einen Server.
              <br />
              Die IDs werden von einem täglich wechselnden Temporary Exposure
              Key abgeleitet. Die App downloadet regelmäßig die auf dem Server
              gespeicherten Keys um lokal das Risiko des Users zu berechnen und
              ihn ggf. zu informieren.
            </p>

            <p>
              Die Corona-Warn-App ist seit Mitte Juni im Google und Apple Store
              zum Download bereit.
              <br />
              Mehr Details über die Funktionalität der Corona-Warn-App befinden
              sich auf ihrer
              <a
                className={"corona-link"}
                href="https://www.coronawarn.app/de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Webseite
              </a>
              .
            </p>

            <p>
              <a
                href="https://github.com/corona-warn-app"
                target="_blank"
                rel="noopener noreferrer"
                className={"github-link"}
              >
                <img
                  className="img-responsive"
                  src={require("../../Assets/github.svg")}
                  alt="Corona-Warn-AppGithub Link"
                />
                Corona-Warn-App's GitHub Repositories
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default CoronaWarnApp;
