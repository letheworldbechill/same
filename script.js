const unwissendTexts = [
    "Verunsicherung: Man beginnt, an sich selbst zu zweifeln.",
    "Empathie und Schuldgefühle: Versuch, den Narzissten zu retten.",
    "Kompromissbereitschaft: Nachgeben, um Konflikte zu vermeiden.",
    "Unbewusste Anpassung: Verhalten wird angepasst, um Harmonie zu wahren.",
    "Erhöhte Leistungsbereitschaft: Man versucht, Erwartungen zu erfüllen.",
    "Frustration und Ärger: Unklare Emotionen über das Verhalten des Narzissten.",
    "Vermeidung oder Rückzug: Man zieht sich zurück, um Konflikte zu vermeiden.",
    "Verstärkte Analyse: Übermäßiges Nachdenken über die Situation.",
    "Ignorieren der Warnsignale: Man übersieht Manipulationen.",
    "Fehlende Gegenwehr: Man reagiert nicht aktiv auf die Situation."
];

const wissendTexts = [
    "Innere Ruhe bewahren: Kontrollierte Emotionen, um die Situation nicht eskalieren zu lassen.",
    "Nicht rechtfertigen: Keine zusätzlichen Angriffsflächen bieten.",
    "Klare Grenzen setzen: Kommunizieren, was akzeptabel ist.",
    "Grauer Fels: Emotionslos und uninteressant bleiben.",
    "Angriffe ignorieren: Beleidigungen nicht beachten.",
    "Distanzieren: Gespräche kurz halten und auf das Wesentliche reduzieren.",
    "Faktenorientiert bleiben: Manipulationen entlarven, ohne emotional zu reagieren.",
    "Keine Erwartungen setzen: Akzeptieren, dass Veränderung selten möglich ist.",
    "Selbstfürsorge: Eigene Bedürfnisse priorisieren.",
    "Professionelle Hilfe: Unterstützung suchen, um langfristige Lösungen zu finden."
];

// Funktion zum Anzeigen der unbewussten Reaktionen
function showUnwissend(index) {
    document.getElementById('unwissend-text').textContent = unwissendTexts[index];
}

// Funktion zum Anzeigen der bewussten Reaktionen
function showWissend(index) {
    document.getElementById('wissend-text').textContent = wissendTexts[index];
}
