const wordsDiv = document.querySelector('#wordsContainer');

export function DrawWords(words) {

    words.array.forEach(e => {
        const wordElem = document.createElement('p');
        wordElem.innerText = e;

        wordsDiv.appendChild(wordElem);
    });
}

export function ClearWords() {
    wordsDiv.innerHTML = "";
}