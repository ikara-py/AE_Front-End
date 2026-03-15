const matchs = [
  { id: 1, equipe1: "FC VOID", equipe2: "Raja Club", date: "15/03/2025", heure: "20:00", stade: "Stade Mohammed V", prix: { tribune: 200, virage: 100, pelouse: 50 } },
  { id: 2, equipe1: "FC VOID", equipe2: "Wydad AC", date: "22/03/2025", heure: "18:00", stade: "Stade Mohammed V", prix: { tribune: 250, virage: 120, pelouse: 60 } },
  { id: 3, equipe1: "FC VOID", equipe2: "AS FAR", date: "05/04/2025", heure: "21:00", stade: "Stade Mohammed V", prix: { tribune: 300, virage: 150, pelouse: 80 } }
];

let totalReservations = 0;

const compteurReservations = document.getElementById("compteur-reservations");
const sectionProchainMatch = document.getElementById("prochain-match");
const selectMatch = document.getElementById("match");
const formulaireReservation = document.getElementById("formulaire-reservation");

compteurReservations.textContent = totalReservations;

matchs.forEach(match => {
  const card = document.createElement("div");
  card.className = "border border-gray-300 rounded p-4 mt-4 bg-gray-50";

  card.innerHTML = `
    <div class="font-bold text-lg">${match.equipe1} vs ${match.equipe2}</div>
    <p class="text-gray-600">${match.date} à ${match.heure}</p>
    <p class="text-gray-600 mb-2">${match.stade}</p>
    <p class="text-sm">Tribune: ${match.prix.tribune} DHS | Virage: ${match.prix.virage} DHS | Pelouse: ${match.prix.pelouse} DHS</p>
    <button type="button" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 mt-3 rounded">Réserver</button>
  `;

  const btnReserver = card.querySelector("button");

  btnReserver.addEventListener("click", () => {
    selectMatch.value = match.id;
    formulaireReservation.scrollIntoView({ behavior: "smooth" });
  });

  sectionProchainMatch.appendChild(card);
});

function getMatchById(id) {
    return matchs.find(match => match.id === id);
}