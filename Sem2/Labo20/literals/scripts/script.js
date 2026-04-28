const setup = () => {
    let student = {
        voornaam : "Matthias",
        familienaam : "Bonte",
        geboorteDatum : new Date("2007-02-03"),
        adres : { // een object
            straat : "Potenbakkerstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanHobbies :
            ["Tekenen", "Lezen", "muziek"],
        aantalAutos : 2
    }

    console.log(JSON.stringify(student));

    let jsonString = '{"voornaam":"Matthias","familienaam":"Bonte","geboorteDatum":"2007-02-03T00:00:00.000Z","adres":{"straat":"Potenbakkerstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanHobbies":["Tekenen","Lezen","muziek"],"aantalAutos":2}';
    let object = JSON.parse(jsonString);
    console.log(object.voornaam);
}

window.addEventListener('load',setup);