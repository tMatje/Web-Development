const setup = () => {
    let btn = document.getElementById('btn');

    btn.addEventListener('click', handle)

}

const handle = () => {
    let txt = document.getElementById('txt');
    let txtValue = txt.value; // Get the string inside the input
    let txtNoSpace = txtValue.replace(/\s+/g, ''); // Replace multiple spaces with one
    console.log(txtNoSpace);

    let result = "";
    for (let i = 0; i <= txtNoSpace.length -1 ; i++) {
        result += txtNoSpace[i] + " ";
    }
    console.log(result);
}

window.addEventListener("load", setup);