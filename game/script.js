let playerScore = 0 ,computerScore = 0;
let buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
        button.addEventListener('click', ()=>{
          game(button.id) ;      
        }) 
});

function game(option) {
   
  const playerSelection = String(option);  
  const computerSelection = computerPlay();
  
  let result = document.createElement("div");
  result.style.cssText = 'border : 1px solid black;center; background-color:pink; width:300px; margin-left:250px';
  result.textContent = playRound(playerSelection, computerSelection);
  document.body.appendChild(result);
  document.getElementById("score").textContent = playerScore; 
 
  let finalResult = document.createElement("div");
  finalResult.style.cssText = 'border : 1px solid black; background-color:pink; width:300px;color : red;margin-left:250px'; 
  
  if (playerScore == 5 ) 
  {   finalResult.textContent = "End of game YOU ARE THE WINNER!";
      document.body.appendChild(finalResult);
      return;
  }
       
  else if (computerScore == 5 ) 
  {   finalResult.textContent = "End of game you lose Computer wins!";
      document.body.appendChild(finalResult);
      return;
  }   
  
} //end of function game

// Math.random()*3 returns a random number between 0 and 3:
function computerPlay() {
  let option = Math.round(Math.random() * 3);
   

  // ‘Rock’, ‘Paper’ or ‘Scissors’.
  switch (option) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
} //end of function computerPlay

function playRound(playerSelection, computerSelection) {
   
  let msg = "";

  if (playerSelection == computerSelection) {
          msg  = "same selection , You have a tie";
           
    } else if ((playerSelection == "paper" && computerSelection == "rock")  
            ||
            (playerSelection == "scissors" && computerSelection == "paper")  
            ||
            (playerSelection == "rock" && computerSelection == "scissors") )
            {
                msg  = "You win";
                playerScore++;
              
            }
            else {
               msg  = "Computer wins";
               computerScore++ ; 
              }
  return msg;
} //end of function playRound

 