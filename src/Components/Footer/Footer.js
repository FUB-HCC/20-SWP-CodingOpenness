import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Divider } from "@blueprintjs/core";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <Divider
            style={{
              margin: 0,
              padding: 3,
              backgroundColor: "#6b9e1f",
            }}
          />
          <div style={{ display: "flex", height: 5 }}>
            <div className="footer-content">
              <a
                href="https://github.com/FUB-HCC/20-SWP-CodingOpenness"
                target="Github Repository"
              >
                <span>{"GitHub"}</span>
              </a>
            </div>
            <div className="footer-content">
              <Link to="/about">
                <span>{"About"}</span>
              </Link>
            </div>
            <div className="footer-content">
              <Link to="/contact">
                <span>{"Contact"}</span>
              </Link>
            </div>
          </div>
          <div className="footer-logo">
            <img src={require("../../Assets/fub.png")} alt={"fu-berlin-logo"} />
          </div>
          <div className="footer-text">
            © 2020 - Human-Centered Computing - FU Berlin
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
