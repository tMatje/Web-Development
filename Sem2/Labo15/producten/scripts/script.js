const setup = () => {
    document.getElementById("herbereken")
        .addEventListener("click", herbereken);
}

const herbereken = () => {

    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btwCellen = document.getElementsByClassName("btw");
    let subtotaalCellen = document.getElementsByClassName("subtotaal");

    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {

        // Lees prijs uit HTML (bv "10.00 Eur")
        let prijs = parseFloat(prijzen[i].textContent);

        // Lees btw uit HTML (bv "21%")
        let btw = parseFloat(btwCellen[i].textContent);

        // Lees aantal uit input
        let aantal = parseFloat(
            aantallen[i].value.replace(",", ".")
        ) || 0;

        // Bereken subtotaal
        let subtotaal = prijs * aantal * (1 + btw / 100);

        // Zet subtotaal terug in de HTML
        subtotaalCellen[i].textContent = subtotaal.toFixed(2) + " Eur";
        totaal += subtotaal;
    }

    // Zet totaal in HTML
    document.getElementById("totaal").textContent = totaal.toFixed(2) + " Eur";
}

window.addEventListener("load", setup);