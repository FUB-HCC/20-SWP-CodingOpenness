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


      </div>
    </div>
    );
  }
}
export default CoronaWarnApp;
