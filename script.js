
let choices = ['rock', 'paper', 'scissors'];
let winner = 0; //this variable helps to determine who won to the counter, if 1 player won if 0 computer won
let computerCount =0;
let playerCount=0;
let tieCount =0;
function computerPlay(){
    return choices[Math.floor(Math.random() * [choices.length])];
}

function playRound(computerSelection,playerSelection){
   
    if (playerSelection ===  computerSelection ){
        console.log("Its a tie");
        return 2;
    } else if(playerSelection === 'rock' && computerSelection ==='scissors'){
        console.log("Rock Beat Scissors, Player Won!");
        return 1;
    } else if(playerSelection === 'rock' && computerSelection ==='paper'){
        console.log("Paper Beat Rock, Computer Won!");
        return 0;
    } else if(playerSelection === 'paper' && computerSelection ==='rock'){
        console.log("Paper Beat Rock, Player Won!");
        return 1;
    } else if(playerSelection === 'paper' && computerSelection ==='scissors'){
        console.log("Scissors Beat Paper, Computer Won!");
        return 0;
    } 
    else if(playerSelection === 'scissors' && computerSelection ==='rock'){
        console.log("Rock Beat Scissors, Computer Won!");
        return 0;
    } else if(playerSelection === 'scissors' && computerSelection ==='paper'){
        console.log("Scissors Beat Paper, Player Won!");
        return 1;
    } 
    

}
function game(){
    for (let i = 0; i < 5; i++) {
        console.log("game:" + (i+1));
        const computerSelection = computerPlay();
        let pick = prompt("Pick one: rock, paper or scissors?");
        const playerSelection = pick.toLowerCase();
        winner = playRound(computerSelection, playerSelection);
        if (winner === 2){
            tieCount = tieCount +1;
        } else if(winner === 1){
            playerCount = playerCount +1 ;
        } else if (winner===0){
            computerCount = computerCount +1;
        }
        
        
        console.log("Selection of computer:" + computerSelection);
        console.log("Player Selection:" + playerSelection);
        console.log("Player wons:" + playerCount);
        console.log("Computer Won:" + computerCount);
        console.log("Ties:" + tieCount);
      }
}
game();