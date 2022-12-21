
// Randomized word script
let changedWord = '';
const Letters = ["S", "o", "f", "t", "w", "a", "r", "e", "", "D", "e", "v", "e", "l", "o", "p", "e", "r", "."];
let targetWord = document.getElementById('softDev');
const arr = targetWord.innerText.split('')

function RandomizeLetters() {
    const randomizedWord = []
    arr.forEach(element => {
        const random = Math.floor(Math.random() * Letters.length);
        randomizedWord.push(Letters[random]);
    });
    targetWord = randomizedWord.join('');
    changedWord = targetWord;
    targetWord = changedWord;
    document.getElementById('softDev').innerText = targetWord;
}


const timer = ms => new Promise(res => setTimeout(res, ms))
async function asignCorrectLetter(arrRandomized){
    for (i = 0; i < arr.length; i++) {
        arrRandomized[i] = arr[i];
        result = arrRandomized.join('');
        document.getElementById('softDev').innerText = result;
        await timer(70); 
    }
}


function Execute(){
    RandomizeLetters();
    const arrRandomized = targetWord.split('');
    asignCorrectLetter(arrRandomized);
}

Execute();


//Animation play script

function CheckHeight(){
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let value = 600

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        value = 1200;
    }

    console.log(value)

        if (scrollTop >= 100) {
            document.getElementById('sectionTwo').style.animation = " fadeIn 1s linear";
            document.getElementById('sectionTwo').style.opacity = "1";
        }

        if (scrollTop >= value) {
            document.getElementById('sectionThree').style.animation = " fadeIn 1s linear";
            document.getElementById('sectionThree').style.opacity = "1";
        }
    }
    












