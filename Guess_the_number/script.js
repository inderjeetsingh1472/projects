let random= parseInt((Math.random())*100 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
console.log(random);

let privGuess=[];
let numGuess=1;
const p=document.createElement('p');


let playgame=true;

if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess= parseInt(userInput.value);
        console.log(guess)
        validguess(guess)
    })
}

const validguess=(guess)=>{
if(isNaN(guess)){
    alert("plz enter valid no")
}
else if(guess<1){
alert(`enter number more than 1`);
}
else if(guess>100){
    alert('plz enter small no than 100')
}


else{
privGuess.push(guess);
if(numGuess==10){
    displayGuess(guess);
    displayMessage(`Game over random number was ${random}`)
    endGame()
}
else{
    displayGuess(guess);
    checkguess(guess)
}
}

}

const checkguess = (guess)=>{
if(guess===random){
    displayMessage(`wow! you guessed right`)
}
else if(guess<random){
    displayMessage(`this is very low no`)
}
else if(guess>random){
    displayMessage(`guess is too high`)
}
}

const displayGuess =(guess)=>{
userInput.value='';
guessSlot.innerHTML=`${privGuess}`
numGuess++;
remaining.innerHTML=`${11-numGuess}`
// alert(numGuess)

}

const displayMessage=(message)=>{
lowOrHi.innerHTML=`<h2>${message}</h2>`
}

const endGame=()=>{
userInput.value='';
userInput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML=`<h2 id="newGame">Start a new game</h2>`;
startOver.appendChild(p)
playgame=false;
displayMessage(`the game was ended`)
newGame()

}

const newGame =()=>{
const newGameButton=document.querySelector('#newGame');
newGameButton.addEventListener('click',(e)=>{
let random= parseInt((Math.random())*100 +1);
privGuess=[];
numGuess=1;
guessSlot.innerHTML='';
remaining.innerHTML=`${11-numGuess}`
userInput.removeAttribute('disabled')
startOver.removeChild(p)
playgame=true;
displayMessage(``)
})
}