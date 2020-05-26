Es handelt sich um ein internationales Konsortium, die daran interessiert sind, sicherzustellen, dass jede Technologie zur Nahbereichsverfolgung nicht dazu führt, dass Regierungen Überwachungskapazitäten erhalten. Das Konsortium wird von der EPFL in der Schweiz von Prof. Carmela Troncoso geleitet.

* Webseite/Github-Repo: https://github.com/DP-3T
* Konzept: https://github.com/DP-3T/documents/blob/master/DP3T%20White%20Paper.pdf

## Einführung
#### Decentralized Privacy-Perserving Proximity Tracing

DP-3T ist ein Vorschlag für ein Sicherheit- und Privatsphäre-wahrendes System zum Proximity Tracing, das eine technologische Grundlage für die Verlangsamung der Ausbreitung des SARS-CoV-2-Virus schaffen soll, wenn es in großem Maßstab eingesetzt wird. Das Projekt wurde unter anderem von Forschern der [École Polytechnique fédérale de Lausanne](https://www.epfl.ch/) und der [ETH Zürich](https://ethz.ch) ins Leben gerufen.
Die Zielsetzung des Projektes ist es die Benachrichtigung von Nutzern, die mit Infizierten in Kontakt gekommen sind, zu vereinfachen und beschleunigen.
Dieses System bietet eine Lösung zur Wahrung der Privatsphäre und Sicherheit für Einzelpersonen und Gemeinschaften, indem es ein Höchstmaß an Datenschutz gewährleistet.

Das Hauptziel des Proximity Tracings besteht darin, die Menschen zu benachrichten, wenn sie in unmittelbarer physischer Nähe einer infizierten Person waren, ohne die Identität des Kontakts oder den Ort, an dem dieser Kontakt stattgefunden hat, preiszugeben. 
Dieses Ziel wird dadurch erreicht, dass Menschen sich freiwillig melden können, wenn bei ihnen das COVID-Virus diagnostiziert wurde. Dies sollte nur mit der Zustimmung einer Gesundheitsbehörde und der ausdrücklichen Erlaubnis des Benutzers erfolgen. Wenn der Benutzer nichts hochgeladen hat, bleiben alle Daten ausschliesslich auf dem Smartphone des Benutzers.
Benutzer, die dieses System verwenden, führen eine Smartphone-App aus, die eine häufig wechselnde, kurzlebige ID _(ephemeral identifier - EphID)_ broadcastet, die den Benutzer repräsentiert, und auch EphIDs aufzeichnet, die von Smartphones in unmittelbarer Nähe beobachtet werden. Die App kann die anonymen Daten vom Server verwenden, um lokal zu berechnen, ob sich der Benutzer der App in physischer Nähe zu einer infizierten Person befand. Stellt die App ein hohes Risiko fest, dass eine Begegnung zu einer infizierten Person stattgefunden hat, informiert sie den Benutzer.
Keine Aussagen lassen sich treffen über den genauen Ort des Kontaktes sowie über die Identität des Infizierten. 
Darüber hinaus ermöglicht das System den Benutzern, Gesundheitsexperten auf freiwilliger Basis und unter Wahrung der Privatsphäre Informationen zur Verfügung zu stellen.

Das System bietet die folgenden Sicherheits- und Datenschutzvorkehrungen:

#### Minimierung der Daten
* Der zentrale Server beobachtet nur anonyme Identifikatoren von infizierten Personen.
* Die Gesundheitsbehörden erfahren keine weiteren Informationen, außer wenn ein Benutzer sich an sie wendet.

#### Kein Missbrauch von Daten
* Verschiedene Entitäten im System erhalten die erforderliche Mindestmenge an Informationen. Keine von ihnen kann die Daten für andere Zwecke missbrauchen.

#### Keine Verfolgung nicht infizierter Benutzer
* Nicht infizierte Benutzer können von keiner Entität auf der Grundlage von gesendeten EphIDs verfolgt werden.

#### Automatische Löschung
* Das System wird sich nach dem Ende der Epidemie selbst zerstören. Daten auf dem Server werden nach 14 Tagen entfernt.

Sowohl Google als auch Apple bauen auf der Arbeit von DP-3T bei der [Bereitstellung von API Schnittstellen auf](https://www.welt.de/wirtschaft/article207653833/Corona-App-Google-und-Apple-liefern-deutsche-Entwickler-muessen-nachziehen.html). In Deutschland sollen auf dieser Basis die Deutsche Telekom und SAP eine [nationale Contact Tracing App entwickeln](https://www.handelsblatt.com/technik/it-internet/tracking-app-telekom-und-sap-bauen-corona-app/25784264.html?ticket=ST-2195263-mWbD9vC4K5pCbK1YLxEA-ap6).  

## Grafik
![](https://i.imgur.com/s1i2Tm1.png)

## Klassendiagramm (Struktur-UML)
![](https://i.imgur.com/7btKKey.png)

## Sequenzdiagramm (Verhaltens-UML)
![](https://i.imgur.com/xo2a3Wd.jpg)
![](https://i.imgur.com/4No8xf0.jpg)

# Quellen
* [DP-3T Whitepaper](https://github.com/DP-3T/documents/blob/master/DP3T%20White%20Paper.pdf)
