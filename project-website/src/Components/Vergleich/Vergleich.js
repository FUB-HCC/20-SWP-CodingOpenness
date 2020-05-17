import React from "react";
import Markdown from "markdown-to-jsx";

class Vergleich extends React.Component {
  render() {
    return (
      <div style={{ padding: 30 }}>
        <Markdown
          children={`# Wie diese Seite zu lesen ist

In dieser Wiki-Page werden die drei Ansätze **PEPP-PT, DP3T und DCTS** anhand unterschiedlicher Kriterien miteinander verglichen. Dabei lassen sich die Kriterien zunächst in drei große Themenbereiche unterteilen:
* Architektur
* Kommunikationsablauf
* Privatsphäre und Transparenz

Die Kriterien eines Themenbereiches werden schließlich kurz beschrieben und anschließen in einer Tabelle gegenübergestellt.

**Hinweis**: Alle Tabellen sind interaktiv, wobei sich die Detailbeschreibungen durch Klick auf das Dreieck einklappen lassen.

### Abkürzungen
**User-ID:** permanente ID die zu einem User zugeordnet ist (nur PEPP-PT)

**Push-ID:** Push-Notification-ID (nur PEPP-PT)

**BLE-ID:** temporäre (<=1 Stunde) BluetoothLowEnergy-ID

**Seed:** temporärer (z.b. 1 Tag) Key zum Erzeugen von BLE-IDs (nur DP3T, DCTS)

## Architektur

Die meisten Konzepte/Apps lassen sich in zwei Prinzipien unterteilen (**zentral** und **dezentral**), je nachdem wo die Daten ausgetauscht und gespeichert werden. Dieses Prinzip beeinflusst stark den Grad des Datenschutzes und weitere Eigenschaften.

Weiterführender Artikel: [netzpolitik.org](https://netzpolitik.org/2020/welche-technologie-bietet-den-besseren-datenschutz/)


| Kriterium  | Zentral      | Dezentral         |
| -----------| -------------| -------------|
| <details><summary><b>Ort der Generierung der BLE-IDs</b></summary>...gibt an, wo die BLE-IDs generiert werden.</details>  | <details><summary><b>Server</b></summary>BLE-IDs werden für alle User auf dem Server durch verschlüsseln ihrer User-ID generiert.</details> | <details><summary><b>Smartphone</b></summary>BLE-IDs werden dezentral auf dem Smartphone des Nutzers aus einem Seed berechnet.</details> |
| <details><summary><b>Ort der Berechnung ob Kontakt</b></summary>...gibt an, wo berechnet/geprüft wird, ob ein Kontakt mit einem Infiziertem stattgefunden hat und wie hoch das Risiko ist.</details>  | <details><summary><b>Server</b></summary>Der Server bestimmt, welche Personen kontakt mit infizierten hatten und wie hoch das Risiko ist.</details> | <details><summary><b>Smartphone</b></summary>Kontakt- und Risikoberechnung erfolgt auf dem jeweiligen Smartphone des App-Nutzers.</details> |
| <details><summary><b>Verfahren bei Aktualisierungen</b></summary>...gibt an, wie der Algorithmus zur berechnung von Kontakt/Risiko aktualisiert werden kann</details>  | <details><summary><b>Server-Update</b></summary>Es muss nur der Server aktualisiert werden</details> | <details><summary><b>App-Update</b></summary>Die Nutzer\*innen  müssen die App aktualisieren.</details> |

## Konzepte

| Kriterium  | PEPP-PT      | DP3T         | DCTS          |
| -----------| -------------| -------------| -------------|
|<details><summary><b>Architektur</b></summary> ...siehe obere Tabelle </details> | <b>Zentral</b> | <b>Dezentral</b> |<b>Dezentral</b> |
| <details><summary><b>Mitglieder</b></summary> Wer hat bei der Entwicklung mitgewirk, auch achten auf Organisationen mit evtl. anderen Interessen, z.B. Firmen mit Überwachungssoftware, ...</details>  | <details><summary><b>viele EU-Universitäten/ Forschungszentren</b></summary>anfangs über 130, inzwischen viele ausgetreten </details> | <b>aus PEPP-PT abgespalten</b> | <b>ito, TU München, TCN Coalition</b> |
| <details><summary><b>Kompatibilität mit Apple / Google Schnittstellen</b></summary> Key werden beim ansatz von Google/Apple lokal erzeugt, siehe auch [hier](https://techcrunch.com/2020/04/24/apple-and-google-update-joint-coronavirus-tracing-tech-to-improve-user-privacy-and-developer-flexibility/)</details>  | <details><summary><b>nein</b></summary>Die zentrale erstellung der Bluetooth-IDs ist mit der Schnittstelle nicht möglich, dadurch muss die App permanent geöffnet sein.</details> | <details><summary><b>ja</b></summary>Die Apple/Google Schnittstelle wurde stark von DP3T inspiriert/ist daran angelehnt</details> | <details><summary><b>ja</b></summary>da ähnlich zu DP3T</details> |

## Apps

| Kriterium  | Corona Warn App   |
| -----------| -------------|
| <details><summary><b>Konzept</b></summary> auf welchem Konzept basiert die App</details>  | <b>inspiriert bei DP3T</b> |
| <b>Land</b>  | <b>Deutschland</b> |
| <b>Entwickler</b> | <b>SAP und Telekom</b> |
| <b>Verwendet Apple / Google API </b> | <b>ja</b> |


## Kommunikation

Ablauf der Kommunikation mit Erklärung der Unterschiede in den einzelnen Schritten

| Kriterium  | PEPP-PT      | DP3T         | DCTS          |
| -----------| -------------| -------------| -------------|
| <details><summary><b>Registrierung</b></summary> muss sich die App initial beim Server registrieren </details> | <details><summary><b>Ja</b></summary> dabei wird vom Client zum Server seine Push-ID übertragen und der Server generiert eine User-ID </details> | <b>nein</b> | <b>nein</b> |
| <details><summary><b>Ausgetauschte IDs</b></summary>...beschreibt welche Art von IDs zwischen zwei Nutzergeräten ausgetauscht werden.</details>  | <details><summary><b>BLE-IDs</b></summary>Austausch via BLE-Broadcasting</details> | <details><summary><b>BLE-IDs</b></summary>Austausch via BLE-Broadcasting</details> | <details><summary><b>BLE-IDs</b></summary>Austausch via BLE-Broadcasting</details> |
| <details><summary><b>Bestätigung der Infizierung (durch bspw. Arzt/KH/Labor)</b></summary>Die Bestätigung der Infizierung kann auf verschiedenen Weisen erfolgen (z.B. der Nutzer ladet seine Daten mithilfe eines TAN Verfahrens oder ein Labor lädt die Daten nach der Feststellung der Infizierung hoch).</details>  | <details><summary><b>ТAN Verfahren</b></summary>Nutzer generiert ein TAN, die von der Gesundheitsbehörde auf dem Backend aktiviert wird, womit der Nutzer freiwillig sein Infektionsstatus und CTD auf dem Server hochladen kann.</details> | <details><summary><b>TAN Verfahren</b></summary>Beim Test erhält der Patient einen TAN, die nach dem positiven Befund freigeschaltet wird </details> | <details><summary><b>TAN Verfahren, oder Übertragung durch einen Arzt</b></summary>Entweder hat die App durch die TAN die Erlaubnis, die Daten an dern Server zu senden oder der Schlüssel, der zur Generierungder BLE-ID's genutzt wurde, wird einer Dritten Person z.B. per QR-Code übertragen, damit diese diese die BLE-ID's für sich generieren und hochladen kann. </details> |
| <details><summary><b>Datenmenge bei Übertragung eines Infektionsfalls</b></summary>...beschreibt die Daten, die beim Infektionsfall vom Infiziertem zum Server übertragen werden</details>| <details><summary><b>Empfangene BLE-IDs</b></summary>Ein Liste von Empfangenen Bluetooth ID's</details> | <details><summary><b>Seed und Timestamp</b></summary>Es wird der Seed und der Timestamp der ersten Generierung übertragen, mit der die eigenen BLE-IDs generiert wurden.</details>| <details><summary><b>Gesendete BLE-IDs</b></summary>Eigenen BLE-IDs, die generiet wurden</details> |
| <details><summary><b>Benachrichtigung der User*innen</b></summary>Sollte die Benachrichtigung automatisch erfolgen (z.B. mit Hilfe eines Push-Notification Service, die schon die Kontaktpersonen auf dem Backend speichert) oder nur wenn der Nutzer nachfragt.</details>  | <details><summary><b>Automatisch (Push-Notification Service)</b></summary>Die Benachrichtigung der Nutzer erfolgt automatisch mit Hilfe einer Push-Notification Service, nachdem die Risikoschätzung und Proximity measurment auf dem Backend für die CTD der infizierten Nutzer, die eine Liste von BLE-IDs beeinhaltet hochgeladen wurde. Ein nichtinfiziertes Userapp pollt nach der Benachrichtigung der Push-Notification Service im Hintergrund das Backend-Service um die Infektionsstatus zu bekommen.</details> | <details><summary><b>manuell</b></summary>Erst nach dem Upload der eigenen Seeds können andere Personen benachrichtigt werden</details> | <details><summary><b>manuell</b></summary>Erst nach dem Upload eigener BLE-IDs können andere Personen benachrichtigt werden</details> |
| <details><summary><b>Art der Benachrichtigungerhaltung (Push vs. Poll)</b></summary>Die Frage, wie man die Daten erhaltet. Push - der Server informiert die Nutzer, Poll - der Nutzer fragt beim Server nach.</details>  | <details><summary><b>Push</b></summary>Wenn ein Nutzer als coronapositiv klassifiziert wurde, sollte er alle seine gespeicherten BLE-ID's mit Timestamps an dem Backend schicken. Da erfolgt erstmal eine Risikoschätzung um zu verstehen welche Kontakte könnten ins Risiko sein und demnächst werden die benachrichtigt. </details> | <details><summary><b>nicht Spezifiziert eher Pull</b></summary>Der Server hält die Seeds der Infizierten vor und "schickt" diese an die Apps</details> | <details><summary><b>Poll</b></summary>Der Nutzer fragt beim Server ein aktuelle Liste der Infizierten ab.</details> |
| <details><summary><b>Art der Verteilung der Daten vom Server (Broadcast an alle vs. Pull je Geraet)</b></summary> Wie die Daten verteilt werden ? </details>  | <b>Broadcast an den Kontakatpersonen der infezierten Person</b> | <b>Clients werden per Broadcast informiert, ein Pull durchzuführen.</b>| <b>Pull je Gerät</b> |
| <details><summary><b>Datenmenge beim Prüfen, ob ein Kontakt stattfand</b></summary>Datenmenge, die vom Server zur App übertragen wird, wenn von der App überprüft wird, ob ein Kontakt mit einer infizierten Person vorlag</details>| <details><summary><b>keine, App erhält direkt Risikinfo</b></summary>Der Server schickt direkt die Risikoinformatik an den Nutzer, da die Auswertung auf dem Server erfolgt.</details> | <details><summary><b>Liste von Seeds und Timestamps</b></summary> Die Seeds und Timestamps der gemeldeten Faälle, aus denen dann Lokal die BLE-IDs generiert werden, die verglichen werden können mit den empfangenen BLE-IDs</details> | <details><summary><b>BLE-IDs Liste</b></summary> Eine Liste mit alle BLE-IDs, die gemeldet wurden, die mit den gesehenen Lokal verglichen werden kann. Diese Daten werden durch einen Bloom Filter verkleinert.</details> |

## Technische Details / Features
| Kriterium  | PEPP-PT      | DP3T         | DCTS          |
| -----------| -------------| -------------| -------------|
| <details><summary><b>Verschlüsselung der Kommunikation</b></summary>... beschreibt, wie die Daten übertragen werden.</details>  | <details><summary><b>TLS/ OAuth2.0/ Open Broadcast</b></summary>TLS Serverauthentizierung mit Hilfe OAuth2.0 Tokens verwendet bei der Kommunikation zwischen - Backend/App, Backend/Push-Notification service (keine Payload-dateien übertragen, nur als Signalmechanism verwendet), Gesundheitsamtmitarbeiter oder Laboren/Backend. Broadcast kann nur zwischen zwei Apps verwendet werden und ist keine gesicherte Kommunikation.</details> | <details><summary><b>Private key Kodierung (Seed) / BLE-ID Spreading with Secret sharing</b></summary>Bei der Kommunikation mit dem Backend wird es nicht explizit erwähnt, was für Verschlüsselungsmechanismen benutzt werden. Trotzdem sollte jeder Nutzer ein Seed zur Erstellung seiner BLE-IDs in seinem App haben und die wurde dem Server nur dann bekanntgegeben, wenn der Nutzer infiziert wurde, danach wird ein neuer Seed von dem App automatisch erstellt.Dies könnte auf 2 Weisen erfolgen, entweder wird der Seed zusammen mit einem Zeitraum t geschickt. Für die sichere Kommunikation zwischen zwei BLE-Geräte wird eine EphID Spreading with Secret sharing Verfahren verwendet. Dies erfolgt über ein k von n Secret-sharing-Schema. Anstatt jeder BLE-ID innerhalb von einem Beacon zu schicken, sollte es in n Teilen kodiert werden, sodass es nur dann möglich ist die BLE-ID zu rekonstruiren, wenn mindestens k Teile der Kodierung vorhanden sind.</details> | <details><summary><b>Asymetrische Verschlüsselung und TOR</b></summary>Upload geschieht über TOR. Beim Download der Daten vom Server, werden nur daten durch asymetrische und kommutativer Verschlüssselung ausgetauscht</details> |
| <details><summary><b>Interoperabilität mit anderen Apps / Ansätzen</b></summary>Die Möglichkeit soll bestehen, dass zwei Nutzer BLE Signals zur Proximity tracing unabhängig von dem heruntergeladenen App empfangen werden können. Dieser Punkt ist wichtig, weil es ist zu erwarten, dass in den verchiedenen Ländern, verschiedene Apps benutzt werden (da man verschiedene Anforderungen zur Privatsphäre und Features haben kann), aus dem Grund sollte man unabhängig davon Interoperabilität auf internationale Ebene/ zwischen verschiedenen Apps erlauben. </details>  | <details><summary><b> Ja</b></summary>Dies wird erreicht, indem man verschiedene Backend services und Verfahren zur Generierung des BLE-IDs and User-IDs verwenden könnte, außerdem verschiedenes App in jedem Land. Es sollte möglich sein nachvollzuziehen aus welchem Land ein EBID ursprunglich kommt, dafür sollte ein ECC (encrypted country code) in jeder BLE-ID enkodiert sein.Wenn eine Backend-Dienstleistung eine BLE-ID nicht erstellt hat, dann kann es die BLE-ID zu keiner entsprechenden User-ID zuordnen. Die verschiedenen Backenddienstleistungen sollten miteinander kommunizieren können, damit alle BLE-ID am ende mit dem entsprechenden Push-IDs benachrichtigt werden können. Die Risikoschätzung erfolgt auf dem Home-Dienstleistung und nur die Home-Dienstleistung sollte entscheiden, ob ein Nutzer benachrichtigt werden soll. </details> | <details><summary><b>Mit anderen Ländern</b></summary>Durch manuelle Eingabe oder GPS, sollen immer die Server angesteuert werden, in deren Ländern sich die Person aufgehalten hat</details> | <details><summary><b>keine Angabe</b></summary>Dafür müsten die Spezifikation zur Generierung von Schlüsseln einheitlich sein</details> |
| <details><summary><b>GPS-Tracing</b></summary>...beschreibt, ob GPS-Tracing erfolgt.</details>  | <details><summary><b>Nein</b></summary>Es sollte keine Lokalisierung und Tracing mittels GPS stattfinden. Auch die Indentifizierung der Backenddienstleistung für die verschiedenen Länder erfolgt über die BLE-IDs und die Informationen, die in dennen kriptiert wurden.</details> | <details><summary><b>optional</b></summary>Kann benutzt werden um zu erkannen in welchem Land die App ist</details> | <details><summary><b>Nein</b></summary>Keine Nutzung vorgesehen</details> |
| <details><summary><b>BLE-Nutzung</b></summary>Wird Bluetooth Low Energy in diesem Ansatz als Haupttechnologie verwendet.</details>  | <details><summary><b>Ja</b></summary>Das eigene BLE-ID in dem Zeitpunkt wird mittels BLE broadcastet und BLE-IDs von anderen werden mittels BLE empfangen.</details> | <details><summary><b>Ja</b></summary>Die eigene BLE-ID in dem Zeitpunkt wird mittels BLE broadcastet und BLE-IDs von anderen werden mittels BLE empfangen.</details> | <details><summary><b>Ja</b></summary>Zum ID-Broadcasting</details> |
| <details><summary><b>Identifizierung mit Hilfe der MAC-Adressen-Übertragung</b></summary>Werden MAC-Adressen bei dem Verfahren während der Kommunikation zwischen zwei Akteure bekanntgegeben, kann man damit ein Akteur identifizieren.</details>  | <details><summary><b>Nein</b></summary>Aus dem Grund, dass BLE verwendet wird, sollte es sowohl bei BLE beacons als auch bei normalen BLE-Geräte nicht möglich sein, dass MAC Adressen in verchiedenen Sessions in einem bestimmten Zeitraum fest und erkennbar sind. Es werden UUIDs umgetauscht, die ohne Vorbemerkung sich verändern können. Es wird aber in der Dokumentation kein solcher Aspekt erwähnt.</details> |<details><summary><b>Nein</b></summary>Aus dem Grund, dass BLE verwendet wird, sollte es sowohl bei BLE beacons als auch bei normalen BLE-Geräte nicht möglich sein, dass MAC Adressen in verchiedenen Sessions in einem bestimmten Zeitraum fest und erkennbar sind. Es werden UUIDs umgetauscht, die ohne Vorbemerkung sich verändern können. Es wird aber in der Dokumentation kein solcher Aspekt erwähnt.</details> | <details><summary><b>Nein</b></summary>Kein Tracking möglich, durch Wechsel der BLE-IDs und damit auch der Bluetooth MAC-Adressen</details> |
| <details><summary><b>Zweitkontaktverfolgung</b></summary>Ist es möglich Zweitkontaktverfolgung einzusetzen, welcher Ansatz wird bei der Zweitkontaktverfolgung verwendet und unter welchen Umständen (z.b. Zustimmung des ersten Kontaktpersons) ist es möglich.</details>  | <details><summary><b>Keine Angabe, aber möglich</b></summary>Theoretisch ist es möglich bei diesem Ansatz Zweitkontaktverfolgung einzusetzen, da die Kontaktpersonen ihre Kontaktlisten dem Backend mitteilen können. Trotzdem ist die Benachrichtigung des zweiten Kontakts vom Risikoschätzung auf dem Server und anderen Faktoren abhängig und wird nicht in der Dokumentation erwähnt. Trotzdem wird es erwähnt, dass fehlerhafte positive Ergebnisse Auswirkung an dem geistigen Zustand des Persons haben könnte, was eigentlich gegen die Zweitkontaktbenachrichtigung sprechen, aber nicht gegen die Zweitkontaktverfolgung.</details> | <details><summary><b>Keine Angabe aber eher nein</b></summary>Der Server enthält Seeds nur von den infizierten Personen und aus dem Grund und keine Listen der Kontakten. Auß dem Grund ist es nicht möglich, dass eine Zweitkontaktverfolgung bei dem Server stattfindet. Unklar ist, wie eine Authentifizierung der entsprechenden Personen, die einen Kontakt hatten dem Server gegenüber aussehn kann. Dieser Aspekt ist aber in der Dokumentation nicht erwähnt.</details> | <details><summary><b>Ja</b></summary>Im Entwurf vorgesehen Durch einen 'zero-knowledge proof' durch den eine Person, die Kontakt mit einer infizierten Person hatte auch Ihre BLE-IDs hochladen kann</details> |



## Privatsphäre und Transparenz
### Allgemein
| Kriterium  | PEPP-PT      | DP3T         | DCTS         |
| -----------| -------------| -------------| -------------|
| <b>Welche Daten sieht der Server-Betreiber</b> | <details><summary><b>User-IDs und Push-ID + Status (Infiziert/Kontakt)</b></summary>Der Status Infiziert/ Kontakt mit Infiziertem ist nur bekannt, falls der Infizierte ihn hochgeladen hat.</details> | <details><summary><b>Seeds infizierter Nutzer</b></summary>Nach Bestätigung durch den Arzt läd der Infizierte seine Seeds hoch.</details> | <details><summary><b>BLE-IDs infizierter Nutzer + Zweitkontakte</b></summary>Nach Bestätigung durch Arzt kann der Infizierte seine BLE-IDs hochladen. Wenn ein Kontakt mit einem Infizierten bestand, kann der Nutzer entscheiden auch seine BLE-IDs als "potenziell infiziert" hochzuladen.</details> |
| <b>Welche Daten sieht die App</b>  | <b> BLE-IDs (eigene + Kontakte)</b> | <details><summary><b>Seed, BLE-IDs (eigene + Kontakte)</b></summary>Aus dem Seed, der jeden Tag gewechselt wird, werden BLE-IDs erzeugt werden.</details> | <details><summary><b>Seed, BLE-IDs (eigene + Kontakte)</b></summary>Der Temporäre Seed wird täglich gewechselt, daraus werden die BLE-IDs erstellt, die ausgetauscht werden.</details> |
| <details><summary><b>Wie lange werden die Daten gespeichert</b></summary>Die Datenspeicherung auf dem Server kann der Nutzer nicht prüfen, aber lokale Daten könnten z.b. per modifizierter App regelmäßig gelöscht werden.</details>| <b>keine Angabe</b> | <b>keine Angabe</b> | <details><summary><b>2-3 Wochen</b></summary>Ausgehend von der möglichen Inkubationszeit. Kann angepasst werden.</details> |
| <details><summary><b>Wer entscheidet über Datenübertragung bei Infektion?</b></summary>siehe auch Bestätigung der Infizierung</details>  | <b>Infizierter nach Authorisierung</b> | <b>Infizierter nach Authorisierung</b> | <b>Infizierter nach Authorisierung</b> |
| <details><summary><b>Wer entscheidet über Datenübertragung bei Kontakt mit Infiziertem?</b></summary>bei DCTS für Zweitkontaktverfolgung</details>  | <details><summary><b>Infizierter nach Authorisierung</b></summary>Der Infizierte lädt seine Kontakte hoch, dies ist nicht optional wenn man sich für hochladen entscheidet.</details> | <b>Daten werden nicht erhoben</b> | <details><summary><b>Kontaktperson entscheidet</b></summary>Wenn man Kontakt mit einer infizierten Person hatte, so wird man darüber informiert und hat die Option seine eigenen IDs hochzuladen (siehe Zweitkontaktverfolgung)</details> |
| <b>Haltung gegenüber Open Source</b>  |<b>Wird vorgeworfen, nicht nach Transparenz zu streben.</b>| <b>Abspaltung von PEPP-PT</b> | <b>Unterstützt komplett Open-Source</b> |

### Identität
| Kriterium  | PEPP-PT      | DP3T         | DCTS         |
| -----------| -------------| -------------| -------------|
| <details><summary><b>Pseudo- / Anonymisierung</b></summary></details>  | <details><summary><b>Pseudonymisierung</b></summary>die User-ID ist permanent und auf Server gespeichert, damit + Push-Notification-ID ist eine Identifikation möglich</details> | <details><summary><b>Anonymisierung</b></summary>der Seed ist der einzige konstante und zur Identifikation nutzbare Datenwert, dieser ändert sich jedoch täglich und wird dem Server nur bei Infizierung bekanntgegeben</details> | <details><summary><b>Anonymisierung</b></summary>der Seed ist der einzige konstante und zur Identifikation nutzbare Datenwert, dieser ändert sich jedoch täglich und wird dem Server nur bei Infizierung bekanntgegeben</details> |
| <details><summary><b>Wer kann aus der BLE-ID eine User-ID zurückrechnen?</b></summary></details>  | <details><summary><b>Server</b></summary>Die BLE-ID ist eine symmetrisch verschlüsselte User-ID</details> | <details><summary><b>es gibt keine User-ID</b></summary> und die Seeds sind nicht zurückrechenbar</details> | <details><summary><b>es gibt keine User-ID</b></summary> und die Seeds sind nicht zurückrechenbar</details> |
| <details><summary><b>Identifizierung der App-User durch Server (Zuweisung von ID's)</b></summary>Die Zuweisung und Anzahl der temporären und nichttemporären ID's und die Methode, die auf dem Server angewendet wird, um den Benutzern ihre Appdaten zuweisen zu können, ohne die als Person indefizieren zu können.</details>  | <details><summary><b>1 User-ID/mehrere BLE-IDs/ein Push-ID</b></summary>Der Nutzer bekommt eine einzigartige User-ID (Permanent pseudonym of the app), womit er auf dem Backend indentifizert werden kann, die Push-ID wird nur auf dem Backend gespeichert. Dazu bekommt der Nutzer auch mehrere BLE-ID, die er bei dem BLE-Broadcasting schickt, zusammen mit einem Timestamp, sodass er danach mithilfe dieser BLE-ID und dem Timestamp auf dem Server indentifiziert werden kann und von dem Push-Notification Service mit Hilfe seiner Push-ID benachrichtigt werden kann. Der Nutzer bekommt niemals sein User-ID, aber die BLE-IDs werden ihm zugeteilt und zur Nutzung für einem bestimmten Zeitraum gestellt, danach werden neue BLE-IDs für den selben Nutzer vom Server erstellt (bei vorhandener Internetverbindung) und das widerholt sich, sodass es nicht möglich ist, dass der Nutzer von anderen Nutzer mithilfe des BLE-IDs indentifizert wird.  </details> | <details><summary><b>Nein</b></summary>Die BLE-IDs werden nicht vom Server generiert bzw. wenn der Server die erhält, ist schon eine neuer Seed auf der Userapp generiert worden</details> | <details><summary><b>Nein</b></summary>Die BLE-IDs werden nicht vom Server generiert bzw. wenn der Server die erhält, ist schon eine neuer Seed auf der Userapp generiert worden. Beim Abfragen der infizierten ID's hat eine App jedes mal eine andere ID, ist also vom Server aus nicht zu identifizieren</details> |
| <b>Kontakt-Graph-Generierung möglich</b>  | <details><summary><b>ja</b></summary>Alle Nutzer haben permanente User-IDs, bei hochladen der Infizerung kennt der Server die permanten User-IDs der Infizierten + aller seiner Kontakte</details> | <details><summary><b>Nein</b></summary>weil nur eigene IDs hochgeladen werden.</details> | <details><summary><b>Nein</b></summary>weil nur eigene IDs hochgeladen werden. Bei Zweit-Kontakt-Verfolgung wird durch Zero-Knowledge-Proof verhindert, dass Rückschlüsse auf den begeneten Infiziertem gemacht werden können. </details> |

## Ideen für weitere Kriterien
manche Kriterien sind schwer kurz zu fassen/objektiv zu beschreiben
hier ein paar Ansätze die noch zu klären sind:

**Features:**
was kann alles mit den erhoben Daten gemacht werden:
Kontakt-tracking, Zweitkontakttracking, Kontaktgraph, Statistiken?,

**Sicherheit:**
sind Daten geschützt vor diebstahl?, manipulation?, überschwemmen des Systems mit Falschinformationen?,
kann ich rausfinden welche BLE-ID zu einem Infiziertem gehört?
Was könnte passieren wenn Server/App gehackt wird?


# Quellen
* [DP-3T Whitepaper](https://github.com/DP-3T/documents/blob/master/DP3T%20White%20Paper.pdf)
* [PEPP-PT](https://github.com/pepp-pt/pepp-pt-documentation/blob/master/10-data-protection/PEPP-PT-data-protection-information-security-architecture-Germany.pdf)
* [DCTS](https://gitlab.lrz.de/contactum/documents/-/blob/master/DCTS.pdf)
* [BLE-Mac-Nachvollziehen](https://stackoverflow.com/questions/41708067/randomize-mac-address-bluetooth-le-broadcast)

            `}
        />
      </div>
    );
  }
}
export default Vergleich;
