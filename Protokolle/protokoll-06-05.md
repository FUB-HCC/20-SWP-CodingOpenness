# Protokoll 06.05.

Protokollant 1: Torben
Protokollant 2: Keno

### Kurzer Standup

Jeder Anwesende hat 20 Sekunden Zeit, um die folgenden Fragen zu beantworten:

- Was hast Du seit dem letzten Treffen gemacht?
- Was wirst Du bis zum nächsten Treffen machen?
- Welche Probleme/Hindernisse existieren?

Probleme:

- Omer Problem mit BBB
- Piyush Soni neu im Projekt und benötigt eine Einführung

Protokoll:
Linus H. präsentierte die Pan European Privacy Proximity Tracing App.

Keno, Pascal S., Julia Z. und Dennis N. präsentierten den DP-3T Ansatz.

### DP-3T

- alle Daten auf Endnutzergerät
- neugenerierende IDs (ephemeral IDs)
- bei Infektion Hochladen auf einen zentralen Server
- Speicherung nur notwendiger Daten für einen angemessenen Zeitraum. Secret keys für 14 Tage.
- Google & Apple bauen auf diesem Ansatz auf
- Frage, ob push/pull basierter Ansatz - Server broadcasted
- Upload auf Server nur mit Token
- Es wird secret key mit Tag der Infektion hochgeladen

### Präsentation von DCTS von Torben K.

- ähnlich wie DP-3T
- pull basiert in regelmäßigen Abständen Neuinfizierten-IDs auf Handy laden
- Klarstellung der Erreichung der Privatsphäre von anderen Gruppenmitgliedern: IDs vom Server werden gemischt.
- Frage zu Sicherung vom Upload durch medizinisches Fachpersonal - wird public oder private key vom infizierten User genutzt?

Form der Vorlesung dargestellt
Unterschiede zu Ansätzen diskutieren

- Eintragen aller Teilnehmer in die 5 Gruppen
- 10 minütige Besprechung der Gruppen, was zum nächsten Treffen zu erreichen ist. Präsentation der Ergebnisse, Github nutzen und dokumentieren.

### Ergebnisse der Recherchearbeit

- Team PEPP-PT (Linus Helfmann)
  https://github.com/FUB-HCC/20-SWP-CodingOpenness/wiki/Pan-European-Privacy-Preserving-Proximity-Tracing-%28PEPP-PT%29

* zentralisiertes Backend Client/Server Architektur
* Push-Notification-Service
* temporäre UserIDs werden durch den Server mithilfe permanenter UserIDs generiert
* Kontaktpersonen können direkt identifiziert werden

- Team DP-3T (Julia Zimmermann/Keno/Pascal Sigmund/Dennis Natusch)
  https://github.com/FUB-HCC/20-SWP-CodingOpenness/wiki/Decentralized-Privacy-Preserving-Proximity-Tracing-protocol-(DP-3T)

* Peer-to-Peer Ansatz
* Secret Keys werden auf dem jeweiligen Mobiltelefon generiert
* Broadcast bezüglich infizierter EphID
* Infizierter entscheidet über Weitergabe der Daten (davor muss das Labor den Token aktivitieren)
* Die Risikoberechnung ist nicht klar definiert

- Team DCTS (Torben/Bernd/Claas/Julius Brose)
  https://github.com/FUB-HCC/20-SWP-CodingOpenness/wiki/Digital-Contact-Tracing-Service-%28DCTS%29

* ähnlich zu DP-3T
* Was wird genau auf dem Server gespeichert?
* Stetig ändernde IDs werden an andere Geräte gesendet
* IDs werden mit Private Key des Nutzers signiert
* verschlüsselte IDs wird an Server gesandt, damit berechnung der ID\`s nochmal überprüft werden können

### Diskussion: Wie ist der aktuelle Stand der Situation um die Corona-Tracing App?

https://github.com/FUB-HCC/20-SWP-CodingOpenness/wiki

Fachartikel: Privacy-Preserving Contact Tracing: currentsolutions and open questions von Qiang Tang (Luxembourg Institute of Science and Technology)
Fachartikel: Analysis of DP3T - Between Scylla and Charybdis von Serge Vaudenay (EPFL)

#### Team Vergleich der Ansätze Breakroom 1

TODO: Aufarbeitung der bestehenden Recherche hinzu einem Vergleich bezüglich (1) Architektur (2) Kommunikationsablauf

Mitglieder:

- Claas Fandre
- Julia Zimmermann
- Linus Helfmann
- Bernd Sahre
- Viktoriya Kraleva

#### Team Fragebogen Breakroom 2

TODO: Erstellen von Fragen zur potentiellen Nutzung der Corona-Tracing App
TODO: Eruieren, welche Werkzeuge exisieren (Tipp, LIME Survey auf User-Seiten des Fachbereichs)
TODO: Zusammenstellen von Informationen, wie Personen erreicht werden können und wie der Fragebogen verteilt werden kann

Mitglieder:

- Ingrid Tchilibou
- Felix Sekul
- David paulini
- Torben Knaak

#### Team Github Pages Breakroom 3

TODO: Unser Projekt braucht eine Webseite und die soll bereits angelegt und eingerichtet werden, mit allen Teammitgliedern und kurzer Beschreibung derselbigen und der Vision

Mitglieder:
Di Wang
Tung Duong
Oussama Bouanani
Omer Hod

#### Team Technik Breakroom 4

TODO: Sammeln und Aufbereiten von Ressourcen, um schnell in die Android-Programmierung/Cross Plattform einzusteigen sowie Anlegen von ersten Beispielprojekten

Mitglieder:
Julius Brose
Johannes
Pascal
Dennis
Long Dang

#### Team Organisation - Github Breakroom 5

TODO: Konzeptentwicklung für zukünftige Zusammenarbeit (welche Tools und Einrichtung von Boards auf Github)

Mitglieder:
Keno
Adriana
