# Wolfsburg Connect

Eine hyper-lokale Nachbarschafts-App mit Fokus auf Hilfe, Teilen und Aktionen.

Inspiriert von nebenan.de, aber ohne kommerzielle Marktplatzfunktionen.

## Fokus

*   Verifizierte lokale Nachbarschaft
*   Nachbarschaftshilfe (Anbieten & Suchen)
*   Ressourcen teilen (Leihen, Verschenken)
*   Organisation lokaler Aktionen und Events

## Technologie-Stack (Initial)

*   Frontend: React
*   Routing: React Router
*   State Management: React Context API (für Auth)
*   UI-Bibliothek: Material UI (MUI)

## Setup & Start

1.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```
    oder
    ```bash
    yarn install
    ```

2.  **Entwicklungsserver starten:**
    ```bash
    npm start
    ```
    oder
    ```bash
    yarn start
    ```

Die Anwendung ist dann unter `http://localhost:3000` (oder einem anderen Port, falls 3000 belegt ist) verfügbar.

## Projektstruktur

*   `public/`: Statische Dateien und `index.html`.
*   `src/`: Anwendungs-Quellcode.
    *   `assets/`: Bilder, Schriftarten etc.
    *   `components/`: Wiederverwendbare UI-Komponenten (aufgeteilt nach Funktion).
    *   `contexts/`: React Contexts für globales State Management.
    *   `hooks/`: Benutzerdefinierte React Hooks.
    *   `pages/`: Komponenten, die ganze Seiten/Views repräsentieren.
    *   `services/`: Module für API-Aufrufe (aktuell Mock-Daten).
    *   `styles/`: Globale Stile und Theme-Konfiguration.
    *   `App.js`: Haupt-App-Komponente (Routing, Layout).
    *   `index.js`: Einstiegspunkt der Anwendung. 