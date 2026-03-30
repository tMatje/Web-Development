// Globalen
const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;
const ACHTERKANT = 'Images/achterkant.png';

let kaartenArray = [];
let omgedraaideKaarten = [];
let isBusy = false; // Voorkomt klikken tijdens wachttijd

// 1. Vul de array met 2x elke kaart
for (let i = 1; i <= AANTAL_KAARTEN; i++) {
    kaartenArray.push(`Images/kaart${i}.png`);
    kaartenArray.push(`Images/kaart${i}.png`);
}

// 2. Schud de kaarten (optioneel voor testen eerst uitzetten)
kaartenArray.sort(() => 0.5 - Math.random());

const board = document.getElementById('game-board');

// 3. Bouw het bord
kaartenArray.forEach((imgSrc, index) => {
    const card = document.createElement('img');
    card.src = ACHTERKANT;
    card.dataset.face = imgSrc; // Onthoud welke afbeelding dit is
    card.classList.add('card');
    card.addEventListener('click', flipCard);
    board.appendChild(card);
});

function flipCard() {
    console.log(this.dataset.face)

    // Check of we mogen klikken
    if (isBusy || this.classList.contains('flipped') || this.classList.contains('invisible')) return;

    // Toon voorkant
    this.src = this.dataset.face;
    this.classList.add('flipped');
    omgedraaideKaarten.push(this);

    if (omgedraaideKaarten.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    isBusy = true;
    const [kaart1, kaart2] = omgedraaideKaarten;

    if (kaart1.dataset.face === kaart2.dataset.face) {
        // MATCH
        kaart1.classList.add('correct');
        kaart2.classList.add('correct');

        setTimeout(() => {
            kaart1.classList.add('invisible');
            kaart2.classList.add('invisible');
            resetTurn();
            checkWin();
        }, 1000);
    } else {
        // GEEN MATCH
        kaart1.classList.add('wrong');
        kaart2.classList.add('wrong');

        setTimeout(() => {
            kaart1.src = ACHTERKANT;
            kaart2.src = ACHTERKANT;
            kaart1.classList.remove('flipped', 'wrong');
            kaart2.classList.remove('flipped', 'wrong');
            resetTurn();
        }, 1000);
    }
}

function resetTurn() {
    omgedraaideKaarten = [];
    isBusy = false;
}

function checkWin() {
    const overgebleven = document.querySelectorAll('.card:not(.invisible)');
    if (overgebleven.length === 0) {
        alert("Gefeliciteerd! Je hebt alle matches gevonden.");
    }
}