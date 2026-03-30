const global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    score: 0,
    timeoutId: 0,
    hasClicked: false // NEW: Track if the current image was already clicked
};

const setup = () => {
    const target = document.getElementById("target");
    const btnStart = document.getElementById("btnStart");

    target.addEventListener("click", klikOpTarget);
    btnStart.addEventListener("click", startSpel);
};

const startSpel = () => {
    global.score = 0;
    document.getElementById("score").textContent = global.score;

    clearInterval(global.timeoutId);
    verplaatsEnVerander();

    // Using setInterval to move the target regularly
    global.timeoutId = setInterval(verplaatsEnVerander, global.MOVE_DELAY);
};

const klikOpTarget = () => {
    const target = document.getElementById("target");

    // 1. Check for Game Over (0.png)
    if (target.src.includes("0.png")) {
        clearInterval(global.timeoutId);
        alert("Game over! Je score is " + global.score);
        return;
    }

    // 2. NEW: Check if they already clicked this specific move
    if (global.hasClicked) {
        return; // Exit early so they don't get double points
    }

    // 3. Award point and flip the switch
    global.score++;
    global.hasClicked = true;
    document.getElementById("score").textContent = global.score;
};

const verplaatsEnVerander = () => {
    global.hasClicked = false; // NEW: Reset the switch so they can click again
    verplaatsTarget();
    veranderAfbeelding();
};

const verplaatsTarget = () => {
    const target = document.getElementById("target");
    const playField = document.getElementById("playField");

    const maxX = playField.clientWidth - global.IMAGE_SIZE;
    const maxY = playField.clientHeight - global.IMAGE_SIZE;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
};

const veranderAfbeelding = () => {
    const target = document.getElementById("target");
    const randomGetal = Math.floor(Math.random() * global.IMAGE_COUNT);
    target.src = global.IMAGE_PATH_PREFIX + randomGetal + global.IMAGE_PATH_SUFFIX;
};

window.addEventListener("load", setup);