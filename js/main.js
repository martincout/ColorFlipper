let i = 0;
const colorArray = [
    "#3474fc",
    "Red",
    "Green",
    "#F1F5F8",
    "Yellow"
]

const hexText = document.querySelector("h1 > span");
const clickme = document.querySelector(".clickme");
const background = document.getElementById("background");

clickme.addEventListener('click', e => {
    background.style.backgroundColor = colorArray[i];
    hexText.textContent = colorArray[i];
    i = i + 1;
    //When reaches the max value of the array, start over
    if (i == colorArray.length) {
        i = 0
    }
})

