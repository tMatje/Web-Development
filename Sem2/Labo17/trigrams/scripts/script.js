const setup = () => {
    let txt = "plezier"
    trigram(txt);
}

const trigram = (txt) => {
    for (let i = 0; i < txt.length; i++) {
        if(txt.slice(i,3 + i).length >= 3) {
            console.log(txt.slice(i,3 + i));
        }
    }
}

window.addEventListener("load", setup);