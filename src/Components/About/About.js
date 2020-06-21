import React from "react";
import { Icon } from "@blueprintjs/core";
import "./About.css";

class About extends React.Component {
  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }

  getGroupMemberList(members) {
    return members.map((member) => <li key={member}>{member}</li>);
  }
  render() {
    return (
      <>
        <div className={"about-container"}>
          <div className={"about-second-container"}>
            <div className={"about-main"}>
              <div
                style={{ fontSize: 50, fontWeight: 800 }}
                className={"abschnitt"}
              >
                Wer sind wir
              </div>
            </div>

            <div className={"about-links"} style={{ fontWeight: 10 }}>
              <div className={"abschnitt"}>
                {`Wir sind Studenten am Institut für Informatik an der Freien Universität 
                Berlin und beschäftigen uns im Modul Softwareprojekt - Coding Openness 
                mit der deutschen Corona App.`}
              </div>
              
              <div className={"abschnitt"}>
                {`Die Beiträge jeder Person werden aufgelistet und jeweils  
                die persönliche Github-Seite verlinkt.`}
              </div>

              <div className={"abschnitt"}>
                {`Letztlich besteht die Vorhaben, die deutsche Corona App zu installieren 
                und zu erweitern.`}
              </div>
              <br />

                <strong style={{ textDecoration: "underline" }}>
                  {"Links:"}
                </strong>
                <br /><br />
                <div>
                  <a
                    style={{ margin: 5, color: "#6b9e1f" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/FUB-HCC/20-SWP-CodingOpenness"
                  >
                    <Icon icon="link" />
                    <span
                      style={{
                        fontWeight: 400,
                        color: "black",
                        paddingLeft: 2,
                      }}
                    >
                      {"20-SWP-CodingOpenness official GitHub Repository"}
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    style={{ margin: 5, color: "#6b9e1f" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.fu-berlin.de/campusleben/forschen/2020/200512-corona-interview-mueller-birn/index.html"
                  >
                    <Icon icon="link" />
                    <span
                      style={{
                        fontWeight: 400,
                        color: "black",
                        paddingLeft: 2,
                      }}
                    >{"Interview with Prof. Claudia Müller Birn on the tracing app"}
                    </span>
                  </a>
                </div>
            </div>
          </div>

          <div class="about-list"> 
            <p style={{textAlign: 'center'}}>Namen sind alphabetisch nach Nachnamen sortiert.</p>          
                      
            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/OussamaBouanani"
                   target="_blank"
                   rel="noopener noreferrer"
                >Oussama Bouanani </a>
                </span>
              <p>
                Team Webseite <br />
                DP-3T Ansatz
              </p>
            </div>

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/JohBrose"
                   target="_blank"
                   rel="noopener noreferrer"
                >Johannes Brose </a>
              </span>
              <p>
                Team Technik <br />
                PEPP-PT Ansatz
              </p>
            </div>

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/JuliusBro"
                   target="_blank"
                   rel="noopener noreferrer"
                >Julius Brose </a>
                </span>
              <p>
                Team Technik<br />
                DCTS Ansatz (Leiter)<br />
                Corona Warn App: Risk
              </p>
            </div>

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/Clearwood"
                   target="_blank"
                   rel="noopener noreferrer"
                >Keno Wilhelm Budde </a>
              </span>
              <p>
                Team Organisation<br />
                DP-3T Ansatz      
              </p>
            </div>

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/sontungg"
                   target="_blank"
                   rel="noopener noreferrer"
                >Son Tung Duong </a>
                </span>
              <p>
                Team Webseite<br />
                DP-3T Ansatz
              </p>
            </div>

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/erdanf"
                   target="_blank"
                   rel="noopener noreferrer"
                >Claas Fandre </a>
                </span>
              <p>
                Team Vergleich<br />
                DCTS Ansatz<br />
                Corona Warn App: Data Privacy
              </p>
            </div>          

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/linuxhelf"
                   target="_blank"
                   rel="noopener noreferrer"
                >Linus Helfmann </a>
              </span>
              <p>
                Team Vergleich<br />
                PEPP-PT Ansatz (Leiter)<br />
                Corona Warn App: Data Privacy
              </p>
            </div>           

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/DPHLong"
                   target="_blank"
                   rel="noopener noreferrer"
                >Long Dang Pham Hoang </a>
              </span>
              <p>
                Team Technik<br />
                PEPP-PT Ansatz<br />
                Corona Warn App: Risk
              </p>
            </div>

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/Hod04"
                   target="_blank"
                   rel="noopener noreferrer"
                >Omer Hod </a>
              </span>
              <p>
                Team Webseite<br />
                DP-3T Ansatz
              </p>
            </div>

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/eagle-seagull"
                   target="_blank"
                   rel="noopener noreferrer"
                >Torben Knaak </a>
                </span>
              <p>
                Team Fragebogen<br />
                DCTS Ansatz
              </p>
            </div>          

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/kraleva"
                   target="_blank"
                   rel="noopener noreferrer"
                >Viktoriya Kraleva </a>
              </span>
              <p>
                Team Vergleich<br />
                PEPP-PT Ansatz<br />
                Corona Warn App: UI Design
              </p>
            </div>          

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/adrianapintod"
                   target="_blank"
                   rel="noopener noreferrer"
                >Adriana Pinto Diaz Luz </a>
              </span>
              <p>
                Team Organisation<br />
                DP-3T Ansatz
              </p>
            </div>            

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/dennisn00"
                   target="_blank"
                   rel="noopener noreferrer"
                >Dennis Nikolaus Natusch </a>
              </span>
              <p>
                Team Technik<br />
                DP-3T Ansatz
              </p>
            </div>

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/pada1015"
                   target="_blank"
                   rel="noopener noreferrer"
                >David Paulini </a>
              </span>
              <p>
                Team Fragebogen<br />
                PEPP-PT Ansatz
              </p>
            </div>

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/bernd961"
                   target="_blank"
                   rel="noopener noreferrer"
                >Bernd Sahre </a>
                </span>
              <p>
                Team Vergleich<br />
                DCTS Ansatz
              </p>
            </div>          

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/molpremotone"
                   target="_blank"
                   rel="noopener noreferrer"
                >Felix Sekul </a>
                </span>
              <p>
                Team Fragebogen<br />
                PEPP-PT Ansatz<br />
                Corona Warn App: Exposure
              </p>
            </div>          

            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/gancia-kiss"
                   target="_blank"
                   rel="noopener noreferrer"
                >Ingrid Tchilibou </a>
              </span>
              <p>
                Team Fragebogen<br />
                PEPP-PT Ansatz<br />
                Corona Warn App: Exposure
              </p>
            </div>
                      
            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/tratond01"
                   target="_blank"
                   rel="noopener noreferrer"
                >Di Wang </a>
              </span>
              <p>
                Team Webseite<br />
                PEPP-PT Ansatz
              </p>
            </div>          
              
            <div class="member-box">
              <span style={{fontWeight: 'bold'}}>
                <a href="https://github.com/julizet"
                   target="_blank"
                   rel="noopener noreferrer"
                >Julia Zimmermann </a>
                </span>
              <p>
                Team Vergleich<br />
                DP-3T Ansatz (Leiterin)<br />
                Corona Warn App: Data Privacy
              </p>
            </div>  
             
          </div>   
          <div class="end">
          </div> 
        </div>
      </>
    );
  }
}
export default About;
