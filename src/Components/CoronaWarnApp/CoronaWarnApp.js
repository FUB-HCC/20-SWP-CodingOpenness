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
        <div
          style={{ backgroundColor: "#e8e8e8", paddingTop: 0 }}
          className={"page-container"}
        >
          <div className={"corona-abstand"} style={{ minWidth: "46%" }}>
            <p style={{ fontSize: 50, fontWeight: 800 }}>
              <span style={{ color: "#6b9e1f" }}>Data Privacy</span>
            </p>
            <p>
              {`Ein Problem der App ist die Darstellung der Datenschutzerklärung.
                Wie man diese besser gestalten kann, führen wir im Folgenden auf.`}
            </p>
          </div>

          <p
            className={"corona-abstand"}
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {`Die Datenschutzerklärung erscheint einmal zum Start der App und danach kann man sie über das Menu aufrufen. Doch sie ist nicht einladend gestaltet. Vielmehr muss man bis zur gesuchten Stelle sehr weit scrollen und auch dann noch viel Text durcharbeiten, der in "Juristendeutsch" geschrieben ist.

              Wir wollen erreichen, dass die Erklärung von mehr Nutzern verstanden wird, sodass diese Selbstbestimmt über die Instalation der App entscheiden können.
              Konret möchten wir eine bessere Darstellung des Textes, mithilfe von aufklappbaren Inhalten, Icons, Diagrammen und/oder Tabellen zu erarbeiten und diese in die Anroid App zu implementieren.

              Diese Mittel haben wir unter anderem aus`}
            <span
              style={{ fontStyle: "italic" }}
            >{`"Clarke, N., Furnell, S., Angulo, J., Fischer‐Hübner, S., Wästlund, E. and Pulls, T., 2012. Towards usable privacy policy display and management. Information Management & Computer Security".
            
            `}</span>
            {`Wir haben ein`}
            <a
              className={"about-inst-link"}
              href={"https://github.com/corona-warn-app/cwa-wishlist/issues/16"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Issue im offiziellen Repo
            </a>
            {`zum Thema Lesbarkeit der Datenschutzerklärung erstellt.`}
          </p>
        </div>
      </>
    );
  }
}
export default CoronaWarnApp;
