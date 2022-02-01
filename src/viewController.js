const wordsDiv = document.querySelector('#wordsContainer');

export function DrawWords(words) {

    words.forEach(e => {
        const wordElem = document.createElement('p');
        wordElem.innerText = e;

        wordsDiv.appendChild(wordElem);
    });
}

export function ClearWords() {
    wordsDiv.innerHTML = "";
}