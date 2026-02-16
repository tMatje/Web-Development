let familie = ["Bo", "Bob", "Boby", "Bobyt", "Bobyta"];
console.log(familie.length);

console.log(familie[0]);
console.log(familie[2]);
console.log(familie[4]);

function VoegNaamToe(array) {
    let naam = prompt("Voer een extra naam in:");
    array.push(naam);
}

VoegNaamToe(familie);
console.log(familie);

let toString = familie.toString();
console.log(toString);
