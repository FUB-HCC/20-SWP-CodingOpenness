import VergleichMarkdown from "../../Markdown/Vergleich.md";
import React from "react";
import Markdown from "markdown-to-jsx";

class Vergleich extends React.Component {
  state = {
    markdown: "",
  };

  async componentDidMount() {
    const response = await fetch(VergleichMarkdown);
    const markdown = await response.text();
    this.setState({ markdown });
  }

  render() {
    return (
      <div style={{ padding: "70px 30px" }}>
        <Markdown children={this.state.markdown} />
      </div>
    );
  }
}
export default Vergleich;
