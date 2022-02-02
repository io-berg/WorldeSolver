import _, { cloneWith } from "lodash";
import { GetWords } from "./solver";
import { DrawWords, ClearWords } from "./viewController";
import css from "./styles.css"

const formSubmit = document.querySelector('#submitBtn');

formSubmit.addEventListener('click', () => {
    const form = document.querySelector('#wordDataForm');

    var data = {
        incorrect: [...form.wrongLetters.value.toLowerCase()],
        correct: [...form.correctLetters.value.toLowerCase()],
        correctPos: {
            "0": form.correctPos1.value.toLowerCase(),
            "1": form.correctPos2.value.toLowerCase(),
            "2": form.correctPos3.value.toLowerCase(),
            "3": form.correctPos4.value.toLowerCase(),
            "4": form.correctPos5.value.toLowerCase(),
        },
    }

    ClearWords();
    DrawWords(GetWords(data));
});
