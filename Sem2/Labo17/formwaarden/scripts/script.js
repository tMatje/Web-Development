const setup = () => {
    document.getElementById("btn")
    .addEventListener("click", toonResultaat)
}
function toonResultaat() {

    const roker = document.getElementById("roker").checked;
    const taal = document.querySelector('input[name="taal"]:checked')?.value;
    const buurland = document.getElementById("buurland").value;

    const bestellingSelect = document.getElementById("bestelling");
    const bestelling = [];
    for (let optie of bestellingSelect.selectedOptions) {
        bestelling.push(optie.value);
    }

    // tekst voor roker
    let rokerTekst = roker ? "is roker" : "is geen roker";

// bestelling als tekst
    let bestellingTekst = bestelling.join(" ");

// Output naar console
    console.log("Persoon", rokerTekst);
    console.log("Moedertaal is " + taal);
    console.log("Favoriet buurland is " + buurland);
    console.log("Bestelling bestaat uit " + bestellingTekst);
}

window.addEventListener("load", setup);