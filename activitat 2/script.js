// ACTIVITAT 1 - EVENTS

// Elements
const botoDobleClick = document.querySelector("button"); // primer botó "Fes doble click!!"
const iconaEye = document.getElementById("icon-eye");
const inputText = document.querySelector("input");
const areaInteractiva = document.querySelector(".area-interactiva");
const botoMostrar = document.querySelectorAll("button")[1]; // segon botó "mostra"
const botoAmagar = document.querySelectorAll("button")[2]; // tercer botó "amaga"
const infoEsdeveniments = document.querySelector(".info-esdeveniments");

// Funció per afegir missatges a la secció d'esdeveniments
function afegirMissatge(text) {
    infoEsdeveniments.insertAdjacentHTML(`${text}<br>`);
}

// 1. Event doble click al botó
botoDobleClick.addEventListener("dblclick", () => {
    alert("Has fet doble clic el botó!");
    afegirMissatge("Has fet doble clic el botó!");
});

// 2. Click a la icona ull
iconaEye.addEventListener("click", () => {
    alert("Has fet clic a l'ull!");
    afegirMissatge("Has fet clic a l'ull!");
});

// 3. Events de l'input
inputText.addEventListener("input", (event) => {
    afegirMissatge(`El valor ha canviat a: ${event.target.value}`);
});

inputText.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        alert("No pots utilitzar la tecla Escape dins del formulari!");
        afegirMissatge("No pots utilitzar la tecla Escape aquí!");
        event.preventDefault();
    }
});

// 4. Mouse enter a l'àrea interactiva
areaInteractiva.addEventListener("mouseenter", () => {
    alert("Estàs sobre l'àrea interactiva!");
    afegirMissatge("Estàs sobre l'àrea interactiva!");
});

// 5. Botons mostra/amaga per a l'àrea interactiva
botoMostrar.addEventListener("click", () => {
    areaInteractiva.style.display = "block";
    afegirMissatge("Àrea interactiva mostrada.");
});

botoAmagar.addEventListener("click", () => {
    areaInteractiva.style.display = "none";
    afegirMissatge("Àrea interactiva amagada.");
});

// ------------------------------------------
// ACTIVITAT 2 - Classes CSS

// --- 1. Afegir Classes ---
const caixaAfegir = document.getElementById("caixa-afegir");
const btnAfegirVerd = document.getElementById("afegir-verd");
const btnAfegirRotacio = document.getElementById("afegir-rotacio");
const btnAfegirMarge = document.getElementById("afegir-marge");
const btnAfegirBorda = document.getElementById("afegir-borda");
const btnResetAfegir = document.getElementById("reset-afegir");

btnAfegirVerd.addEventListener("click", () => {
    caixaAfegir.classList.add("text-verd");
});

btnAfegirRotacio.addEventListener("click", () => {
    caixaAfegir.classList.add("rotacio");
});

btnAfegirMarge.addEventListener("click", () => {
    caixaAfegir.classList.add("marge");
});

btnAfegirBorda.addEventListener("click", () => {
    caixaAfegir.classList.add("marge-radius");
});

btnResetAfegir.addEventListener("click", () => {
    caixaAfegir.className = "caixa-afegir";
});

// --- 2. Toggle de Classes ---
const caixaToggle = document.getElementById("caixa-toggle");
const btnToggle = document.getElementById("toggle-activa");

btnToggle.addEventListener("click", () => {
    caixaToggle.classList.toggle("activa");

    // Opcional: canviar text del botó
    if (caixaToggle.classList.contains("activa")) {
        btnToggle.textContent = "Treu CSS";
    } else {
        btnToggle.textContent = "Aplica CSS";
    }
});

// --- 3. Canvi de Classes CSS (Cíclic) ---
const caixaCiclica = document.getElementById("caixa-canvi-estat");
const btnCanviClasse = document.getElementById("boto-canvi-classe");
const btnResetCiclic = document.getElementById("reset-ciclic");
const infoCiclic = document.getElementById("info-ciclic");

let estatActual = 1;
const maxEstat = 4;

btnCanviClasse.addEventListener("click", () => {
    // Eliminar classe anterior
    caixaCiclica.classList.remove(`estat-${estatActual}`);

    // Actualitzar estat
    estatActual++;
    if (estatActual > maxEstat) estatActual = 1;

    // Afegir nova classe
    caixaCiclica.classList.add(`estat-${estatActual}`);

    // Actualitzar text estat
    infoCiclic.textContent = estatActual;
});

btnResetCiclic.addEventListener("click", () => {
    // Eliminar qualsevol classe estat
    for(let i = 1; i <= maxEstat; i++) {
        caixaCiclica.classList.remove(`estat-${i}`);
    }
    estatActual = 1;
    caixaCiclica.classList.add("estat-1");
    infoCiclic.textContent = estatActual;
});

// ================= Activitat 4 - Galeria =================
const imatges = [
    "https://tse2.mm.bing.net/th/id/OIP.5hZg4Wus5HYxVeA7xUBg6gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://thumbs.dreamstime.com/b/ijsbeer-oso-polar-maritimus-del-ursus-129025258.jpg",
    "https://as2.ftcdn.net/v2/jpg/05/77/30/25/1000_F_577302535_CYOnKyRlPq5BWERYPEj8axzi3xvifOku.jpg",
];
let indexImatge = 0;

const enllacGaleria = document.querySelector(".enllac");
const imgGaleria = document.querySelector(".imatge");
const comptador = document.querySelector(".comptador");
const botoGaleria = document.querySelector(".boto-galeria");

function actualitzaGaleria() {
    imgGaleria.src = imatges[indexImatge];
    imgGaleria.alt = `Imatge ${indexImatge + 1}`;
    enllacGaleria.href = imatges[indexImatge];
    comptador.textContent = `${indexImatge + 1} / ${imatges.length}`;
}

botoGaleria.addEventListener("click", () => {
    indexImatge++;
    if (indexImatge >= imatges.length) indexImatge = 0;
    actualitzaGaleria();
});

actualitzaGaleria();

// ================= Activitat 5 - Tasques =================
const botoAfegirTasca = document.querySelector(".boto-afegir-tasca");
const botoBorrarTotes = document.querySelector(".boto-borrar-totes");
const inputTasca = document.getElementById("novaTasca");
const contanierTasques = document.querySelector(".tasques-contanier");

botoAfegirTasca.addEventListener("click", () => {
    const valor = inputTasca.value.trim();
    if (!valor) return;
    const divTasca = document.createElement("div");
    divTasca.className = "tasca";
    divTasca.innerHTML = `
        <span>${valor}</span>
        <button class="boto-borrar">Borrar</button>
    `;
    contanierTasques.appendChild(divTasca);
    inputTasca.value = "";
});

contanierTasques.addEventListener("click", (e) => {
    if (e.target.classList.contains("boto-borrar")) {
        e.target.parentElement.remove();
    }
});

botoBorrarTotes.addEventListener("click", () => {
    contanierTasques.innerHTML = "";
});
