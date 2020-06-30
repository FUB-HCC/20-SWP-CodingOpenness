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
                    href="https://github.com/corona-warn-app/cwa-wishlist/issues/16"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Improve Readability of Privacy Policy
                  </a>
                  <br /> by Julia Zimmermann, Class Fandre, Linus Helfmann
                </p>
              </div>
              <div>
                <p>
                  Make the the dry text of privacy policy more appealing in order to gain 
                  more transparency, trust and understanding from users. 
                </p>
              </div>
            </div>

            <div className="boxed">
              <div className="boxhead">
                <p>
                  <a
                    className="fragebogen-link"
                    href="https://github.com/corona-warn-app/cwa-app-android/pull/589"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fixed Formating in German Data Privacy Document
                  </a>
                  <br /> by Linus Helfmann
                </p>
              </div>
              <div>
                <p>
                  Fixes typos and use same html tag for headlines. See also<a
                    className="fragebogen-link"
                    href="https://github.com/corona-warn-app/cwa-app-android/issues/332"
                    target="_blank"
                    rel="noopener noreferrer"
                  >referenced issue</a>.
                </p>
              </div>
            </div>

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
