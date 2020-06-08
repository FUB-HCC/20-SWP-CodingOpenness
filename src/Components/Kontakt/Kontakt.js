import React from "react";
import "./Kontakt.css";
import Footer from "../Footer/Footer";

class Kontakt extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }

  render() {
    return (
      <>
        <div className={"kontakt-container"}>
          <div style={{ fontSize: 50, fontWeight: 800 }}>
            Treten Sie in Kontakt mit uns
          </div>
          <div>
            <p>
              {`Falls Sie Fragen, Anmerkungen oder Ergänzungen bezüglich unserer Website
        haben, freuen wir uns sehr über eine Rückmeldung von Ihnen.`}
            </p>
            <p>
              {`Erstellen Sie dafür einfach ein Issue in unserem Github-Repository: `}
              <a
                className={"kontakt-links"}
                href="https://github.com/FUB-HCC/20-SWP-CodingOpenness/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                20-SWP-CodingOpenness
              </a>
            </p>
            <p>
              {`Benötigen Sie Hilfe diesbezüglich, finden Sie unter `}
              <a
                className={"kontakt-links"}
                href="https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue
              </a>

              {` eine anschauliche Anleitung.`}
            </p>
            <p style={{ paddingTop: 40 }}>
              {`Sie können uns auch per `}
              <a
                className={"kontakt-links"}
                target="_blank"
                rel="noopener noreferrer"
                href="mailto: clmb@inf.fu-berlin.de"
              >
                {`E-Mail `}
              </a>
              {`erreichen`}
            </p>
          </div>
        </div>
        <Footer position={"absolute"} />
      </>
    );
  }
}

export default Kontakt;
