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

**Hinweis**: Alle Tabellen sind interaktiv, wobei sich die Detailbeschreibungen durch Klick auf das Dreieck &#9656; aus- bzw. &#9662; einklappen lassen.

### Abkürzungen
**User-ID:** permanente ID die zu einem User zugeordnet ist (nur PEPP-PT)

**Push-ID:** Push-Notification-ID (nur PEPP-PT)

**BLE-ID:** temporäre (<=1 Stunde) Bluetooth-ID

**Seed:** temporärer (z.b. 1 Tag) Key zum erzeugen von BLE-IDs (nur DP3T, DCTS)

## Architektur

### Zugrundeliegendes Prinzip
Das zugrundeliegende Prinzip beschreibt den technologischen Standard, nach welchem die Daten ausgetauscht und gespeichert werden. Das Prinzip ist sehr ausschlaggebend für für den Grad des Datenschutzes, weswegen man mittlerweile in zwei Hauptströme unterscheiden kann: dem **zentralem Prinzip** und dem **dezentralem Prinzip**.

Weiterführender Artikel: [netzpolitik.org](https://netzpolitik.org/2020/welche-technologie-bietet-den-besseren-datenschutz/)

### Ort der Speicherung der IDs
Der Ort der Speicherung der IDs gibt an, wo die Ephermal IDs (kurz: IDs), respektive die sich stetig erneurnden IDs, gespeichert werden. Je nach Prinzip werden die IDs entweder direkt auf dem Smartphone des App-Users oder auf einem zentralem Server gespeichert. Eine Ephermal ID wird aus dem privaten Seed Key eines Smartphones zu einem bestimmten Zeitpunkt **t** berechnet.

## Ort der Berechnung
Der ort der Berechnung gibt an, auf welcher Instanz die Infektionsrisikoberechnung erfolgt. Je nach Instanz wird die Privatssphäre der App-User mehr oder weniger eingeschränkt.

Ein Argument, welches von Befürwortern einer zentralisierten Tracing-App angebracht wird ist, dass die Forschung noch mehr Daten (Kontaktinformationen) brauche, um umfangreiche wissenschaftliche Analysen vonehmen zu können. Verfechter der dezentralisierten Tracing-Apps wiederum kritisieren das sammeln von zusätzlichen Daten und erstellen von Kontakt-Graphen über zentrale Recheneinheiten.

## Verfahren bei Aktualisierungen
Das Verfahren bei Aktualisierungen gibt an, wie einfach bzw. problematisch bspw. ein Update der App gespielt werden kann.

| Kriterium  | PEPP-PT      | DP3T         | DCTS          |
| -----------| -------------| -------------| -------------|
| <details><summary><b>Zugrundeliegendes Prinzip</b></summary>...beschreibt den tehnologischen Standard, nach welchem die Daten ausgetauscht und gespeichert werden.</details>  | <details><summary><b>Zentral</b></summary>Daten werden zentral auf einem Server oder ein Backend an Servern gespeichert.</details> | <details><summary><b>Dezentral</b></summary>Daten werden dezentral auf den Smartphones der App-User gespeichert.</details> | <details><summary><b>Dezentral</b></summary>Daten werden dezentral auf den Smartphones der App-User gespeichert.</details> |
| <details><summary><b>Ort der Speicherung der IDs</b></summary>...gibt an, wo die Ephermal IDs (kurz: IDs), respektive die sich stetig erneurnden IDs, gespeichert werden.</details>  | <details><summary><b>Server</b></summary>Daten werden zentral auf einem Server oder ein Backend an Servern gespeichert.</details> | <details><summary><b>Smartphone</b></summary>Daten werden dezentral auf einem Server oder ein Backend an Servern gespeichert.</details> | <details><summary><b>Smartphone</b></summary>Daten werden dezentral auf einem Server oder ein Backend an Servern gespeichert.</details> |
| <details><summary><b>Ort der Berechnung</b></summary>...gibt an, wie einfach bzw. problematisch bspw. ein Update der App gespielt werden kann.</details>  | <details><summary><b>Server</b></summary>Infektionsrisikoberechnung erfolgt auf einer zentralen Recheneinheit.</details> | <details><summary><b>Smartphone</b></summary>Infektionsrisikoberechnung erfolgt auf dem jeweiligen Smartphone des App-Nutzers.</details> | <details><summary><b>Smartphone</b></summary>Infektionsrisikoberechnung erfolgt auf dem jeweiligen Smartphone des App-Nutzers.</details> |
| <details><summary><b>Verfahren bei Aktualisierungen</b></summary>...gibt an, auf welcher Instanz die Infektionsrisikoberechnung erfolgt.</details>  | <details><summary><b>Broadcast an alle Geräte</b></summary>Zentrale Server entsendet das Update an alle Geräte.</details> | <details><summary><b>Pull je Gerät</b></summary>Die Nutzer\*innen der App müssen dem Update manuell zustimmen.</details> | <details><summary><b>Pull je Gerät</b></summary>Die Nutzer\*innen der App müssen dem Update manuell zustimmen.</details> |

## Kommunikationsablauf
### Verschlüsselung der Kommunikation
Hier sollte man erklären welches Prinzip bei der Übertragung der Daten verwendet wird.Darunter sollte man verstehen nicht die eigentliche Kriptierung der Datenmenge, sondern den ganzen Ablauf, der zu dem sicheren Kommunikation zwischen zwei Akteuren/Оbjekten im System beibringt. Dieses Transfer von Datenmengen kann zwischen dem Server und das App oder zwischen zwei Instanzen des Apps auf zwei Geräten von zwei Nutzer stattfinden.  

### Art der Benachrichtigung (Push VS Poll)
Die Frage, ob man die Information auf dem Server hochlädt (ein Push macht) oder die Daten vom Server local auf seinem Händy herunterlädt (ein Pull macht).

### Identifizierung der App-User durch Server (Zuweisung von ID's)
Die Zuweisung und Anzahl der temporären und nichttemporären ID's und die Methode, die auf dem Server angewendet wird, um den Benutzern ihre Appdaten zuweisen zu können, ohne die als Person indefizieren zu können.

### Übertragene Datenmenge (Bloom-Filter)
Im Unterschied zu dem Verschlüsselung der Kommunikation sollte sich man hier sich mehr auf die Verschlüsselung der Daten und der eigenlichen Typ der Daten Gedanken machen, die übertragen werden.

### Hochgeladene Informationen zum Server

### Heruntergeladene Informationen vom Server

### Bestätigung der Infizierung (durch bspw. Arzt/KH/Labor)
Die Bestätigung der Infizierung erfolgt auf verschiedenen Weisen (z.B. der Nutzer ladet seine Daten mithilfe eines TAN Verfahrens oder ein Labor ladet die Daten nach der Feststellung der Infezierung). In diesem Abschnitt wird die Herangehensweise dafür erwähnt.

### Interoperabilität mit anderen Apps / Ansätzen
Die Möglichkeit soll bestehen, dass zwei Nutzer BLE Signals zur Proximity tracing unabhängig von dem heruntergeladenen App empfangen werden können. Dieser Punkt ist wichtig, weil es ist zu erwarten, dass in den verchiedenen Ländern, verschiedene Apps benutzt werden (da man verschiedene Anforderungen zur Privatsphäre und Features haben kann), aus dem Grund sollte man unabhängig davon Interoperabilität auf internationale Ebene/ zwischen verschiedenen Apps erlauben.

### Ausgetauschte IDs
Welche IDs werden zwischen zwei Nutzergerätenapps ausgetauscht. Hier geht es nicht mehr um den Austausch mit dem Server, sondern mehr um den Austausch zwischen zwei Endgeräten und wie die IDs der Kontaktpersonen gesammelt werden.

### Benachrichtigung der User*innen
Sollte die Benachrichtigung automatisch erfolgen (z.B. mit Hilfe eines Push-Notification Service, die schon die Kontaktpersonen auf dem Backend speichert) oder nur wenn der Nutzer die nach der Infezierung freiwillig hochlädt.

### GPS-Tracing
Sollte GPS-Tracing auch über das App erfolgen.

### BLE-Nutzung
Wird Bluetooth Low Energy in diesem Ansatz als Haupttechnologie verwendet.

### MAC-Adressen-Übertragung
Werden MAC-Adressen bei dem Verfahren während der Kommunikation zwischen zwei Akteure bekanntgegeben.

### Zweitkontaktverfolgung
Ist es möglich Zweitkontaktverfolgung zu ersetzen,welcher Ansatz wird bei der Zweitkontaktverfolgung verwendet und unter welchen Umständen (ist es mit der Zustimmung des ersten Kontaktpersons oder nicht).

| Kriterium  | PEPP-PT      | DP3T         | DCTS          |
| -----------| -------------| -------------| -------------|
| <details><summary><b>Verschlüsselung der Kommunikation</b></summary>Hier sollte man erklären welches Prinzip bei der Übertragung der Daten verwendet wird.Darunter sollte man verstehen nicht die eigentliche Kriptierung der Datenmenge, sondern den ganzen Ablauf, der zu dem sicheren Kommunikation zwischen zwei Akteuren/Оbjekten im System beibringt. Dieses Transfer von Datenmengen kann zwischen dem Server und das App oder zwischen zwei Instanzen des Apps auf zwei Geräten von zwei Nutzer stattfinden.</details>  | <details><summary><b>TLS/OAuth2.0/Open Broadcast</b></summary>TLS Serverauthentizierung mit Hilfe OAuth2.0 Tokens verwendet bei der Kommunikation zwischen - Backend/App, Backend/Push-Notification service (keine Payload-dateien übertragen, nur als Signalmechanism verwendet),Gesundheitsamtmitarbeiter oder Laboren/Backend. Broadcast kann nur zwischen zwei Apps verwendet werden und ist keine gesicherte Kommunikation.</details> | <details><summary><b>Private key Kodierung (Seed) / BLE-ID Spreading with Secret sharing<</b></summary>Bei dem Kommunikation mit dem Backend wird es nicht explizit erwähnt, was für Verschlüsselungsmechanismen benutzt werden. Trotzdem sollte jeder Nutzer ein Geheimschlüssel zur Erstellung seiner BLE-IDs (EphIDs) in seinem App haben und die wurde dem Server nur dann bekanntgegeben, wenn der Nutzer infeziert wurde, danach wird ein neues Geheimschlüssel von dem App automatisch erstellt.Dies könnte auf 2 Weisen erfolgen, entweder wird das Geheimschlüssel zusammen mit einem Zeitraum t geschickt. Für die sichere Kommunikation zwischen zwei BLE-Geräte wird eine EphID Spreading with Secret sharing Verfahren verwendet. Dies erfolgt über ein k von n Secret-sharing-Schema. Anstatt jeder EphID innerhaalb von einem Beacon zu schicken, sollte es in n Teilen kodiert werden, sodass es nur dann möglich ist das EphID zu rekonstruiren, wenn mindestens k Teile der Kodierung vorhanden sind.</details> | <details><summary><b>Asymetrische Verschlüsselung und TOR</b></summary>Upload geschieht über TOR. Beim Download der Daten vom Server, werden nur daten durch asymetrische und kommutativer Verschlüssselung ausgetauscht</details> |
| <details><summary><b>Art der Benachrichtigung (Push vs. Poll)</b></summary>Die Frage, ob man die Information auf dem Server hochlädt (ein Push macht) oder die Daten vom Server local auf seinem Händy herunterlädt (ein Pull macht).</details>  | <details><summary><b>Push</b></summary>Wenn ein Nutzer als coronapositiv klassifiziert wurde, sollte er alle seine gespeicherten EBIDs mit Timestamps an dem Backend schicken. Da erfolgt erstmal eine Risikoschätzung um zu verstehen welche Kontakte könnten ins Risiko sein und demnächst werden die benachrichtigt. Dies ist genau das Prinzip eines Push-Verfahrens.Das Polling kann nur nach einer Benachrichtigung von dem Push-Notification Service erfolgen. </details> | <details><summary><b>nicht Spezifiziert eher Pull</b></summary>Der Server hält die Secret-keys der Infizierten vor und "schickt" diese an die Apps</details> | <details><summary><b>Poll</b></summary>Der nutzer fragt beim Server ein aktuelle Liste der Infizierten ab.</details> |
| <details><summary><b>Identifizierung der App-User durch Server (Zuweisung von ID's)</b></summary>Die Zuweisung und Anzahl der temporären und nichttemporären ID's und die Methode, die auf dem Server angewendet wird, um den Benutzern ihre Appdaten zuweisen zu können, ohne die als Person indefizieren zu können.</details>  | <details><summary><b>1 User-ID/mehrere BLE-IDs/ein Push-ID</b></summary>Der Nutzer bekommt eine einzigartige PUID (Permanent pseudonym of the app), womit er auf dem Backend indentifizert werden kann, das PUID wird nur auf dem Backend gespeichert. Dazu bekommt der Nutzer auch mehrere EPIDs (Ephemeral pseudonym for the app for time slot t), die er bei dem BLE-Broadcasting schickt, zusammen mit einem Timestamp, sodass er danach mithilfe dieser EPID und der Timestamp im Not auf dem Server indentifiziert werden kann und von dem Push-Notification Service mit Hilfe seiner PID (Push ID) benachrichtigt werden kann (im Fall eines Kontakt mit infeziertem Person). Der Nutzer bekommt niemals sein PUID, aber die EPIDs werden ihm zugeteilt und zur Nutzung für einem bestimmten Zeitraum gestellt, danach werden neue EPIDs für den selben Nutzer vom Server erstellt (bei vorhandener Internetverbindung) und das widerholt sich, sodass es nicht möglich ist, dass der Nutzer von anderen Nutzer mithilfe des EPIDs indentifizert wird.  </details> | <details><summary><b>Nein</b></summary>Die IDs werden nicht vom Server generiert bzw. wenn der Server die erhält, ist schon ein neues ID auf dem Userapp generiert</details> | <details><summary><b>nicht möglich</b></summary>Beim Abfragen der infizierten ID's hat eine App jedes mal eine andere ID, ist also vom Server aus nicht zu identifizieren</details> |
| <details><summary><b>Übertragene Datenmenge (Bloom-Filter)</b></summary>.Im Unterschied zu dem Verschlüsselung der Kommunikation sollte sich man hier sich mehr auf die Verschlüsselung der Daten und der eigenlichen Typ der Daten Gedanken machen, die übertragen werden.</details>  | <details><summary><b>Access tokens/TAN/EPIDs/Captcha Ca/Cp/Solution(Ca)/CTD (Contact/Time data)</b></summary>Access tokens werden um die Authentifizierung des Nutzerapps vor dem Backend verwendet (OAuth2.0).Cp, Solution(Ca), Ca sind alle ein Teil des Captcha-Registrierungsverfahren/Anmeldeverfahren.Der TAN dient zur Authentizierung der Infektionsstatus.Der wird vom Nutzer generiert und vom Gesundheitsbehörde aktiviert. Die EPIDs werden dem Nutzer von Server geschickt und sind randomisiert und das CTD beeinhaltet eine Liste der EPIDs, die ein Nutzer mittels BLE-Broadcasting emfangen hat.</details> | <details><summary><b>eigenem Secret-Key, Zeitpunkt / Liste von Secrtet Keys</b></summary> Bei einer Infektion wird nur der eigene Secret Key hochgeladen. zum Abgleich erhält die App nur eine Liste von Secret Keys</details> | <details><summary><b>Liste der eigenen ID's/Liste aller infizierten ID's</b></summary>Beim Upload im Falle einer Infektion wird die Liste aller eigenen ID's der letzten Tage hochgeladen. Beim Heruterladen wird um Bandbreite zu sparen das Packet der Iniziertern Id's mit einem Bloom Filter (Hash) verkleinert </details> |
| <summary><b>Hochgeladene Daten zum Server</b></summary>| <summary><b>BLE-ID,Push-ID</b></summary> | <summary><b>Seed und Tag t</b></summary>| <summary><b>BLE-IDs Liste</b></summary> |
| <summary><b>Heruntergeladene Daten vom Server</b></summary>| <summary><b>PID (für die Benachrichtigung)</b></summary> | <summary><b>Seed und Tag t</b></summary> | <summary><b>BLE-IDs Liste</b></summary> |
| <details><summary><b>Bestätigung der Infizierung (durch bspw. Arzt/KH/Labor)</b></summary>Die Bestätigung der Infezierung erfolgt auf verschiedenen Weisen (z.B. der Nutzer ladet seine Daten mithilfe eines TAN Verfahrens oder ein Labor ladet die Daten nach der Feststellung der Infezierung). In diesem Abschnitt wird die Herangehensweise dafür erwähnt.</details>  | <details><summary><b>ТAN Verfahren</b></summary>Nutzer generiert ein TAN,das von der Gesundheitsbehörde auf dem Backend aktiviert wird, womit der Nutzer freiwillig sein Infektionsstatus und CTD auf dem Server hochladen kann.</details> | <details><summary><b>TAN Verfahren</b></summary>Beim Test erhält der Patient einen TAN, der nach dem positiven Befund freigeschaltet wird </details> | <details><summary><b>TAN Verfahren, oder Regenerierung der ID's</b></summary>Entwerder hat die App durch die TAN die Erlaubnis, die DAten an dern Server zu senden, oder der Schlüssel, der zur Generierungder ID's genutzt wurde, wird einer Dritten Person z.B. per QR-Code übertragen, damit diese diese die ID's für sich generieren und hochladen kann. </details> |
| <details><summary><b>Interoperabilität mit anderen Apps / Ansätzen</b></summary>Die Möglichkeit soll bestehen, dass zwei Nutzer BLE Signals zur Proximity tracing unabhängig von dem heruntergeladenen App empfangen werden können. Dieser Punkt ist wichtig, weil es ist zu erwarten, dass in den verchiedenen Ländern, verschiedene Apps benutzt werden (da man verschiedene Anforderungen zur Privatsphäre und Features haben kann), aus dem Grund sollte man unabhängig davon Interoperabilität auf internationale Ebene/ zwischen verschiedenen Apps erlauben. </details>  | <details><summary><b> Ja</b></summary>Dies wird erreicht, indem man verschiedene Backend services und Verfahren zur Generierung des EPIDs and PUIDs verwenden könnte, außerdem verschiedenes App in jedem Land. Es sollte möglich sein nachvollzuziehen aus welchem Land ein EBID ursprunglich kommt, dafür sollte ein ECC (encrypted country code) in jedem EBID enkodiert sein.Wenn eine Backend-Dienstleistung eine EPID nicht erstellt hat, dann kann es die EPID zu keinem entsprechenden PID enkryptieren. Die verschiedenen Backenddienstleistungen sollten miteinander kommunizieren können, damit alle EPIDs am ende mit dem entsprechenden PIDs benachrichtigt werden können. Die Risikoschätzung erfolgt auf dem Home-Dienstleistung und nur die Home-Dienstleistung sollte entscheiden, ob ein Nutzer benachrichtigt werden soll. </details> | <details><summary><b>Mit anderen Ländern</b></summary>Durch manuelle Eingabe oder GPS, sollen immer die Server angesteuert werden, in deren Ländern sich die Person aufgehalten hat</details> | <details><summary><b>keine Angabe</b></summary>Dafür müsten die Spezifikation zur Generierung von Schlüsseln einheitlich sein</details> |
| <details><summary><b>Ausgetauschte IDs</b></summary>Welche IDs werden zwischen zwei Nutzergerätenapps ausgetauscht. Hier geht es nicht mehr um den Austausch mit dem Server, sondern mehr um den Austausch zwischen zwei Endgeräten und wie die IDs der Kontaktpersonen gesammelt werden.</details>  | <details><summary><b>EPIDs</b></summary>Die Apps sammeln nur EPIDs mithilfe BLE-Broadcasting</details> | <details><summary><b>EphID</b></summary>Austausch via BLE-Broadcasting</details> | <details><summary><b>ID's</b></summary>Austausch via BLE-Broadcasting</details> |
| <details><summary><b>Benachrichtigung der User*innen</b></summary>Sollte die Benachrichtigung automatisch erfolgen (z.B. mit Hilfe eines Push-Notification Service, die schon die Kontaktpersonen auf dem Backend speichert) oder nur wenn der Nutzer die nach der Infezierung freiwillig hochlädt.</details>  | <details><summary><b>Automatisch (Push-Notification Service)</b></summary>Die Benachrichtitgung der Nutzer erfolgt automatisch mit Hilfe einer Push-Notification Service, nachdem die Risikoschätzung und Proximity measurment auf dem Backend für die CTD der infezierten Nutzer, die eine Liste von EPIDs beeinhaltet hochgeladen wurde. Ein nichtinfeziertes Userapp pollt nach der Benachrichtigung der Push-Notification Service im Hintergrund das Backend-Service um die Infektionsstatus zu bekommen.</details> | <details><summary><b>manuell</b></summary>Erst nach dem Upload der eigenen Secret Keys können andere Personen benachrichtigt werden</details> | <details><summary><b>manuell</b></summary>Erst nach dem Upload eigener ID's können andere Personen benachrichtigt werden</details> |
| <details><summary><b>GPS-Tracing</b></summary>Sollte GPS-Tracing auch über das App erfolgen.</details>  | <details><summary><b>Nein</b></summary>Es sollte keine Lokalisierung und Tracing mittels GPS stattfinden. Auch die Indentifizierung der Backenddienstleistung für die verschiedenen Länder erfolgt über die EPIDs und die Informationen, die in dennen kriptiert wurden.</details> | <details><summary><b>optional</b></summary>Kann benutzt werden um zu erkannen in welchem Land die App ist</details> | <details><summary><b>Nein</b></summary>Keine Nutzung vorgesehen</details> |
| <details><summary><b>BLE-Nutzung</b></summary>Wird Bluetooth Low Energy in diesem Ansatz als Haupttechnologie verwendet.</details>  | <details><summary><b>Ja</b></summary>Das eigene EPID in dem Zeitpunkt wird mittels BLE broadcastet und EPIDs von anderen werden mittels BLE empfangen.</details> | <details><summary><b>Ja</b></summary>Die eigene EphID in dem Zeitpunkt wird mittels BLE broadcastet und EphIDs von anderen werden mittels BLE empfangen.</details> | <details><summary><b>Ja</b></summary>Zum ID-Broadcasting</details> |
| <details><summary><b>Identifizierung mit Hilfe der MAC-Adressen-Übertragung</b></summary>Werden MAC-Adressen bei dem Verfahren während der Kommunikation zwischen zwei Akteure bekanntgegeben, kann man damit ein Akteur identifizieren.</details>  | <details><summary><b>Nein</b></summary>Aus dem Grund, dass BLE verwendet wird, sollte es sowohl bei BLE beacons als auch bei normalen BLE-Geräte nicht möglich sein, dass MAC Adressen in verchiedenen Sessions in einem bestimmten Zeitraum fest und erkennbar sind. Es werden UUIDs umgetauscht, die ohne Vorbemerkung sich verändern können. Es wird aber in der Dokumentation kein solcher Aspekt erwähnt.</details> |<details><summary><b>Nein</b></summary>Aus dem Grund, dass BLE verwendet wird, sollte es sowohl bei BLE beacons als auch bei normalen BLE-Geräte nicht möglich sein, dass MAC Adressen in verchiedenen Sessions in einem bestimmten Zeitraum fest und erkennbar sind. Es werden UUIDs umgetauscht, die ohne Vorbemerkung sich verändern können. Es wird aber in der Dokumentation kein solcher Aspekt erwähnt.</details> | <details><summary><b>Nein</b></summary>Kein Tracking möglich, durch Wechsel der ID's und damit auch der Bluetooth MAC-Adressen</details> |
| <details><summary><b>Zweitkontaktverfolgung</b></summary>Ist es möglich Zweitkontaktverfolgung zu ersetzen,welcher Ansatz wird bei der Zweitkontaktverfolgung verwendet und unter welchen Umständen (ist es mit der Zustimmung des ersten Kontaktpersons oder nicht).</details>  | <details><summary><b>Keine Angabe, aber möglich</b></summary>Theoretisch ist es möglich bei diesem Ansatz Zweitkontaktverfolgung zu ersetzen, da die CTD Listen auf dem Backend mitgeteilt werden. Trotzdem ist die Benachrichtigung des zweiten Kontakts vom Risikoschätzung auf dem Server und anderen Faktoren abhängig und wird nicht in der Dokumentation erwähnt. Trotzdem wird es erwähnt, dass fehlerhafte positive Ergebnisse Auswirkung an dem geistigen Zustand des Persons haben könnte, was eigentlich gegen die Zweitkontaktbenachrichtigung sprechen, aber nicht gegen die Zweitkontaktverfolgung.</details> | <details><summary><b>Keine Angabe aber eher nein</b></summary>Der Server enthält Secret keys nur von den infezierten Personen und aus dem Grund und keine Listen der Kontakten. Auß dem Grund ist es nicht möglich, dass eine Zweitkontaktverfolgung bei dem Server stattfindet.Dieser Aspekt ist aber in der Dokumentation nicht erwähnt.</details> | <details><summary><b>Ja</b></summary>Im Entwurf vorgesehen Durch einen 'zero-knowledge proof' durch den eine Person, die Kontakt mit einer infizierten Person hatte auch Ihre ID's hochladen kann</details> |



## Privatsphäre und Transparenz
### Datenspeicherung - wo liegen welche Daten
Welche Daten gebe ich von mir preis (das ist im Prinzip das, was der Nutzer wissen will. Wie bekommen wir diese Frage formuliert/aufgeteilt, sodass der Nutzer eine klare Antwort darauf bekommt?)

### Nutzung der Daten
Wie werden meine Daten verwendet?
Kontakt-Graph-Generierung aus Daten, die auf dem Server gespeichert sind
Missbrauchsmöglichkeiten
IDEE: Werden Daten zweckgebunden erhoben/minimiert

### Sicherheit der Daten
* Wie werden meine Daten gesichert?
* Welche Angriffe sind möglich, welcher Schaden wird angerichtet?
* Kann jeder meine Daten als infiziert hochladen?
* Was passiert, wenn der Server gehackt wird?
* Was passiert, wenn meine App gehackt wird?

### Nicht-technische Vergleichskriterien (Arbeitstitel)
Mitglieder/Kompabilität
IDEE: Haltung zu OpenSource und Transparenz (schwer objektiv mit Quellen zu belegen)


| Kriterium  | PEPP-PT      | DP3T         | DCTS         |
| -----------| -------------| -------------| -------------|
| <b>Welche Daten sieht der Server-Betreiber</b> | <details><summary><b>User-IDs und Push-ID + Status (Infiziert/ Kontakt)</b></summary>Der Status Infiziert/ Kontakt mit Infiziertem ist nur bekannt, falls der Infizierte ihn hochgeladen hat.</details> | <details><summary><b>BLE-IDs infizierter Nutzer</b></summary>Nach Bestätigung durch den Arzt läd der Infizierte seine BLE-IDs hoch.</details> | <details><summary><b>BLE-IDs infizierter Nutzer + Zweitkontakte</b></summary>Nach Bestätigung durch Arzt kann der Infizierte seine BLE-IDs hochladen. Wenn ein Kontakt mit einem Infizierten bestand, kann der Nutzer entscheiden auch seine BLE-IDs als "potentiell infiziert" hochzuladen.</details> |
| <b>Welche Daten sieht die App</b>  | <b> BLE-IDs (eigene + Kontakte)</b> | <details><summary><b>Seed, BLE-IDs (eigene + Kontakte)</b></summary>Aus dem Seed, der jeden Tag gewechselt wird, können temporäre IDs erzeugt werden.</details> | <details><summary><b>Seed, BLE-IDs (eigene + Kontakte)</b></summary>Der Temporäre Seed wird täglich gewechselt, daraus werden die temporären IDs erstellt, die ausgetauscht werden.</details> |
| <details><summary><b>Wie lange werden die Daten gespeichert</b></summary>Die Datenspeicherung auf dem Server kann der Nutzer nicht prüfen, aber lokale Daten könnten z.b. per modifizierter App regelmäßig gelöscht werden.</details>| <details><summary><b>keine Angabe</b></summary></details> | <details><summary><b>keine Angabe</b></summary></details> | <details><summary><b>2-3 Wochen</b></summary>Ausgehend von der möglichen Inkubationszeit. Kann angepasst werden.</details> |
| <details><summary><b>Wer entscheidet über Datenübertragung bei Infektion?</b></summary>siehe auch Bestätigung der Infizierung</details>  | <b>Infizierter nach Authorisierung</b> | <b>Infizierter nach Authorisierung</b> | <b>Infizierter nach Authorisierung</b> |
| <details><summary><b>Wer entscheidet über Datenübertragung bei Kontakt mit Infiziertem?</b></summary>Aka Zweitkontaktverfolgung</details>  | <details><summary><b>Infizierter nach Authorisierung</b></summary>Der Infizierte lädt seine Kontakte hoch, dies ist nicht optional wenn man sich für hochladen entscheidet.</details> | <b>Daten werden nicht erhoben</b> | <details><summary><b>Kontaktperson entscheidet</b></summary>Wenn man kontakt mit einer infizierten Person hatte, so wird man darüber informiert und hat die Option seine eigenen IDs hochzuladen (siehe Zweitkontaktverfolgung)</details> |
| <details><summary><b>Wer kann aus der BLE-ID eine User-ID zurückrechnen?</b></summary></details>  | <details><summary><b>Server</b></summary>Die BLE-ID ist eine symmetrisch verschlüsselte User-ID</details> | <details><summary><b>es gibt keine User-ID</b></summary> und die Seeds sind nicht zurückrechenbar</details> | <details><summary><b>es gibt keine User-ID</b></summary> und die Seeds sind nicht zurückrechenbar</details> |
||
| <b>Kontakt-Graph-Generierung möglich</b>  | <details><summary><b>ja</b></summary>Alle Nutzer haben permanente User-IDs, bei hochladen der Infizerung kennt der Server die permanten User-IDs der Infizierten + aller seiner Kontakte</details> | <details><summary><b>Nein</b></summary>weil nur eigene IDs hochgeladen werden.</details> | <details><summary><b>Nein</b></summary>weil nur eigene IDs hochgeladen werden. Bei Zweit-Kontakt-Verfolgung wird durch Zero-Knowledge-Proof verhindert, dass Rückschlüsse auf den begeneten Infiziertem gemacht werden können. </details> |
| <details><summary><b>Pseudo- / Anonymisierung</b></summary></details>  | <details><summary><b>Pseudonymisierung</b></summary>die User-ID ist permanent und auf Server gespeichert, damit + Push-Notification-ID ist eine Identifikation möglich</details> | <details><summary><b>Anonymisierung</b></summary>der Seed ist der einzige konstante und zur Identifikation nutzbare Datenwert, dieser ändert sich jedoch täglich und wird dem Server nur bei Infizierung bekanntgegeben</details> | <details><summary><b>Anonymisierung</b></summary>der Seed ist der einzige konstante und zur Identifikation nutzbare Datenwert, dieser ändert sich jedoch täglich und wird dem Server nur bei Infizierung bekanntgegeben</details> |
||
| <b>Haltung gegenüber Open Source</b>  |<b>Wird vorgeworfen, nicht nach Transparenz zu streben.</b>| <b>Abspaltung von PEPP-PT</b> | <b>Unterstützt komplett Open-Source</b> |
| <details><summary><b>Mitglieder</b></summary>Haben bei der Erstellung Firmen mitgearbeitet, die ein kommerzielles Interesse haben können? z.B. Firmen die bereits Erfahrung mit Überwachungssoftware haben,...</details>  | <details><summary><b>viele EU-Unis/Forschungszentren</b></summary>anfangs über 130, inzwischen viele ausgetreten </details> | <b>aus PEPP-PT abgespalten</b> | <b>ito, TU München, TCN Coalition</b> |
| <details><summary><b>Kompatibilität mit Apple / Google Schnittstellen</b></summary> Key werden beim ansatz von Google/Apple lokal erzeugt, siehe auch [hier](https://techcrunch.com/2020/04/24/apple-and-google-update-joint-coronavirus-tracing-tech-to-improve-user-privacy-and-developer-flexibility/)</details>  | <details><summary><b>nein</b></summary>Die zentrale erstellung der Bluetooth-IDs ist mit der Schnittstelle nicht möglich, dadurch muss die App permanent geöffnet sein.</details> | <details><summary><b>ja</b></summary>Die Apple/Google Schnittstelle wurde stark von DP3T inspiriert/ist daran angelehnt</details> | <details><summary><b>ja</b></summary>da ähnlich zu DP3T</details> |



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
