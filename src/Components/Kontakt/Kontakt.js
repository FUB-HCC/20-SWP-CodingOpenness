import React from "react";
import "./Kontakt.css";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    "gmailtratond01",
    "contact_form",
    e.target,
    "user_jsdd62Zisg1rCwqroKZeF"
  );

  alert("Thank you for your feedback!");
  document.getElementById("contact-form").reset();
}

class Kontakt extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }

  render() {
    return (
      <div style={{ padding: "70px 20px" }}>
        <h1 style={{ fontSize: 28 }}>Treten Sie in Kontakt mit uns</h1>
        <p>
          {`Falls Sie Fragen, Anmerkungen oder Ergänzungen bezüglich unserer Website
        haben, freuen wir uns sehr über eine Rückmeldung von Ihnen.`}
        </p>
        <p>
          {`Erstellen Sie dafür einfach ein Issue in unserem Github-Repository: `}
          <a
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
            href="https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue
          </a>

          {` eine anschauliche Anleitung.`}
        </p>
        <p style={{ paddingTop: 40 }}>
          {`Sie können uns auch per E-Mail über das folgende Formular erreichen.`}
        </p>
        <div className="formular">
          <form className="contact-form" id="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />

            <div>
              <label style={{ fontWeight: 700, paddingRight: 50 }}>Name</label>
              <input
                type="text"
                name="user_name"
                style={{ height: 20, width: 200 }}
              />
            </div>
            <div>
              <label style={{ fontWeight: 700, paddingRight: 50 }}>Email</label>
              <input
                type="email"
                name="user_email"
                style={{ height: 20, width: 200 }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <label style={{ fontWeight: 700, paddingRight: 25 }}>
                Nachricht
              </label>
              <textarea
                type="message"
                placeholder="Bitte beschreiben Sie Ihr Anlegen im Detail"
                style={{ height: 100, width: 500 }}
              />
            </div>

            <input style={{ marginTop: 20 }} type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default Kontakt;
