import React from "react";
import "./TeamContribution.css";

class TeamContribution extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }
  render() {
    return <>hey</>;
  }
}
export default TeamContribution;
