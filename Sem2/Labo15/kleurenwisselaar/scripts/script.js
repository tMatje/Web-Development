const setup = () => {
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");

    button1.addEventListener("click", veranderKleur);
    button2.addEventListener("click", veranderKleur);
    button3.addEventListener("click", veranderKleur);
}

const veranderKleur = function () {
    this.classList.toggle("color");
}

window.addEventListener("load", setup);