const setup = () => {
    let txt = "de Gisteren zat de jongen bende op de stoep en at de helft van de appel de";
    console.log(vervang(txt));
}

const vervang = (txt) => {
    for (let i = 0; i < txt.length; i++) {
        if ( txt.slice(i -1, 3 + i) === ' de ') {
            txt = txt.slice(0, i) + 'het ' + txt.slice(i + 3);
        }
    }

    if(txt.slice(0,2) === 'de') {
        txt = 'het ' + txt.slice(3);
    }

    if(txt.slice(-2) === 'de') {
        txt = txt.slice(0, -2) + 'het ';
    }

    return txt;
}

window.addEventListener("load", setup);