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
let wordsCount = {};
function topWords() {
    let wordsCount = [];
    text = document.getElementById('txt').value;
    wordsArray = text.split(' ');
    wordsArray.forEach((elem) => {
        if (wordsCount[elem]) {
            wordsCount[elem] ++;
        } else {
            wordsCount[elem] = 1;
        }


    })
    let itogArray = [];
for (let word in wordsCount) {
    if (wordsCount[word] > 3) {
        itogArray.push(word);
    }
}
let show = itogArray;
let block = document.getElementById('resultBlock');
block.innerHTML = show.join(' \ ');
};

