import { words } from "./words";
import { DrawWords, ClearWords } from "./viewController";
var _ = require('lodash');

export function GetWords(wordData) {
    var posibleWords = words;

    posibleWords = posibleWords.filter(e => {
        wordData.incorrect.array.forEach(element => {

        });
    })



    ClearWords();
    DrawWords(posibleWords);
}