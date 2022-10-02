const playGifButton = document.querySelector('#gif_play');
const buttonsContainer = document.querySelector('.buttons-container');
const betInput = document.querySelector('#current-bet');
const balanceDisplay = document.querySelector('#current-balance-display');
const topScoreContainer = document.querySelector('#top-score');

topScoreContainer.textContent = `Top Score: ${ localStorage.getItem('topScore') }`;

// Add an item
localStorage.setItem('currentPlayer', 'Uplift Code Camp'); 

// Music
const winningMusic = new Audio('./assets/Lottery-winning-sound-effect.mp3');
const lossingMusic = new Audio('./assets/You-lose-game-over.mp3');

// Settings
const settingsBtn = document.getElementById('settings');
settingsBtn.addEventListener('click', function(){
    alert(`Going to settings`);
});

// Initial values
let randomNumber;
let selectedCup;
let currentBet = 0;
let balance = 500;
renderBalance();

/* const cupsGif = new SuperGif({
    gif: document.getElementById('cups_gif'),
    loop_mode: 'manual',
    auto_play: false
});
cupsGif.load(); */

const brazGif = new SuperGif({
    gif: document.getElementById('braz_gif'),
    loop_mode: 'manual',
    auto_play: false,
});
brazGif.load();

/* function reset() {
    brazGif.style.animation ='none';
    brazGif.style.animation ='null';
} */


playGifButton.addEventListener('click', function(){
    
    // cupsGif.play();
    brazGif.load();

    if( checkBet() ){
        randomNumber = randomize(); // This will return a random number 0-2
        console.log(`Random Number; ${randomNumber}`);

        buttonsContainer.classList.toggle('hidden');
        
    }
});

// Randomizes a number from 0 - 2
function randomize(){
    console.log(randomNumber)
    return Math.floor( Math.random() * 2 );
   
}

function checkBet(){
    currentBet = Number( betInput.value );
    console.log( currentBet );

    if( currentBet == 0 || currentBet > balance ){
        alert(`Please place a valid bet`);
        return false;
    }else{
        return true;
    }
}

function renderBalance(){
    balanceDisplay.textContent = `Balance: ${balance}`;
}

// Check if end game
function checkEndGame(){
    if( balance <= 0 ){
        alert(`You lose. Try again!`);
    }else if( balance >= 1000 ){
        alert(`Congratulations!`);
    }
    // brazGif.load();
}

let chooseName = ['goku', 'terminator']
function createUser () {
    for (let count = 0; count < chooseName.length; count++){
        const newBtn = document.createElement('button');
        newBtn.textContent = chooseName[count]; // assign name on buttons
        newBtn.id = count
        buttonsContainer.appendChild( newBtn );

        newBtn.addEventListener('click', function(){
            selectedCup = Number( newBtn.id);

            // brazGif.play();   //play gif once click

            brazGif.play(); 
         
            


            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
              }
            // await sleep (20000);
            sleep(18700).then(() => { checkWinningCondition( selectedCup ); });
            
            // checkWinningCondition( selectedCup );
        });
    }
    }


function checkWinningCondition( userChoice ){
    if( randomNumber == userChoice ){
        // Correct choice by the user
        // Add current bet on the balance
        alert(`Congrats! You have the winning bet!`);
        winningMusic.play();
        balance += currentBet;
    }else{
        // Wrong choice
        // Deduct bet from the balance
        alert(`Boo! Try again!`);
        lossingMusic.play();
        balance -= currentBet;    
    }

    // sleep(-2000).then(() => { brazGif.pause(); });
    brazGif.pause();
    // brazGif.fadeOut('slow');

    // brazGif.reset();

    
    // brazGif.load();
    // Check balance if equal or greater than 1M, win game
    // Check balance if below 0, end game
    renderBalance();
    checkEndGame();
    buttonsContainer.classList.toggle('hidden');
    
    currentBet = 0;
    betInput.value = 0;
}
createUser();
// let numberOfCups = 2;
// createButtons( numberOfCups );
// brazGif.reset();