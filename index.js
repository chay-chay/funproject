const clickMe = document.getElementById('click-me')
const background = document.getElementById('body')
const backgroundText = document.getElementById('bg-text')

clickMe.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    background.style.background = bgColor

    backgroundText.innerHTML = `Background Color : ${bgColor}`




})