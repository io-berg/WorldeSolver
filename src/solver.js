import { words } from "./words";
var _ = require('lodash');

export function GetWords(wordData) {
    var posibleWords = [...words];

    _.remove(posibleWords, function (word) {
        for (let index = 0; index < 5; index++) {
            if (wordData.correctPos[index] == "") continue;
            if (word[index] != wordData.correctPos[index]) return true;
        }
        return false;
    });

    // Filter out words by incorrectly guessed letters
    _.remove(posibleWords, function (word) {
        for (let index = 0; index < wordData.incorrect.length; index++) {
            if (word.includes(wordData.incorrect[index])) return true;
        }
        return false;
    });

    // filter out words that dont contain correctly guessed letter
    _.remove(posibleWords, function (word) {
        for (let index = 0; index < wordData.correct.length; index++) {
            if (!word.includes(wordData.correct[index])) return true;
        }
        return false;
    });

    console.log(posibleWords.length);

    return posibleWords;
}

