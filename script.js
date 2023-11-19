let total = 0;
let text = 0;
let trims = 0;
let wordsArray = [];
let wordsList = [];
let word = 0;

function counter() {
    text = document.getElementById('txt').value;
    trims = 0;
    for (i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            trims++;
        }
    };
    total = (text.length - trims);
    return total;
}

function topWords() {
    text = document.getElementById('txt').value;
    wordsArray = text.split(' ');
    for (i = 0; i < text.length; i++) {
    if (wordsArray.includes(wordsArray[i]) > 3) {
    wordsList.push(wordsArray[i]);
    }
    }
    console.log(wordsList);
     }
