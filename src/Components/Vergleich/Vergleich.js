import VergleichMarkdown from "../../Markdown/Vergleich.md";
import DCTSMarkdown from "../../Markdown/Vergleich-DCTS.md";
import DP3TMarkdown from "../../Markdown/Vergleich-DP3T.md";
import PEPPPTMarkdown from "../../Markdown/Vergleich-PEPP-PT.md";
import AppleGoogleMarkdown from "../../Markdown/Vergleich-Apple-Google.md";
import CoronaWarnAppMarkdown from "../../Markdown/Vergleich-CoronaWarnApp.md";
import React from "react";
import Markdown from "markdown-to-jsx";
import { Navbar, Button, Alignment, Icon } from "@blueprintjs/core";

export const VergleichContent = {
  OVERVIEW: "VERGLEICH",
  PEPPPT: "PEPPPT",
  DP3T: "DP3T",
  DCTS: "DCTS",
  APPLEGOOGLE: "APPLEGOOGLE",
  CORONAWARNAPP: "CORONAWARNAPP",
};

class Vergleich extends React.Component {
  state = {
    markdown: "",
    activeContent: VergleichContent.OVERVIEW,
  };

  handleNavbarClick = (activeContent) => {
    this.updateMarkdown(activeContent);
    this.setState({ activeContent });
  };
 
  getImportForContent = (content) => {
    if (content === VergleichContent.OVERVIEW) {
      return VergleichMarkdown;
    }
    if (content === VergleichContent.PEPPPT) {
      return PEPPPTMarkdown;
    }
    if (content === VergleichContent.DP3T) {
      return DP3TMarkdown;
    }
    if (content === VergleichContent.DCTS) {
      return DCTSMarkdown;
    }
    if (content === VergleichContent.APPLEGOOGLE) {
      return AppleGoogleMarkdown;
    }
    if (content === VergleichContent.CORONAWARNAPP) {
      return CoronaWarnAppMarkdown;
    }
    return VergleichMarkdown;
  }

  async componentDidMount() {
    await this.updateMarkdown(VergleichContent.OVERVIEW);
  }

  async updateMarkdown(content) {
    const response = await fetch(this.getImportForContent(content));
    const markdown = await response.text();
    this.setState({ markdown });
  }

  render() {
    return (
      <div style={{ padding: 30 }}>
        <div class="topnav" id="topnav">
          <Button
              className="bp3-minimal navbar-button navbar-button-content"
              text={"Überblick"}
              active={this.state.activeContent === VergleichContent.OVERVIEW}
              onClick={() => this.handleNavbarClick(VergleichContent.OVERVIEW)}
            />
            <Button
              className="bp3-minimal navbar-button navbar-button-content"
              text={"Google/Apple"}
              active={this.state.activeContent === VergleichContent.APPLEGOOGLE}
              onClick={() => this.handleNavbarClick(VergleichContent.APPLEGOOGLE)}
            />
            <Button
              className="bp3-minimal navbar-button navbar-button-content"
              text="DP3T"
              active={this.state.activeContent === VergleichContent.DP3T}
              onClick={() => this.handleNavbarClick(VergleichContent.DP3T)}
            />
            <Button
              className="bp3-minimal navbar-button navbar-button-content"
              text={"PEPP-PT"}
              active={this.state.activeContent === VergleichContent.PEPPPT}
              onClick={() => this.handleNavbarClick(VergleichContent.PEPPPT)}
            />
            <Button
              className="bp3-minimal navbar-button navbar-button-content"
              text="DCTS"
              active={this.state.activeContent === VergleichContent.DCTS}
              onClick={() => this.handleNavbarClick(VergleichContent.DCTS)}
            />
            <Button
              className="bp3-minimal navbar-button navbar-button-content"
              text="CoronaWarnApp"
              active={this.state.activeContent === VergleichContent.CORONAWARNAPP}
              onClick={() => this.handleNavbarClick(VergleichContent.CORONAWARNAPP)}
            />
        </div>

        <Markdown children={this.state.markdown} />
      </div>
    );
  }
}
export default Vergleich;
