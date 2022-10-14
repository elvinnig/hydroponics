const playGifButton = document.querySelector('#gif_play');
const buttonsContainer = document.querySelector('.buttons-container');
const betInput = document.querySelector('#current-bet');
const balanceDisplay = document.querySelector('#current-balance-display');
const topScoreContainer = document.querySelector('#top-score');

const trigger = document.querySelector(".trigger");

const modal1 = document.querySelector(".modal1");
const trigger1 = document.querySelector(".trigger1");
const closeButton1 = document.querySelector(".peace-brother");

const modal2 = document.querySelector(".modal-lose");
const trigger2 = document.querySelector(".trigger-lose");
const closeButton2 = document.querySelector(".other-name");

// topScoreContainer.textContent = `Top Score: ${ localStorage.getItem('topScore') }`;
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


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

function closeButton() {
    let text = "Are you sure you want to exit?\nClick OK or Cancel.";
    if (confirm(text) == true) {
        self.close();
    } 
    // else {
      
    // }
   
  }

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

function disableButton() {
    document.getElementById(".trigger").style.display = "block";
    setTimeout("hide()", 5000);  // 5 seconds
}
function hide() {
    document.getElementById(".trigger").style.display="none";
    //  setTimeout("show()", 5000);  // 5 seconds
}
 

const brazGif = new SuperGif({
    gif: document.getElementById('braz_gif'),
    loop_mode: 'manual',
    auto_play: false,
});
brazGif.load();
// setTimeout("hide(playGifButton)", 5000);

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
        // sleep(1700).then(() => { return true; });
        // trigger1.getElementById(".trigger").disabled = true;
        // playGifButton .classList.toggle('hidden');
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



