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
        <div  className={"contribution-container"}>
          <div className={"contribution-intro"}>
            <div style={{ fontSize: 50, fontWeight: 800 }}>
                  <span style={{ color: "#6b9e1f" }}>Beiträge</span> zur 
                  Corona-Warn-App
            </div>
            <div>
              <p>
                    Beiträge der Lehrveranstaltungsteilnehmer zur Corona-Warn-App 
                    sind hier dokumentiert.
              </p>
              <p>
                Für die entsprechende Github-Seite folgen Sie bitte den Links.
                Weitere Informationen zur entsprechenden Person finden Sie unter
                 <Link className={"contri-about-link"} to={"/about"}> Über Uns.</Link>
              </p>
            </div>
          </div>

          <div className={"contribution-list"}>
            
            <div class="boxed">
              <div class="boxhead">
                <p>
                  <a
                    href="https://github.com/corona-warn-app/cwa-app-android/issues/381"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contribution to the Packages Wiki Page
                  </a> <br/> by Julius Brose
                </p>
              </div>
              <div class="boxbody"> 
                <p>Makes it easier for people new to the project/code to find the 
                  critical files quickly and gain an understanding of how things 
                  work.</p>
                <p>
                  <a
                      href="https://github.com/corona-warn-app/cwa-app-android/wiki/5-Packages"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Updated package wiki.
                  </a>
                  <span style={{float: 'right'}}>
                    12-06-2020
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div class="end">
          </div>
        </div>
      </>
    );
  }
}

export default TeamContribution;
