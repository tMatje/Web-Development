let commandHistory = [];

const setup = () => {
    let goBtn = document.getElementById('goBtn');
    goBtn.addEventListener("click", Go);

    let kaartenHangaar = document.getElementById("kaarten");

    let opgeslagenHistory = localStorage.getItem("geschiedenis");

    if (opgeslagenHistory) {
        commandHistory = JSON.parse(opgeslagenHistory);
        commandHistory.forEach(commando => {
            kaartenHangaar.append(maakKaart(commando.soort, commando.tekst));
        });
    }
}

const Go = () => {
    let kaartenHangaar = document.getElementById("kaarten");
    let input = document.getElementById("inputveld").value;

    if (input.length < 2) {
        alert("Geef een geldig commando op!");
        return;
    }

    let soort = zoekSoort(input);

    if (soort === "error") {
        alert("Ongeldig commando of onbekende prefix!");
        return;
    }

    let tekst = input.slice(3);

    // 1. Controleer of de zoekopdracht al exact hetzelfde in de array staat
    const bestaatAl = commandHistory.some(commando =>
        commando.soort === soort && commando.tekst === tekst
    );

    if (!bestaatAl) {
        // Alleen toevoegen aan het scherm en de geschiedenis als het nieuw is
        kaartenHangaar.append(maakKaart(soort, tekst));

        commandHistory.push({ soort: soort, tekst: tekst });
        localStorage.setItem("geschiedenis", JSON.stringify(commandHistory));
    } else {
        console.log("Deze zoekopdracht staat al in je geschiedenis.");
    }

    // De zoekpagina openen we meestal wel altijd,
    // zelfs als hij al in de geschiedenis stond.
    window.open('https://www.' + soort + '.com/search?q=' + tekst);
}
const maakKaart = (soort, tekst) => {
    let col = document.createElement("div");
    let kaart = document.createElement("div");
    let titel = document.createElement("h3");
    let kaartTekst = document.createElement("p");
    let btn = document.createElement("button");

    col.classList.add("col-4");
    kaart.classList.add(soort);
    kaart.classList.add("kaart");
    titel.classList.add("titel");
    btn.classList.add("kaartBtn");
    btn.classList.add("btn" + soort);

    titel.textContent = soort;
    kaartTekst.textContent = tekst;
    btn.textContent = "Go!";

    kaart.appendChild(titel);
    kaart.appendChild(kaartTekst);
    kaart.appendChild(btn);
    col.appendChild(kaart);

    return col;
}

const zoekSoort = (input) => {
    let soort;
    switch(input[1]) {
        case "g":
            soort = "google";
            break;
        case "y":
            soort = "youtube";
            break;
        case "x":
            soort = "x";
            break;
        case "i":
            soort = "instagram";
            break;
        default:
            soort = "error";
            break;
    }
    return soort;
}

window.addEventListener('load', setup);