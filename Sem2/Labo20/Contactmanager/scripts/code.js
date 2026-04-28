let personen = [];
let geselecteerdeIndex = -1;

const updateLijst = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.replaceChildren();

    personen.forEach((persoon, index) => {
        let option = document.createElement("option");
        option.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
        option.value = index;
        lstPersonen.add(option);
    });
};

const bewaarBewerktePersoon = () => {
    valideer();

    let errors = document.querySelectorAll(".errorMessage:not(:empty)");
    if (errors.length > 0) return;

    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorteDatum: document.getElementById("txtGeboorteDatum").value,
        email: document.getElementById("txtEmail").value,
        kinderen: document.getElementById("txtAantalKinderen").value
    };

    if (geselecteerdeIndex === -1) {
        personen.push(persoon);
    } else {
        personen[geselecteerdeIndex] = persoon;
    }

    updateLijst();
};

const bewerkNieuwePersoon = () => {
    geselecteerdeIndex = -1;
    document.querySelector("form").reset();

    let errorSpans = document.querySelectorAll(".errorMessage");
    errorSpans.forEach(span => {
        span.textContent = "";
    });
};

const toonPersoon = (event) => {
    let index = event.target.selectedIndex;
    if (index !== -1) {
        geselecteerdeIndex = index;
        let persoon = personen[index];

        document.getElementById("txtVoornaam").value = persoon.voornaam;
        document.getElementById("txtFamilienaam").value = persoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
        document.getElementById("txtEmail").value = persoon.email;
        document.getElementById("txtAantalKinderen").value = persoon.kinderen;
    }
};

const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    document.getElementById("lstPersonen").addEventListener("change", toonPersoon);
};

window.addEventListener("load", setup);