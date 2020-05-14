import React from "react";
import "./Groups.css";

class Groups extends React.Component {


  render() {
    return <div>

      <div class="topnav">
        {/*<a class="active" href="#home">Home</a>*/}
        <a href="#PEPP-PT">PEPP-PT</a>
        <a href="#DP-3T">DP-3T</a>
        <a href="#DCTS">DCTS</a>
      </div>

      <div class="overview-table">
      <table>
        <tr>
          <th>Kriterium</th>
          <th>PEPP-PT	</th>
          <th>DP3T	</th>
          <th>DCTS	</th>
        </tr>
        <tr>
          <td>Zugrundeliegendes Prinzip</td>
          <td>Zentral</td>
          <td>Dezentral</td>
          <td>Dezentral</td>
        </tr>
        <tr>
          <td>Ort der Speicherung der IDs</td>
          <td>Server</td>
          <td>Smartphone</td>
          <td>Smartphone</td>
        </tr>
        <tr>
          <td>Ort der Berechnung</td>
          <td>Server</td>
          <td>Smartphone</td>
          <td>Smartphone</td>
        </tr>
        <tr>
          <td>Verfahren bei Aktualisierungen</td>
          <td>Broadcast an alle Geräte</td>
          <td>Pull je Gerät</td>
          <td>Pull je Gerät</td>
        </tr>
      </table>
      </div>

      <div class="PEPP-PT"><h2 id="PEPP-PT">PEPP-PT</h2>

      
    
      <div class="paragraph">
      <h3>Pan European Privacy Preserving Proximity Tracing</h3>

      <a href="https://github.com/FUB-HCC/20-SWP-CodingOpenness/wiki/Pan-European-Privacy-Preserving-Proximity-Tracing-%28PEPP-PT%29" 
        target="_blank">
        <img className="img-responsive" src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} 
        alt="Github Link"/>
      </a>
      
      
        <p>PEPP-PT ist eine Organisation, die in der Schweiz als gemeinnützige 
        Organisation gegründet wurde, um eine Lösung zu finden, die sich an 
        europäische Gesetze und Grundsätze zum Schutz der Privatsphäre und des 
        Datenschutzes hält. Das PEPP-PT-Team, das am 31. März 2020 mehr als 130 
        Mitglieder in acht europäischen Ländern zählt.
        </p>
        </div>
     

        <div class = "graphic"> 
          <p id="pepp-pt-diagram">
            <img class="diagram" src="https://user-images.githubusercontent.com/1636532/81082424-94087200-8ef3-11ea-8dc8-cc556f2705ea.png"
            alt="pepp-pt-diagram"/>
          </p> 
        </div> 

        <p id="member">
          <h4>Group Members:</h4>
          Basel Almohamad <br />
          Johannes Brose <br />
          Long Dang Pham Hoang <br />
          Linus Helfmann <br />
          Viktoriya Kraleva <br />
          David Paulini <br />
          Felix Sekul <br />
          Ingrid Gancia Tchilibou Boudjeka <br />
          Di Wang <br />
        </p>

      </div>
      


      <div class="DP-3T">
        <h2 id="DP-3T">DP-3T</h2>
       
        

      <div class="paragraph">

      <h3>Decentralized Privacy Preserving Proximity Tracing protocol </h3>
      
      <a href="https://github.com/FUB-HCC/20-SWP-CodingOpenness/wiki/Decentralized-Privacy-Preserving-Proximity-Tracing-protocol-(DP-3T) " 
      target="_blank">
        <img className="img-responsive" src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} 
        alt="Github Link"/>
      </a>

      <p>DP-3T ist ein Vorschlag für ein Sicherheit- und Privatsphäre-wahrendes 
        System zum Proximity Tracing, das eine technologische Grundlage für die 
        Verlangsamung der Ausbreitung des SARS-CoV-2-Virus schaffen soll, wenn es 
        in großem Maßstab eingesetzt wird. Das Projekt wurde unter anderem von 
        Forschern der École Polytechnique fédérale de Lausanne und der ETH Zürich 
        ins Leben gerufen. Die Zielsetzung des Projektes ist es die Benachrichtigung 
        von Nutzern, die mit Infizierten in Kontakt gekommen sind, zu vereinfachen 
        und beschleunigen. Dieses System bietet eine Lösung zur Wahrung der 
        Privatsphäre und Sicherheit für Einzelpersonen und Gemeinschaften, 
        indem es ein Höchstmaß an Datenschutz gewährleistet.
        </p>
        </div>

        <div class = "graphic"> 
          <p id="dp-3t-diagram">
            <img class="diagram" src="https://camo.githubusercontent.com/4e9a39c556271e269c0fe4f43f3709c2b4a5d1dd/68747470733a2f2f692e696d6775722e636f6d2f73316932546d312e706e67"
            alt="dp-3t-diagram"/>
          </p> 
        </div>

        <p id="member">
          <h4>Group Members:</h4>
          Oussama Bouanani <br />
          Keno Wilhelm Budde 	<br />
          Tung Duong Son 	<br />
          Omer Hod 	<br />
          Dennis Nikolaus Natusch <br />
          Adriana Pinto Diaz Luz <br />
          Pascal Sigmund 	<br />
          Juri Torhoff 	<br />
          Julia Zimmermann <br />
        </p>
      </div>
      
      

      <div class="DCTS"><h2 id="DCTS">DCTS</h2>
      
      
      
      <div class="paragraph">

      
      <h3>Digital Contact Tracing Service</h3>

      <a href="https://github.com/FUB-HCC/20-SWP-CodingOpenness/wiki/Digital-Contact-Tracing-Service-(DCTS)" 
      target="_blank">
        <img className="img-responsive" src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} 
        alt="Github Link"/>
      </a>

      <p>Kontaktverfolgungsdienst von der TU München.</p>
      </div>

      <div class = "graphic"> 
          <p id="dp-3t-diagram">
            <img class="diagram" src="https://user-images.githubusercontent.com/4459428/80650567-87f45e80-8a74-11ea-950a-8a833e935226.png"
            alt="dp-3t-diagram"/>
          </p> 
      </div>

      <p id="member">
        <h4>Group Members:</h4>
        Julius Brose 	<br />
        Matthias Cichon 	<br />
        Claas Frederic Fandré <br />
        Torben Jörg Knaak 	<br />
        Elen Niedermeyer 	<br />
        Bernd Sahre 	<br />
        Piyush Soni 	<br />
        Raphael Wagner 	<br />
      </p>

      </div>

      </div>;
  }
}

export default Groups;
