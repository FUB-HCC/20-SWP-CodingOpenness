import React from "react";
import {Link} from "react-router-dom";

import "./BadRoute.css";

class BadRoute extends React.Component {
  render() {
    return (
    <>
      <div className={"kontakt-container"}>
        <div style={{ fontSize: 50, fontWeight: 800 }}>
          Page not available!
        </div>
        <div>
          <p>
            Back to
            <Link
              to={"/"}
              style={{ margin: 5, color: "#6b9e1f" }}
            >
            home page</Link>
            ?

          </p>
        </div>
      </div>
    </>);
  }
}
export default BadRoute;
