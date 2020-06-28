import React from "react";
import "./TeamContribution.css";
import { Link } from "react-router-dom";

class TeamContribution extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }
  render() {
    return (
      <>
        <div className={"contribution-container"}>
          <div className={"contribution-intro"}>
            <div style={{ fontSize: 50, fontWeight: 800 }}>
              <span style={{ color: "#6b9e1f" }}>Beiträge</span> zur
              Corona-Warn-App
            </div>
            <div>
              <p>
                Beiträge der Lehrveranstaltungsteilnehmer|innen zur
                Corona-Warn-App sind hier dokumentiert.
              </p>
              <p>
                Um auf die entsprechende Github-Seite zu kommen, folgen Sie
                bitte den Links. Weitere Informationen zur entsprechenden Person
                finden Sie unter
                <Link className={"contri-about-link"} to={"/about"}>
                  Über Uns.
                </Link>
              </p>
            </div>
          </div>

          <div className={"contribution-list"}>
            <div className="boxed">
              <div className="boxhead">
                <p>
                  <a
                    className="fragebogen-link"
                    href="https://github.com/corona-warn-app/cwa-app-android/issues/381"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contribution to the Packages Wiki Page
                  </a>
                  <br /> by Julius Brose
                </p>
              </div>
              <div>
                <p>
                  Makes it easier for people new to the project/code to find the
                  critical files quickly and gain an understanding of how things
                  work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TeamContribution;
