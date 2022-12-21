const TARGET = document.querySelector('#animated-text');
let targetCharacters = TARGET.dataset.text;

console.log(targetCharacters);

function randomizeCharacters() {
    TARGET.innerHTML = targetCharacters
}

(randomizeCharacters())()