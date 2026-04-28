const initialize = () => {
    let btnSave = document.getElementById("btnSave");
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    restoreSettings();
    restoreSwatches();

    update();

    btnSave.addEventListener("click", saveSwatch);
};

const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";

    localStorage.setItem("vives.be.colorpicker.red", red);
    localStorage.setItem("vives.be.colorpicker.green", green);
    localStorage.setItem("vives.be.colorpicker.blue", blue);
};

const storeSwatches = () => {
    let swatchComponents = document.querySelectorAll("#swatchComponents .swatch");
    let swatchesData = [];

    swatchComponents.forEach(swatch => {
        swatchesData.push({
            red: swatch.getAttribute("data-red"),
            green: swatch.getAttribute("data-green"),
            blue: swatch.getAttribute("data-blue")
        });
    });

    localStorage.setItem("vives.be.colorpicker.swatches", JSON.stringify(swatchesData));
};

const saveSwatch = () => {
    let swatchComponents = document.getElementById("swatchComponents");
    let swatch = buildSwatchComponent();
    swatchComponents.appendChild(swatch);

    storeSwatches();
};

const buildSwatchComponent = () => {
    let swatch = document.createElement("div");
    let btnDelete = document.createElement("input");

    swatch.className = "swatch";
    configureSwatch(swatch);
    swatch.addEventListener("click", setColorPickerFromSwatch);

    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);

    swatch.appendChild(btnDelete);
    return swatch;
};

const configureSwatch = (swatch) => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    swatch.setAttribute("data-red", red);
    swatch.setAttribute("data-green", green);
    swatch.setAttribute("data-blue", blue);
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";
};

const setColorPickerFromSwatch = (event) => {
    let swatch = event.currentTarget;

    document.getElementById("sldRed").value = swatch.getAttribute("data-red");
    document.getElementById("sldGreen").value = swatch.getAttribute("data-green");
    document.getElementById("sldBlue").value = swatch.getAttribute("data-blue");

    update();
};

const deleteSwatch = (event) => {
    let swatchComponents = document.getElementById("swatchComponents");
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);

    event.stopPropagation();
    storeSwatches();
};

const restoreSettings = () => {
    let red = localStorage.getItem("vives.be.colorpicker.red");
    let green = localStorage.getItem("vives.be.colorpicker.green");
    let blue = localStorage.getItem("vives.be.colorpicker.blue");

    if (red !== null) document.getElementById("sldRed").value = red;
    if (green !== null) document.getElementById("sldGreen").value = green;
    if (blue !== null) document.getElementById("sldBlue").value = blue;
};

const restoreSwatches = () => {
    let swatchesJSON = localStorage.getItem("vives.be.colorpicker.swatches");

    if (swatchesJSON) {
        let swatchesData = JSON.parse(swatchesJSON);
        let swatchComponents = document.getElementById("swatchComponents");

        swatchesData.forEach(data => {
            let swatch = document.createElement("div");
            let btnDelete = document.createElement("input");

            swatch.className = "swatch";
            swatch.setAttribute("data-red", data.red);
            swatch.setAttribute("data-green", data.green);
            swatch.setAttribute("data-blue", data.blue);
            swatch.style.background = "rgb(" + data.red + "," + data.green + "," + data.blue + ")";
            swatch.addEventListener("click", setColorPickerFromSwatch);

            btnDelete.setAttribute("type", "button");
            btnDelete.setAttribute("value", "X");
            btnDelete.addEventListener("click", deleteSwatch);

            swatch.appendChild(btnDelete);
            swatchComponents.appendChild(swatch);
        });
    }
};

window.addEventListener("load", initialize);