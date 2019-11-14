# Wohnberechtigungsschein-Rechner

## Build
1. [nodejs](https://nodejs.org/en/download/) installieren, falls nicht vorhanden

2. abhängige Pakete installieren
```
npm install
node node_modules/bower/bin/bower install
```

3. Webseite in *build/* Ordner erzeugen
```
npm run-script build
```

## Anpassen
Diese Seite benutzt [metalsmith](https://github.com/segmentio/metalsmith). Content sowie layouts sind im  [pug](https://pugjs.org) Format gepflegt, welches deutlich leichter zu lesen und zu schreiben ist. Die daraus resultierenden HTML Dateien werden automatisch erzeugt.

Verzeichnisstruktur:
```
source/     - .pug Datei(en) mit Content - jeder ist ein Layout zugeordnet
    index.puq
layout/     - vorhandene .pug Layouts, in denen der Content eingebettet wird
build/      - wird erzeugt und enthält die resultierenden *.html Dateien
```

## Tutorials
[Pug Tutorial](https://codeburst.io/getting-started-with-pug-template-engine-e49cfa291e33?gi=96cf541ceda3)
