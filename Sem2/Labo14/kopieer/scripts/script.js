const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.textContent = txtInput.value;
    let tekst = txtInput.value;
}

window.addEventListener("load", setup);