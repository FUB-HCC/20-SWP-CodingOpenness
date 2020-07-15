import React from "react";
import { Link } from "react-router-dom";
import "./CoronaWarnApp.css";

class CoronaWarnApp extends React.Component {
  state = {
    loadPrototype: false,
  };

  componentDidMount() {
    if (this.props.handleNavbarClick != null) {
      this.props.handleNavbarClick();
    }
  }
  render() {
    var prototype = (
      <img
        className={"data-privacy-prototype"}
        src={require("../../Assets/data_privacy_prototype.png")}
        alt="data_privacy_prototype_img"
        onClick={() => this.setState({ loadPrototype: true })}
      />
    );

    if (this.state.loadPrototype) {
      prototype = (
        <iframe
          title={"data-privacy-prototype"}
          className={"data-privacy-prototype"}
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="450"
          height="900"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsopIMcNqDFLYZ6sf3rVtbt%2FColapsibile-Icons%3Fnode-id%3D79%253A1%26scaling%3Dscale-down&chrome=DOCUMENTATION"
        />
      );
    }

    return (
      <>
        <div style={{ paddingTop: 70 }}>
          <div className="cwanav" id="cwanav">
            <a href="#Privacy">Data Privacy</a>
            <a href="#Risk">Risk of Infection</a>
            <a href="#Exposure">Exposure Logging</a>
          </div>
        </div>
        <div className={"page-container"}>
          <div style={{ fontSize: 50, fontWeight: 800 }}>
            <img
              className="page-title-img"
              src={require("../../Assets/corona_warn_app_title_img.png")}
              alt="corona_warn_app_title_img"
            />
          </div>
          <div>
            <p>
              Die Architektur der offiziellen Corona-Warn-App basiert auf der
              <Link className="corona-link" to="/approaches#DP-3T">
                DP-3T Architektur
              </Link>
              . Jede App speichert gesendete und empfangene IDs nur lokal und
              überträgt nur im Falle eines positiven Tests und Einwilligung des
              Users auf einen Server.
              <br />
              Die IDs werden von einem täglich wechselnden Temporary Exposure
              Key abgeleitet. Die App downloadet regelmäßig die auf dem Server
              gespeicherten Keys um lokal das Risiko des Users zu berechnen und
              ihn ggf. zu informieren.
            </p>

            <p>
              Die Corona-Warn-App ist seit Mitte Juni im Google und Apple Store
              zum Download bereit.
              <br />
              Mehr Details über die Funktionalität der Corona-Warn-App befinden
              sich auf ihrer
              <a
                className={"corona-link"}
                href="https://www.coronawarn.app/de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Webseite
              </a>
              .
            </p>

            <p>
              <a
                href="https://github.com/corona-warn-app"
                target="_blank"
                rel="noopener noreferrer"
                className={"github-link"}
              >
                <img
                  className="img-responsive"
                  src={require("../../Assets/github.svg")}
                  alt="Corona-Warn-AppGithub Link"
                />
                Corona-Warn-App's GitHub Repositories
              </a>
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#e8e8e8", paddingTop: 0 }}
          className={"page-container page-container-pad"}
          id={"Privacy"}
        >
          <div className={"corona-abstand"} style={{ minWidth: "46%" }}>
            {prototype}
          </div>
          <div>
            <p
              className={"corona-abstand"}
              style={{
                whiteSpace: "pre-line",
              }}
            >
              <p style={{ fontSize: 50, fontWeight: 800, marginLeft: 0 }}>
                <span style={{ color: "#6b9e1f" }}>Data Privacy</span>
              </p>
              {`Ein Problem der App ist die Darstellung der Datenschutzerklärung.
                Wie man diese besser gestalten kann, führen wir im Folgenden auf.

                Die Datenschutzerklärung erscheint einmal zum Start der App und danach kann man sie über das Menu aufrufen. Doch sie ist nicht einladend gestaltet. Vielmehr muss man bis zur gesuchten Stelle sehr weit scrollen und auch dann noch viel Text durcharbeiten, der in "Juristendeutsch" geschrieben ist.

                Wir wollen erreichen, dass die Erklärung von mehr Nutzern verstanden wird, sodass diese Selbstbestimmt über die Instalation der App entscheiden können.
                Konkret möchten wir eine bessere Darstellung des Textes, mithilfe von aufklappbaren Inhalten, Icons, Diagrammen und/oder Tabellen zu erarbeiten und diese in die Anroid App zu implementieren.

                Diese Mittel haben wir unter anderem aus`}
              <span
                style={{ fontStyle: "italic" }}
              >{`"Clarke, N., Furnell, S., Angulo, J., Fischer‐Hübner, S., Wästlund, E. and Pulls, T., 2012. Towards usable privacy policy display and management. Information Management & Computer Security".

              `}</span>
              {`Wir haben ein`}
              <a
                className={"about-inst-link"}
                href={
                  "https://github.com/corona-warn-app/cwa-wishlist/issues/16"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Issue im offiziellen Repo
              </a>
              {`zum Thema Lesbarkeit der Datenschutzerklärung erstellt.

                Daraufhin ist der linke Prototyp entstanden, wo man sieht, wie die Verwendung von Icons (Seite 1) und aufklappbaren Inhalten (Seite 2-5) die Datenschutzerklärung aufwertet.

                Eine detailierte Darstellung des Arbeitsprozesses und Ideen zur Implementierung finden sie`}
              <a
                className={"about-inst-link"}
                href={
                  "https://github.com/FUB-HCC/20-SWP-CodingOpenness/wiki/Data-Privacy:-Prototype"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                auf der entsprecheneden Wiki Seite
              </a>
            </p>
          </div>
        </div>
        <div style={{ paddingTop: 0 }} className={"page-container"}>
          <div className={"corona-abstand"} style={{ minWidth: "46%" }}>
            <p style={{ fontSize: 50, fontWeight: 800 }}>
              <span style={{ color: "#6b9e1f" }}>Risk of Infection</span>
            </p>
            <p>
              {`In der Corona-Warn-App wird nicht im Detail gezeigt wie das Infektionsrisiko berechnet wird.
              Im Folgenden analysieren wir diesen Sachverhalt.`}
            </p>

            <p style={{ whiteSpace: "pre-line" }}>
              {`Aus den gesammelten Daten der App berechnet sich der Risk Score wie folgt:
            `}
              <div
                className={"code-block-container"}
                style={{ whiteSpace: "normal", fontSize: 14 }}
              >
                <code>
                  {`val riskScore = (maximumRiskScore / normalizationDivisor) *
  weightedAttenuationDuration
`}
                </code>
              </div>
              {`Wobei:
            `}
              <ul>
                <li>
                  <code>maximumRiskScore</code>
                  {`: die Zeit mit dem höchsten Risiko ist, aus dem Datensatz, der für diese Berechnung verwendet wird.`}
                </li>
                <li>
                  <code>normalizationDivisor</code>
                  {`: eine Konstante ist, die bei Division mit dem maximumRiskScore der Einstufung des maximumRiskScores
              nach die berechnete Zeit noch verändert:`}
                  <ul>
                    <li>{`Ist das Risiko des maximumRiskScores durchschnittlich, bleibt die berechnete Zeit konstant`}</li>
                    <li>{`Ist das Risiko des maximumRiskScores überdurchscnittlich, wird die Zeit mit 1,5 multipliziert`}</li>
                    <li>{`Ist das Risiko des maximumRiskScores unter dem Durchschnitt, wird die Zeit auf 1/6 reduziert`}</li>
                  </ul>
                </li>
                <li>
                  <code>weightedAttenuationDuration</code>
                  {`: eine Summe der Zeiten ist, die die Person in niedrigen/mittel/hohen Risikobereichen war, nachdem diese Zeit mit konstanten Gewichten multipliziert wurden`}
                </li>
              </ul>
            </p>
          </div>
          <div>
            <div className={"code-block-container secondary-block"}>
              <code>
                <div>
                  {`val weightedAttenuationDuration =
  weightedAttenuationLow
    .plus(weightedAttenuationMid)
    .plus(weightedAttenuationHigh)
    .plus(defaultBucketOffset)
`}
                </div>
                <div>
                  {`
val weightedAttenuationLow =
  attenuationParameters.weights.low.capped()
    .times(exposureSummary.attenuationDurationsInMinutes[0])
`}
                </div>
                <div>
                  {`
val weightedAttenuationMid =
  attenuationParameters.weights.mid.capped()
    .times(exposureSummary.attenuationDurationsInMinutes[1])
`}
                </div>
                <div>
                  {`
val weightedAttenuationHigh =
  attenuationParameters.weights.high.capped()
    .times(exposureSummary.attenuationDurationsInMinutes[2])
`}
                </div>
              </code>
            </div>
            {`Diesen Code findet man in der Klasse `}
            <code>RiskLevelCalculation</code> {` im package risk.`}
            <p style={{ whiteSpace: "pre-line", margin: "30px 0" }}>
              {`Die Unterscheidung, ob die Zeiten als low, mid oder high gelten, sind abhängig davon, ob die Distanz bei diesen Zeiten zwischen 8-3 Meter(low), 3-1,5 Meter(mid) oder näher als 1,5 Meter(high) waren. Zeiten, die geringer als 10 Minuten sind, werden unabhängig von der Distanz verworfen. Ebenso werden Zeiten verworfen, die mehr als 10 Meter Distanz hatten, unabhängig von der Länge der Zeit.

Es gibt des Weiteren, keine Abstufungen beim Ergebnis: Der Risk Score ist am Ende nichts weiteres, als eine gewichtete Zeit. Liegt diese über 15 Minuten, wird der Benutzer als ein Benutzer mit erhöhtem Risiko eingestuft, er wird benachrichtigt und weitere Handlungen werden ihm nahgelegt.

Diese Informationen finden sich in der offiziellen`}

              <a
                className={"about-inst-link"}
                href={
                  "https://github.com/corona-warn-app/cwa-documentation/blob/master/cwa-risk-assessment.md"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Doku
              </a>

              {`.
              Weitere Dokumentation über`}
              <a
                className={"about-inst-link"}
                href={
                  "https://github.com/corona-warn-app/cwa-documentation/blob/master/transmission_risk.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Transmission risk level
              </a>
              {`.`}
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#e8e8e8", paddingTop: 0 }}
          className={"page-container page-container-pad"}
          id={"Exposure"}
        >
          <div className={"corona-abstand"} style={{ minWidth: "46%" }}>
            <p style={{ fontSize: 50, fontWeight: 800 }}>
              <span style={{ color: "#6b9e1f" }}>Exposure Logging</span>
            </p>
            <p>
              {`Die Exposure Notification API ist ein technischer Ansatz, der an `}
              <Link className={"about-inst-link"} to={"/comparison"}>
                DP-3T
              </Link>
              {`angelehnt ist. Er dient zur Kontaktverfolgung sowie zur Benachrichtigung für möglicherweise durch COVID-19 infizierte Nutzer.`}
            </p>
            <img
              className={"cwa-diagram"}
              src={require("../../Assets/exp.jpg")}
              alt="exp-diagram"
            />
          </div>

          <p
            className={"corona-abstand"}
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {`Exposure Logging ist ein Feature der Exposure Notification API, das vom Nutzer im Betriebssystem des Smartphones aktiviert werden muss. 
            
            Nach Aktivierung kann das Smartphone zufällige IDs, die alle 10 bis 20 Minuten neu erzeugt werden und die ohne weitere Informationen den Nutzern nicht zugeordnet werden können, mit anderen Smartphones, die sich mindestens für 5 Minuten in der Nähe befinden, über Bluetooth Low Energy austauschen. Die IDs werden für 14 Tage in einer Datei auf dem Smartphone gespeichert. 
            
            Nutzer, die wissen, dass sie infiziert sind, können ihre zufälligen IDs auf einen zentralen Server hochladen. Diese werden täglich von allen Nutzern auf ihr Smartphone heruntergeladen und die auf dem Smartphone gespeicherten zufälligen IDs werden mit den heruntergeladenen zufälligen IDs von infizierten Nutzern verglichen. 
            
            Bei Übereinstimmung von 2 IDs erhält der Nutzer eine Benachrichtigung und Informationen zum weiteren Ablauf. Die Identität der Nutzer bleibt dabei theoretisch anonym und Nutzer können nur unter außergewöhnlichen Umständen identifiziert werden: 
            
            Zum Beispiel durch eine Überwachungsanlage mit Gesichtserkennung, die Nutzer erfasst, während sie ihre zufälligen IDs austauschen und diese beiden Informationen von einer weiteren Instanz verknüpft werden. 
            
            Ein weiteres Beispiel für eine Deanonymisierung ist, dass eine Person innerhalb eines Tages oder mehrerer Tage nur Kontakt zu einer Person hatte und die Benachrichtigung erhält, dass sie Kontakt mit einer infizierten Person hatte. Standortinformationen werden nicht verwendet.`}
          </p>
        </div>
      </>
    );
  }
}
export default CoronaWarnApp;
