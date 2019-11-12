# Wohngeldrechner

## Build
1. [nodejs](https://nodejs.org/en/download/) installieren, falls nicht vorhanden

2. abhängige Pakete installieren
```
npm install
```

3. Webseite in *build/* Ordner erzeugen
```
npm run-script build
```

## Anpassen
Diese Seite benutzt [metalsmith](https://github.com/segmentio/metalsmith). Content sowie layouts werden im  [pug](https://pugjs.org) Format gepflegt. Der resultierende HTML-Code wird automatisiert erzeugt (siehe **Build**).

Verzeichnisstruktur:
```
source/     - .pug Datei(en) mit Content - jeder ist ein Layout zugeordnet
    index.puq
layout/     - vorhandene .pug Layouts, in denen der Content eingebettet wird
build/      - wird durch **Build** erzeugt und enthält die resultierenden *.html Dateien
```
