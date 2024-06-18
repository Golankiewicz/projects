let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  };
  
  const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
   if(humanGuess<0 || humanGuess>9){
    alert('Wrong Number, pick once more!'); 
    return;
   }
    if (
      Math.abs(humanGuess - secretTarget) <=
      Math.abs(computerGuess - secretTarget)
    ) {
      return true;
    } else {
      return false;
    }
  };
  
  const updateScore = (winner) => {
    if (winner === "human") {
      humanScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
  };
  
  const advanceRound = () => {
    currentRoundNumber++;
  };
  
