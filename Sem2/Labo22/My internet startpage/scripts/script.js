const setup = () => {
    goBtn = document.getElementById('goBtn');
    goBtn.addEventListener("click", Go);
}

const Go = () => {
    kaartenHangaar = document.getElementById("kaarten");

    let input = document.getElementById("inputveld").value;
    let tekst = input.slice(3)

    kaartenHangaar.append(maakKaart(zoekSoort(input), tekst))
    window.open('https://www.' + zoekSoort(input) + '.com/search?q=' + tekst);
}

const maakKaart = (soort, tekst) => {
    let col = document.createElement("div")
    let kaart = document.createElement("div")
    let titel = document.createElement("h3")
    let kaartTekst = document.createElement("p");
    let btn = document.createElement("button");

    col.classList.add("col-4")
    kaart.classList.add(soort)
    kaart.classList.add("kaart")
    titel.classList.add("titel")
    btn.classList.add("kaartBtn");
    btn.classList.add("btn" + soort);
    titel.textContent = soort
    kaartTekst.textContent = tekst
    btn.textContent = "Go!"

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
            soort = "google"
            break;
        case "y":
            soort = "youtube"
            break;
        case "x":
            soort = "x"
            break;
        case "i":
            soort = "instagram"
            break;
        default:
            soort = "error"
            break;
    }
    return soort;
}


/*
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
 */

window.addEventListener('load',setup);