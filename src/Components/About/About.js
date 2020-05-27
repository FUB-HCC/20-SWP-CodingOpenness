import React from "react";
import { Icon } from "@blueprintjs/core";

class About extends React.Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", padding: "0 20px 0 20px" }}>
          <img
            style={{ height: 300 }}
            src={require("../../Assets/hcc-logo.png")}
            alt={"hcc"}
          />
          <p
            style={{ whiteSpace: "pre-line", padding: 20 }}
          >{`The Human-Centered Computing (HCC) Lab is a research group at the Institute of Computer Science at FU Berlin. In our projects, we deal with web-based knowledge generation and digital learning especially in the context of peer production communities and online scientific communities. A particular focus is on existing interdependencies between people's participation processes (the social system), the employed software (the technical system) and the collectively created artifact (the knowledge system).

The HCC.lab's mission is to design computational systems that enable and augment collaboration between humans and machines. 

In our software development practice, we focus on user-centered design processes and a major concern is software usability. Since our research work is interdisciplinary, we consider insights from fields such as visual and interaction design, web technologies, semantic technologies, and the social sciences. We apply quantitative (e.g., network analysis) and qualitative research (e.g. field interviews) methods in our projects.

Head of the group: Prof. Dr. Claudia Müller-Birn`}</p>
        </div>
        <div>
          <h3 style={{ marginTop: 60, textDecoration: "underline" }}>
            {"Links:"}
          </h3>{" "}
          <br />
          <div style={{ margin: "0px 30px 10px 30px" }}>
            <a
              style={{ margin: 5, color: "#6b9e1f" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/FUB-HCC/20-SWP-CodingOpenness"
            >
              <Icon icon="link" />
            </a>
            <strong>
              {"20-SWP-CodingOpenness official GitHub Repository"}
            </strong>
          </div>
          <div style={{ margin: "0px 30px 10px 30px" }}>
            <a
              style={{ margin: 5, color: "#6b9e1f" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.fu-berlin.de/campusleben/forschen/2020/200512-corona-interview-mueller-birn/index.html"
            >
              <Icon icon="link" />
            </a>
            <strong>
              {"Interview with Prof. Claudia Müller Birn on the tracing app"}
            </strong>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
