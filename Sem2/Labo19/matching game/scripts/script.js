const AANTAL_KAARTEN = 6;
const ACHTERKANT = 'Images/achterkant.png';

let cardsArray = [];
let flippedCards = [];
let isBusy = false;
let gameStarted = false;
let matchesFound = 0;
let seconds = 0;
let timerInterval;

function initGame() {
    // Generate pairs
    for (let i = 1; i <= AANTAL_KAARTEN; i++) {
        cardsArray.push(`Images/kaart${i}.png`, `Images/kaart${i}.png`);
    }
    cardsArray.sort(() => Math.random() - 0.5);
    renderBoard();
}

function renderBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';

    cardsArray.forEach((imgSrc) => {
        const slot = document.createElement('div');
        slot.className = 'card-slot';

        const inner = document.createElement('div');
        inner.className = 'card-inner';

        // Back Face
        const back = document.createElement('div');
        back.className = 'card-back';
        const bImg = document.createElement('img');
        bImg.src = ACHTERKANT;
        back.appendChild(bImg);

        // Front Face
        const front = document.createElement('div');
        front.className = 'card-front';
        const fImg = document.createElement('img');
        fImg.src = imgSrc;
        front.appendChild(fImg);

        inner.appendChild(back);
        inner.appendChild(front);
        slot.appendChild(inner);

        slot.onclick = handleCardClick;
        board.appendChild(slot);
    });
}

function handleCardClick() {
    if (isBusy || this.classList.contains('flipped') || this.classList.contains('invisible')) return;

    if (!gameStarted) startTimer();

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) checkMatch();
}

function checkMatch() {
    isBusy = true;
    const [c1, c2] = flippedCards;
    const img1 = c1.querySelector('.card-front img').src;
    const img2 = c2.querySelector('.card-front img').src;

    if (img1 === img2) {
        matchesFound++;
        c1.classList.add('correct');
        c2.classList.add('correct');
        setTimeout(() => {
            c1.classList.add('invisible');
            c2.classList.add('invisible');
            resetTurn();
            if (matchesFound === AANTAL_KAARTEN) endGame();
        }, 800);
    } else {
        c1.classList.add('wrong');
        c2.classList.add('wrong');
        setTimeout(() => {
            c1.classList.remove('flipped', 'wrong');
            c2.classList.remove('flipped', 'wrong');
            resetTurn();
        }, 1000);
    }
}

function resetTurn() {
    flippedCards = [];
    isBusy = false;
}

function startTimer() {
    gameStarted = true;
    timerInterval = setInterval(() => {
        seconds++;
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        document.getElementById('timer').textContent = `${m}:${s}`;
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    document.getElementById('final-time').textContent = document.getElementById('timer').textContent;
    document.getElementById('victory-screen').style.display = 'flex';
}

initGame();