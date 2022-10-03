const playGifButton = document.querySelector('#gif_play');
const buttonsContainer = document.querySelector('.buttons-container');
const betInput = document.querySelector('#current-bet');
const balanceDisplay = document.querySelector('#current-balance-display');
const topScoreContainer = document.querySelector('#top-score');

const modal1 = document.querySelector(".modal1");
const trigger1 = document.querySelector(".trigger1");
const closeButton1 = document.querySelector(".peace-brother");

const modal2 = document.querySelector(".modal-lose");
const trigger2 = document.querySelector(".trigger-lose");
const closeButton2 = document.querySelector(".other-name");

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
let selectedUser;
let currentBet = 0;
let balance = 500;
renderBalance();

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function toggleModal1() {
    modal1.classList.toggle("show-modal1");
}

function toggleModal2() {
    modal2.classList.toggle("show-modal-lose");
}

const brazGif = new SuperGif({
    gif: document.getElementById('braz_gif'),
    loop_mode: 'manual',
    auto_play: false,
});
brazGif.load();


playGifButton.addEventListener('click', function(){
    
       brazGif.load();

    if( checkBet() ){
        randomNumber = randomize(); // This will return a random number 0-1
        console.log(`Random Number; ${randomNumber}`);

        buttonsContainer.classList.toggle('hidden');
        
    }
});

// Randomizes a number from 0 - 1
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
            selectedUser = Number( newBtn.id);

            brazGif.play(); 
                   
        function sleep(ms) {    //delay result
                return new Promise(resolve => setTimeout(resolve, ms));
              }
           
            sleep(18700).then(() => { checkWinningCondition( selectedUser ); });
            
            });
    }
    }

function windowOnLoad(event) {
    if (event.target === modal) {
        // toggleModal();
    }
}

function windowOnLoad1(event) {
    if (event.target === modal1) {
        // toggleModal1();
    }
}

function windowOnLoad2(event) {
    if (event.target === modal2) {
        // toggleModal1();
    }
}

// window.alert = function() {};

function checkWinningCondition( userChoice ){
    if( randomNumber  == userChoice ){
        // Correct choice by the user
        // Add current bet on the balance

        toggleModal1();
        
        winningMusic.play();
        balance += currentBet;
    }else{
        // Wrong choice
        // Deduct bet from the balance

        toggleModal2();
        
        // alert(`Boo! Try again!`);

        lossingMusic.play();
        balance -= currentBet;    
    }

   
    brazGif.pause();
  


    renderBalance();
    checkEndGame();
    buttonsContainer.classList.toggle('hidden');
    
    currentBet = 0;
    betInput.value = 0;
}
createUser();

closeButton2.addEventListener('click', function(){

    brazGif.load();

});
closeButton1.addEventListener('click', function(){
    
    brazGif.load();
    
});

closeButton1.addEventListener("click", toggleModal1);
closeButton2.addEventListener("click", toggleModal2);



