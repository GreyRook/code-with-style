# Architektur

## Komponentendiagramm

Das Komponentendiagramm in diesem Ordner ist ein Beispiel, das auf dem [LNVA2 Player Projekt](https://git.r0k.de/rookitect/player2/tree/185e7b89561aba0fc17030be3b64662b2c2db12e) basiert.
Es beschreibt die Render-Hierarchie der React Komponenten.
Im Kontext des Browsers zeigt es die DOM-Struktur.
Das Komponentendiagramm zeigt nicht den Datenfluss zwischen Komponenten oder in welchen Komponenten andere Komponenten manipuliert werden.

### Komponentenbeschreibung

Eine Beschreibung der Funktion einer Komponente, ist als Doc-Kommentar im Quellcode jeder Komponente gegeben.
Mit Hilfe von TypeDoc lässt sich daraus eine Browser-basierte Dokumentation erzeugen (siehe [README](https://git.r0k.de/code-with-style/js/javascript-guide#how-to-doc)).

### Tool (draw.io)
Das Komponentendiagramm wurde mit Hilfe von [draw.io](https://draw.io) erstellt
und muss bei Änderung von Komponenten manuell geupdated werden.
Dafür lässt sich die Datei [component diagram.drawio](component%20diagram.drawio) in draw.io öffnen und anpassen.
Nach dem Anpassen muss außerdem noch das png-Bild aktualisiert werden.
Die Aktualität des Komponentendiagramms lässt sich anhand des Commit-Datums ablesen.
