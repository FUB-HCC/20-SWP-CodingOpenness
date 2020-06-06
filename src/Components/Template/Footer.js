import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends React.Component {

  render() {
    return (
      <>
        <div className="footer">
            <div className="footer-content">
                <a href="https://github.com/FUB-HCC/20-SWP-CodingOpenness" target="Github Repository">Github</a>
            </div>
            <div className="footer-content">
                <Link to="/contact">About</Link>
            </div>
            <div className="footer-content">
                <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-text">
                © 2020 - Human-Ceneterd Computing - FU Berlin
            </div>
            <div className="footer-logo">
            <img
                src={require("../../Assets/fu_berlin_logo.png")}
                alt={"fu-berlin-logo"}
            />
            </div>
        </div>
      </>
    );
  }
}

export default Footer;

