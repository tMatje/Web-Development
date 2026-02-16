const setup = () => {
    let wijzigbutton=document.getElementById("wijzig");

    wijzigbutton.addEventListener("click", wijzigTekst);
    function wijzigTekst(){
        let pElement=document.getElementById("txtOutput");
        pElement.innerHTML="Welkom!";
    }
}
window.addEventListener("load", setup);