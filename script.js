
let choices = ['rock', 'paper', 'scissors'];

function computerPlay(){
    return choices[Math.floor(Math.random() * [choices.length])];
}

function playRound(computerSelection,playerSelection){
    
    if (playerSelection ===  computerSelection ){
        alert("Its a tie");
    } else if(playerSelection === 'rock' && computerSelection ==='scissors'){
        alert("Rock Beat Scissors, Player Won!");
    } else if(playerSelection === 'rock' && computerSelection ==='paper'){
        alert("Paper Beat Rock, Computer Won!");
    } else if(playerSelection === 'paper' && computerSelection ==='rock'){
        alert("Paper Beat Rock, Player Won!");
    } else if(playerSelection === 'paper' && computerSelection ==='scissors'){
        alert("Scissors Beat Paper, Computer Won!");
    } 
    else if(playerSelection === 'scissors' && computerSelection ==='rock'){
        alert("Rock Beat Scissors, Computer Won!");
    } else if(playerSelection === 'scissors' && computerSelection ==='paper'){
        alert("Scissors Beat Paper, Player Won!");
    } 
    

}




const computerSelection = computerPlay();
let pick = prompt("Pick one: rock, paper or scissors?");
const playerSelection = pick.toLowerCase();;







playRound(computerSelection, playerSelection);

console.log("Selection of computer:" + computerSelection);
console.log("Player Selection:" + playerSelection);

