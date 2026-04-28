const setup = () => {
    let geboortedag = new Date(2007, 1, 3, 7);
    let today = new Date();

    console.log(geboortedag.toISOString());
    console.log(today.toISOString());

    console.log(Math.floor((today - geboortedag) /1000/60/60/24));
}

window.addEventListener('load',setup);