
// Randomized word script
let changedWord = '';
let targetWord = document.getElementById('softDev');
const letters = targetWord.innerText.split('')
const arr = targetWord.innerText.split('')

function RandomizeLetters() {
    const randomizedWord = []
    arr.forEach(element => {
        const random = Math.floor(Math.random() * letters.length);
        randomizedWord.push(letters[random]);
    });
    targetWord = randomizedWord.join('');
    document.getElementById('softDev').innerText = targetWord;
}


const timer = ms => new Promise(res => setTimeout(res, ms))
async function asignCorrectLetter(arrRandomized) {
    for (i = 0; i < arr.length; i++) {

        arrRandomized[i] = arr[i];
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

    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        value = 1400
    } else {
        value = 600
    }
    
    if (scrollTop >= 100) {
        document.getElementById('sectionTwo').style.animation = " fadeIn 1s linear";
        document.getElementById('sectionTwo').style.opacity = "1";
    }

    if (scrollTop >= value) {
        document.getElementById('sectionThree').style.animation = " fadeIn 1s linear";
        document.getElementById('sectionThree').style.opacity = "1";
    }
}













