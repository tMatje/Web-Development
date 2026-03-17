const setup = () => {

    let keuzelijst = document.getElementById('keuzelijst');
    const gemeentes = actie();

    for (let i = 0; i < gemeentes.length; i++) {
        keuzelijst.add(new Option(gemeentes[i]));
    }
}

const actie = () => {
    const gemeentes = [];
    let txt;

    stop = false;
    while (!stop) {
        txt = window.prompt("Geef gemeente","defaultText");
        if (txt === 'stop' || txt === null) {  stop = true; }
        if (txt !== 'stop') { gemeentes.push(txt); }
    }
    return gemeentes.sort();
}

window.addEventListener("load", setup);