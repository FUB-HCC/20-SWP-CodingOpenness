import React from "react";
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
      <div style={{ fontSize: 50, fontWeight: 800 }}>

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
    </div>
    );
  }
}
export default CoronaWarnApp;
