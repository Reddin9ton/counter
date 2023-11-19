let total = 0;
let text = 0;
let trims = 0;

function counter() {
    text = document.getElementById('txt').value;
    trims = 0;
    for (i = 0; i < text.trim().length; i++) {
        if (text[i] === ' ') {
            trims++;
        }
    };
    total = (text.trim().length - trims);
    return total;
}
