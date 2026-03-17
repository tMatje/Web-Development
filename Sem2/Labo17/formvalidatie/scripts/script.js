const isGetal = (tekst) => !isNaN(tekst);

function resetFouten() {
    document.querySelectorAll("input").forEach(v => v.classList.remove("error"));
    document.querySelectorAll(".foutmelding").forEach(f => f.textContent = "");
}

function fout(idInput, idFout, tekst) {
    document.getElementById(idInput).classList.add("error");
    document.getElementById(idFout).textContent = tekst;
}

function valideer() {
    resetFouten();
    let geldig = true;

    let voornaam = document.getElementById("voornaam").value.trim();
    let familienaam = document.getElementById("familienaam").value.trim();
    let geboorte = document.getElementById("geboorte").value.trim();
    let email = document.getElementById("email").value.trim();
    let kinderen = document.getElementById("kinderen").value.trim();

    if (voornaam.length > 30) {
        fout("voornaam", "foutVoornaam", "max. 30 karakters");
        geldig = false;
    }

    if (familienaam.length === 0) {
        fout("familienaam", "foutFamilienaam", "verplicht veld");
        geldig = false;
    } else if (familienaam.length > 50) {
        fout("familienaam", "foutFamilienaam", "max 50 karakters");
        geldig = false;
    }

    if (geboorte.length === 0) {
        fout("geboorte", "foutGeboorte", "verplicht veld");
        geldig = false;
    } else {
        if (geboorte.length !== 10 || geboorte[4] !== "-" || geboorte[7] !== "-") {
            fout("geboorte", "foutGeboorte", "formaat is niet jjjj-mm-dd");
            geldig = false;
        } else {
            let jaar = geboorte.substring(0,4);
            let maand = geboorte.substring(5,7);
            let dag = geboorte.substring(8,10);
            if (!isGetal(jaar) || !isGetal(maand) || !isGetal(dag)) {
                fout("geboorte", "foutGeboorte", "formaat is niet jjjj-mm-dd");
                geldig = false;
            }
        }
    }

    if (email.length === 0) {
        fout("email", "foutEmail", "verplicht veld");
        geldig = false;
    } else {
        let delen = email.split("@");
        if (delen.length !== 2 || delen[0].length === 0 || delen[1].length === 0) {
            fout("email", "foutEmail", "geen geldig email adres");
            geldig = false;
        }
    }

    if (kinderen.length === 0 || !isGetal(kinderen) || kinderen < 0) {
        fout("kinderen", "foutKinderen", "is geen positief getal");
        geldig = false;
    } else if (kinderen >= 99) {
        fout("kinderen", "foutKinderen", "is te vruchtbaar");
        geldig = false;
    }

    if (geldig) {
        alert("proficiat!");
    }
}