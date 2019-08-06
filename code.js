const txtToDisplay = ["Lan Party", "Konferencja", "Targi Pracy", "Hackathon", "BIT Festival..."];
const divTxt = document.querySelector(".text");
const divCursor = document.querySelector(".cursor");

const intervalOfTyping = 100;
const timeBetweenWords = 1000;

let index = 0;
let index2 = 0;

const addLetter = () => {
    divTxt.textContent += txtToDisplay[index][index2];
    index2++;

    if (index2 < txtToDisplay[index].length) {
        addLetters();
    } else {
        index2 = 0;
        index++;
        if (index < txtToDisplay.length) {
            setTimeout(addLetters, timeBetweenWords);
            setTimeout(() => {
                divTxt.textContent = ""
            }, timeBetweenWords)
        }
    }
}
const addLetters = () => {
    setTimeout(addLetter, intervalOfTyping);
}
setInterval(() => {
    divCursor.classList.toggle("active")
}, 400)
addLetters();