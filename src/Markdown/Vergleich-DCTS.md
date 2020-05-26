Kontaktverfolgungsdienst von der TU München.

* Webseite: ???
* Konzept: https://gitlab.lrz.de/contactum/documents/-/blob/master/DCTS.pdf
* App: https://github.com/ito-org

Laut Webseite findet hier eine Kooperation mit ito statt und es gibt eine [App](https://www.ito-app.org/). Es sind mehrere Professoren der TU München involviert.

## Ziele
* Fairness, Transparenz, gesetzesgemäß nach DSGVO
* Beschränkung möglicher Anwendungszwecke: Daten sollen nur für  spezifizierte, explizite und rechtmäßige Zwecke verwendet werden und für keine weiteren Zwecke
* Datenminimalisierung: Daten sollen nur insoweit erfasst werden, wie es geradeso für die Anwendung nötig ist, zu dessen Zweck die Daten produziert wurden
* Genauigkeit: Daten müssen aktuell gehalten werden und bei Veraltung - im Kontext des Zieles, wofür sie erfasst wurden - korrigiert oder gelöscht werden
* Aufbewahrungsbeschränkung: Daten dürfen nicht länger als irgendwie nötig aufbewahrt werden
* Integrität und Vertraulichkeit: Die Daten dürfen nicht von unauthorisierten Parteien verändert oder ausgelesen werden und müssen mit angebrachten technischen Mitteln davor geschützt werden

## Technischer Ansatz
Diskutieren Sie den gewählten technischen Ansatz und beschreiben diesen Ansatz im Detail im Wiki.

Das Konzept sieht einen dezentralen Ansatz vor.

Stetig wird per Bluetooth eine sich mithilfe eines privaten keys stetig ändernde ID an andere Geräte gesendet. Diese speichern diese ID mit einem Timestamp ab.  
 
Wenn eine Diagnose aufgetreten ist, wird entweder von einem Artzt, durch Regenerierung der ID's mithilfe des privaten keys vom Patienten, oder vom Patienten selbst seine ID auf einen zentralen Server hochgeladen

Andere Nutzer der App können die aktuellen gemeldeten ID's vom Server pollen und mit ihren gespeicherten vergelichen. Sollte eine Übereinstimmung vorliegen, werden Sie informiert und haben die Möglickleit auch ihre ID's hochzuladen.
Diese können dann von anderen Nutzern gefunden werden, die die Information bekommen, dass sie in zweiter Instanz Kontakt hatten.

Die gesammte Kommunikation mit dem Server funktioniert verschlüsselt und Datensparsam mittels eines Bloom-Filters.

## Zugrundliegende Architektur
![Architecture](https://user-images.githubusercontent.com/4459428/80650567-87f45e80-8a74-11ea-950a-8a833e935226.png)
## Generellen Kommunikationsablauf
![uml_DCTS (3)](https://user-images.githubusercontent.com/4459428/80958477-6513d280-8e05-11ea-8d63-14c65dbe8d31.png)