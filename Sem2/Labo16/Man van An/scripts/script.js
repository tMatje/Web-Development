const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", bereken);
}

const bereken = () => {
    let tekst = document.getElementById("tekst").value.toLowerCase();
    let zoek = "an";

    let tellerIndex = 0;
    let positie = tekst.indexOf(zoek);

    while (positie !== -1) {
        tellerIndex++;
        positie = tekst.indexOf(zoek, positie + 1);
    }

    console.log("Aantal keer met indexOf: " + tellerIndex);

    let tellerLastIndex = 0;
    positie = tekst.lastIndexOf(zoek);

    while (positie !== -1) {
        tellerLastIndex++;
        positie = tekst.lastIndexOf(zoek, positie - 1);
    }

    console.log("Aantal keer met lastIndexOf: " + tellerLastIndex);
}

window.addEventListener("load", setup);