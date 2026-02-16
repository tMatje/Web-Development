const setup = () => {
    document.getElementById("subString")
        .addEventListener("click", berekenSubstring);
}

function berekenSubstring() {
    let tekst = document.getElementById("textInput").value;
    let start = parseInt(document.getElementById("waarde1").value);
    let einde = parseInt(document.getElementById("waarde2").value);

    document.getElementById("txtOutput").textContent = tekst.substring(start, einde);
}

window.addEventListener("load", setup);