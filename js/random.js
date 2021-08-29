const hex = ["A","B","C","D","E","F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const hexText = document.querySelector("h1 > span");
const clickme = document.querySelector(".clickme");
const background = document.getElementById("background");


clickme.addEventListener('click', e => {
    let hexValue = "#";
    for(i = 0; i < 6; i++){
        hexValue += hex[Math.floor(Math.random() * hex.length)];
    }

    background.style.backgroundColor = hexValue;
    hexText.textContent = hexValue;
})

