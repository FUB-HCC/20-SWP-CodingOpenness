import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return <div>
      <p className={"paragraph"}>
        <h4>Das Ziel unseres Open-Source Softwareprojekt im Sommersemester 2020 ist es, uns an der Entwicklung der Corona-App zu beteiligen.</h4>
        Die Kontaktverfolgung-App wird mit dem Ziel entwickelt, m&ouml;gliche Corona-Infektionsketten, datenschutzfreundlich zu erkennen. (Daneben gibt es die Datenspende-App, Nutzung in Verbindung mit den Fitnesstracker, und der Vorschlag einer Quarant&auml;ne-App zur Entlastung der Gesundheits&auml;mter).<br /> <br />
        Die Corona-App kann nur ein Baustein von einer Vielzahl Ma&szlig;nahmen sein, mit dem wir versuchen, die SARS-CoV-2-Epidemie einzud&auml;mmen. Leider gibt es nicht &quot;die Corona-App&quot;, sondern eine Vielzahl unterschiedlicher, teilweise konfligierende Ans&auml;tze, daher ist zun&auml;chst unsere Aufgabe, diese Ans&auml;tze zu identifizieren, zu vergleichen und zu bewerten.<br /> <br />
        Letztlich besteht die Hoffnung, dass wir im Sommersemester die M&ouml;glichkeit erhalten, die eine oder andere App zu installieren und zu erweitern.<br /> <br />
        Es gibt mittlerweile eine Vielzahl von Ansätzen, wie eine solche Corona-App umgesetzt werden kann. Wir haben hier keinen Anspruch auf Vollständigkeit, sondern haben diese Liste nur zur eigenen Diskussion angelegt. Im Rahmen des Softwareprojekts fokussieren wir vor allem auf Vorschläge aus Deutschland:
        <ul>
          <li>Pan European Privacy Preserving Proximity Tracing (PEPP PT)</li>
          <li>Decentralized Privacy Preserving Proximity Tracing protocol (DP 3T)</li>
          <li>Digital Contact Tracing Service (DCTS)</li>
        </ul>
        (LINK TO EACH ANSATZ IN THE WEBSITE)<br/>
        Ein Vergleich dieser 3 Ansätze befindet sich hier (LINK TO ANSÄTZE VERGLEICH PAGE N WEBSITE)
      </p>
    </div>;
  }
}

export default Home;
