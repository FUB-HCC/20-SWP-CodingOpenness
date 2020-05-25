import React from "react";
import "./Kontakt.css";
import emailjs from 'emailjs-com';


function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmailtratond01', 'contact_form', e.target, 'user_jsdd62Zisg1rCwqroKZeF')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    
    alert("Thank you for your feedback!"); 
    document.getElementById("contact-form").reset();

}


class Kontakt extends React.Component {


  render() {
    return (
      <div>
        <div>
        <h1>Contact Us</h1>
        </div>

        <div class="intern">
          <p>Contact from inside the course, please create an new issue or edit an existing issue on our Github Issue page.
            <a
            href="https://github.com/FUB-HCC/20-SWP-CodingOpenness/issues"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img
              className="img-responsive"
              src={
                "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              }
              alt="Github Link"
            />
            </a>
          </p>
            
        </div>

        <div class="info">
          <p>For contact from outside, please fill out the following form.<br />
          <br />
          Your input will either be reflected on our website in due course, or we will soon get in contact with you using the provided email.<br />
          <br />
          You can also view our Issue page for existing work in progress. 
          <a
          href="https://github.com/FUB-HCC/20-SWP-CodingOpenness/issues"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img
            className="img-responsive"
            src={
              "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            }
            alt="Github Link"
          />
          </a>
          
          </p>

        </div>

        <div className="formular">
          <form className="contact-form" id="contact-form" onSubmit={sendEmail}>

            <input type="hidden" name="contact_number" />

            <label>Name</label>
            <input type="text" name="user_name" />

            <label>Email</label>
            <input type="email" name="user_email" />

            <label>Message</label>
            <textarea name="message" placeholder="Please describe your or issue in detail, and reference to the page and piece of information in question"/>

            <input type="submit" value="Send" />

          </form>
        </div>

        <div>
          
        </div>


      </div>
    );
  }

}

export default Kontakt;
