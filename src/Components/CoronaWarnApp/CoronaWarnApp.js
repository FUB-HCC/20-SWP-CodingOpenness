import React from "react";
import {Link} from "react-router-dom";
import "./CoronaWarnApp.css";

class CoronaWarnApp extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }
  render() {
    return (
    <div className="page-container">

      <div className="intro">

        <img
          className="page-title-img"
          src={require("../../Assets/corona_warn_app_title_img.png")}
          alt="corona_warn_app_title_img"
        />

        <div className="download-img-row">
          <a href="https://play.google.com/store/apps/details?id=de.rki.coronawarnapp">
            <img
              className="download-img-column-left"
              src={require("../../Assets/play_store_img.png")}
              alt="corona_warn_app_play_store"
            />
          </a>
          <a href="https://apps.apple.com/de/app/corona-warn-app/id1512595757">
            <img
              className="download-img-column-right"
              src={require("../../Assets/app_store_img.png")}
              alt="corona_warn_app_app_store"
            />
          </a>
        </div>

      </div>

      <div className="description">
        <div className="paragraph">
          <p>
Die Architektur der offiziellen Corona-Warn-App basiert auf der <Link to="/approaches#DP-3T">DP-3T Architektur</Link>. Jede App speichert gesendete und empfangene IDs nur lokal und überträgt nur im Falle eines positiven Tests und Einwilligung des Users auf einen Server. Die IDs werden von einem täglich wechselnden Temporary Exposure Key abgeleitet. Die App downloadet regelmäßig die auf dem Server gespeicherten Keys um lokal das Risiko des Users zu berechnen und ihn ggf. zu informieren.
          </p>
        </div>
      </div>

      <div className="workflow">
        <div className="paragraph">

          <div className={"section-title"}>
            <h3 className="section-name">
              Wie funktioniert die App?
            </h3>
          </div>

          <p>
            Workflow and Flow-Chart go here.
          </p>
        </div>
      </div>


    </div>
    );
  }
}
export default CoronaWarnApp;
