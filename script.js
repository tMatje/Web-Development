function toggleGame() {
    const gameContainer = document.getElementById("game-container");

    if (!document.fullscreenElement) {
        // First expand visually
        gameContainer.classList.add("expanded");

        // Then request fullscreen
        gameContainer.requestFullscreen().catch(err => {
            alert(`Error attempting to enable fullscreen: ${err.message} (${err.name})`);
        });
    } else {
        // Exit fullscreen
        document.exitFullscreen();

        // Remove expanded class to shrink back
        gameContainer.classList.remove("expanded");
    }
}

// Optional: handle user pressing ESC to exit fullscreen
document.addEventListener("fullscreenchange", () => {
    const gameContainer = document.getElementById("game-container");
    if (!document.fullscreenElement) {
        gameContainer.classList.remove("expanded");
    }
});

window.addEventListener("load", setup);