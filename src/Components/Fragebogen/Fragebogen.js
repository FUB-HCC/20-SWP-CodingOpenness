import React from "react";
import "./Fragebogen.css";

class Fragebogen extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }
  render() {
    return (
      <>
        <div className={"fragebogen-container"}>
          <div style={{ fontSize: 50, fontWeight: 800 }}>
            Nehmen Sie an unserer
            <br className={"fragebogen-break"} />
            <span className={"fragebogen-umfrage-span"}>Umfrage</span> teil
          </div>
          <div>
            <p>
              Diese Umfrage wurde von Studierenden im Softwareprojekt Coding
              Openness: Open Source Software Development unter
              wissenschaftlicher Leitung von
              <a
                className={"about-inst-link"}
                href={"https://clmb.de"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. C. Müller-Birn
              </a>
              entwickelt.
            </p>
            <p>
              Das Ziel ist es, die Perspektive der potenziellen Nutzer|innen an
              einer solchen Corona Tracing App zu berücksichtigen und mehr über
              Ihre Sicht auf die App zu erhalten.
            </p>
            <p>Wir würden uns freuen, wenn Sie Teil unserer Umfrage werden.</p>
            <p>
              Unseren Arbeitsprozess zur Erstellung des Fragebogens haben wir in
              diesem
              <a
                className={"about-inst-link"}
                href="https://docs.google.com/document/d/1xE8mFtOHbUfDgn5mYqJlrYkR_ifVdNwq4jWIvNrXq4Y/edit#heading=h.pa46fv1rxmvq"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dokument
              </a>
              ausführlich beschrieben.
            </p>
            <a
              className={"fragebogen-link"}
              href="https://userpage.fu-berlin.de/~torbek32/umfrage/limesurvey/index.php/984297?lang=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link zu unserem Fragebogen
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default Fragebogen;
