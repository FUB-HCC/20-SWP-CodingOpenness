import React from "react";
import Home from "./Components/Home/Home";
import Groups from "./Components/Groups/Groups";
import { Navbar, Button, Alignment, Icon } from "@blueprintjs/core";
import "./App.css";

export const Content = {
  HOME: "HOME",
  GROUPS: "GROUPS",
  PROTOCOLS: "PROTOCOLS",
};

class App extends React.Component {
  state = {
    activeContent: Content.HOME,
  };

  handleNavbarClick = (activeContent) => this.setState({ activeContent });

  render() {
    return (
      <>
        <div className={"top-view"}>
          <div className={"top-view-hcc"}>
            <img
              alt="hcc"
              style={{ width: 100 }}
              src={require("./Assets/HCC.jpeg")}
            />
            <div style={{ margin: 10 }}>
              <a
                style={{ margin: 5, color: "#6b9e1f" }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mi.fu-berlin.de/en/inf/groups/hcc/index.html"
              >
                <Icon icon="link" />
              </a>
              {"Human-Centered Computing @ FU Berlin"}
            </div>
          </div>
          <img
            style={{ padding: "20px 15px 15px 15px" }}
            alt="fu-logo"
            src={require("./Assets/fu-logo.png")}
          />
        </div>
        <div style={{ padding: "20px 20px 1px", backgroundColor: "#ddd" }} />
        <Navbar className={"navbar-menu"}>
          <Navbar.Group align={Alignment.LEFT}>
            <Button
              className={"bp3-minimal navbar-button hcc-button"}
              text={"Home"}
              icon={"home"}
              active={this.state.activeContent === Content.HOME}
              onClick={() => this.handleNavbarClick(Content.HOME)}
            />
            <Navbar.Divider style={{ height: 30 }} />
            <Button
              className="bp3-minimal navbar-button navbar-button-content"
              text={"Groups"}
              active={this.state.activeContent === Content.GROUPS}
              onClick={() => this.handleNavbarClick(Content.GROUPS)}
            />
            {/* <Button
              className="bp3-minimal navbar-button navbar-button-content"
              text="Meeting Protocols"
              active={this.state.activeContent === Content.PROTOCOLS}
              onClick={() => this.handleNavbarClick(Content.PROTOCOLS)}
            /> */}
          </Navbar.Group>
        </Navbar>
        <div>
          {this.state.activeContent === Content.HOME && <Home />}
          {this.state.activeContent === Content.GROUPS && <Groups />}
          {/* {this.state.activeContent === Content.PROTOCOLS && (
            <div>Meeting Protocol Page</div>
          )} */}
        </div>
      </>
    );
  }
}

export default App;
