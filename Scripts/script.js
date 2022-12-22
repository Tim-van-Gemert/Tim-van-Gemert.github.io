
// Randomized word script
let changedWord = '';
let targetWord = document.getElementById('softDev');
const LETTERS = targetWord.innerText.split('');
const ARR = targetWord.innerText.split('');

function RandomizeLetters() {

    const RANDOMIZED_WORD = [];
    ARR.forEach(element => {
        const random = Math.floor(Math.random() * LETTERS.length);
        RANDOMIZED_WORD.push(LETTERS[random]);
    });

    targetWord = RANDOMIZED_WORD.join('');
    document.getElementById('softDev').innerText = targetWord;

}


const timer = ms => new Promise(res => setTimeout(res, ms))
async function asignCorrectLetter(arrRandomized) {

    for (i = 0; i < ARR.length; i++) {
        arrRandomized[i] = ARR[i];
        result = arrRandomized.join('');
        document.getElementById('softDev').innerText = result;


        await timer(70);
    }

}


function Execute() {

    RandomizeLetters();
    const arrRandomized = targetWord.split('');
    setTimeout(() => {
        asignCorrectLetter(arrRandomized);
    }, 1000);

}

Execute();

//Animation play script
function CheckHeight() {
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let value = 0


    if (scrollTop >= 100) {
        document.getElementById('sectionTwo').style.animation = " fadeIn 1s linear";
        document.getElementById('sectionTwo').style.opacity = "1";
    }

    if (scrollTop >= 600) {
        document.getElementById('sectionThree').style.animation = " fadeIn 1s linear";
        document.getElementById('sectionThree').style.opacity = "1";
    }
}













