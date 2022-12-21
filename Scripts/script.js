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

// credits timer cosnt : https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
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








