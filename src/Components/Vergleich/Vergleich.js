import VergleichMarkdown from "../../Markdown/Vergleich.md";
import React from "react";
import Markdown from "markdown-to-jsx";
import "./Vergleich.css";

class Vergleich extends React.Component {
  state = {
    markdown: "",
  };

  async componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
    const response = await fetch(VergleichMarkdown);
    const markdown = await response.text();
    this.setState({ markdown });
  }

  render() {
    return (
      <div className={"vergleich-container"}>
        <Markdown children={this.state.markdown} />
      </div>
    );
  }
}
export default Vergleich;
