const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let valueR=sliders[0].value;
    let valueG=sliders[1].value;
    let valueB=sliders[2].value;
	console.log(valueR);
    console.log(valueG);
    console.log(valueB);

    let colorDemos=document.getElementsByClassName("colorDemo");
    colorDemos[0].style.backgroundColor = `rgb(${valueR}, ${valueG}, ${valueB})`;
}
window.addEventListener("load", setup);