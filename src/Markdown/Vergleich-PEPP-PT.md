PEPP-PT ist eine Organisation, die in der Schweiz als gemeinnützige Organisation gegründet wurde, um eine Lösung zu finden, die sich an europäische Gesetze und Grundsätze zum Schutz der Privatsphäre und des Datenschutzes hält.  Das PEPP-PT-Team, das am 31. März 2020 mehr als 130 Mitglieder in acht europäischen Ländern zählt.

* Webseite: https://www.pepp-pt.org/
* Github-Repo: https://github.com/pepp-pt/
* Konzept: https://github.com/pepp-pt/pepp-pt-documentation/blob/master/PEPP-PT-high-level-overview.pdf

Weiterführende Informationen:
* [Offener Brief des CCC und weiterer Organisationen gegen eine zentralistische Corona-App.](https://www.ccc.de/system/uploads/299/original/Offener_Brief_Corona_App_Bundeskanzleramt.pdf)
* Zeit-Online hat [den Initiator des PEPP-PT-Projektes](https://www.zeit.de/digital/datenschutz/2020-04/corona-app-it-unternehmen-hans-christian-boos/seite-3), den Unternehmer Christian Boos, interviewt. Es werden dabei einige Kritikpunkte benannt. (18.04.2020)
* [Artikel von Netzpolitik/Chris Köver](https://netzpolitik.org/2020/diese-handy-technologie-soll-covid-19-ausbremsen/) (01.04.2020)

----------------------------------------------
Architekturdiagram

![Architekturdiagram](https://user-images.githubusercontent.com/1636532/81082424-94087200-8ef3-11ea-8dc8-cc556f2705ea.png)
Kommunikationsdiagram

![Kommunikationsdiagram](https://user-images.githubusercontent.com/1636532/80861428-cd7c7b80-8c6e-11ea-9222-cc9deae3f7ef.png)

* Permanente User ID (PUID): wird vom Server erzeugt, kennt nur der Server und der entsprechende Nutzer
* PushNotification ID (PID): wird vom Nutzer erzeugt, wird vom Server verwendet, um den Nutzer zu benachrichtigen, damit dieser nicht regelmäßig nachfragen muss
* temporäre Bluetooth IDs: werden vom Server aus PUID und Secret-Key erzeugt, der Server kann aus der temporären Bluetooth ID auch wieder die PUID berechnen
* TAN für Gesundheitsamt: dies ist der empfohlene Vorschlag für genehmigen des Hochladens, in [PEPP-PT-stop-corona-app-de-tan.pdf](https://github.com/pepp-pt/pepp-pt-documentation/blob/master/10-data-protection/PEPP-PT-stop-corona-app-de-tan.pdf) ist noch eine andere Variante erklärt.

## Kritik an PEPP-PT
Der Chaos Computer Club (CCC) übt in einem [offenen Brief](https://www.ccc.de/system/uploads/299/original/Offener_Brief_Corona_App_Bundeskanzleramt.pdf) an Kanzleramtsminister Helge Braun Kritik an PEPP-PT.
Vor allem wird der Datenschutz des Softwaregerüsts kritisiert. Auch kritisiert der CCC, dass im Zuge der Diskussion um die App Erwartungen geschürt werden, die womöglich nicht eingehalten werden können und bittet darum, dass sich die Entscheidungsträger für eine Lösung entscheiden, die von den Anbietern der Smartphonebetriebssysteme auch unterstützt werden.  
Der CCC favorisiert eine dezentrale Lösung warnt davor, dass bei einer zentralen Lösung wie PEPP-PT der damit verbundenen fehlende Datenschutz zusammen mit einem fehlenden technischen Schutz vor Zweckentfremdung der Daten zu einer fehlenden Akzeptanz führen kann. Außerdem sie eine Deanonymisierung von infizierten Personen bei einem dezentralen Ansatz deutlich aufwändiger als bei einem Zentralen.  
Der CCC bittet darum, dass durch transparente Konzepte, einer quelloffenen Programmierung und die Zusammenarbeit mit Google und Apple die Erfolgschancen der App zu erhöhen.

## Probleme im Detail
Die temporären Bluetooth-IDs werden vom Server im voraus für z.B. 2 Tage generiert, d.h. der User braucht regelmäßig min. in diesem Abstand eine Internetverbindung, damit die App weiter funktioniert.
Ein bestätigter Infizierter lädt nicht nur eigene Daten hoch, sondern auch die temporären Bluetooth-IDs der Personen denen er begegnet ist. Diese können vom Server entschlüsselt werden, wodurch der Server genau weiß, welche Nutzer Kontakt haben. Dies ist ein wesentlicher Unterschied zu anderen Vorschlägen, wo nur ein Nutzer selber weiß, ob er Kontakt hatte oder nicht.
