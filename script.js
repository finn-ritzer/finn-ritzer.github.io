// ==========================================================
// script.js – kleine Helfer für alle Seiten
// ==========================================================

// 1. Menü auf dem Handy auf- und zuklappen
const knopf = document.querySelector(".menue-knopf");
const navigation = document.querySelector("#navigation");

if (knopf && navigation) {
  knopf.addEventListener("click", () => {
    // toggle() fügt die Klasse "offen" hinzu oder entfernt sie
    const istOffen = navigation.classList.toggle("offen");
    knopf.setAttribute("aria-expanded", istOffen);
    knopf.textContent = istOffen ? "Schließen" : "Menü";
  });
}

// 2. Jahreszahl im Fußbereich automatisch aktuell halten
const jahr = document.querySelector("#jahr");
if (jahr) {
  jahr.textContent = new Date().getFullYear();
}
