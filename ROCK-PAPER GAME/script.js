//object that stores total score
let totalScore = {
    playerScore: 0,
    computerScore: 0
  };
  
  //Global access to divs 
  let hand = document.getElementById("hand");
  let result = document.getElementById("result");
  let t = document.getElementById("total");
  
  function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
  }
  
  function getANDshowResult(playerChoice, computerChoice) {
  
    //First show choices
    hand.innerText= `🧑 ${playerChoice}  VS  🤖 ${computerChoice}`

    // All situations where match draws, do nothing with value of total score
    if (playerChoice == computerChoice) {
      result.innerText = `IT'S A DRAW`
    }
  
    // All situations where human wins, set increase player score by 1 and tell that he is won in recent match
  
    else if (playerChoice == "Rock" && computerChoice == "Scissors") {
      totalScore[playerScore] += 1;
      result.innerText = `YOU WIN`
    }

    
    else if (playerChoice == "Paper" && computerChoice == "Rock") {
      totalScore[playerScore] += 1;
      result.innerText = `YOU WIN`
    }
    else if (playerChoice == "Scissors" && computerChoice == "Paper") {
      totalScore[playerScore] += 1;
      result.innerText = `YOU WIN`
    }
    // Otherwise human loses, increase the value of computer score
    else {
      totalScore[computerScore] += 1;
      result.innerText = `YOU LOOSE`
    }

//AT LAST UPDATE TOTAL SCORE
    t.innerText = `${totalScore}`//WE CAN EVEN DIRECTLY WRITE IF ONLY VARIABLE IS TO PRINTED 
                                 //LIKE t.innerText = a;

  }
  
  

  function onClickRPS() {
    //DEFINING WHAT HAPPENS WHEN USER CLICKS EACH BUTTON
    let buts = document.getElementsByClassName("rpsButton");
    for (b of buts) {
      b.onclick = () => {
        let computerChoice = getComputerChoice();
getANDshowResult(but.value, computerChoice);
    }
}
  
    let endG = document.getElementById("endGameButton");
    endG.onclick = () => endGame();
  }
  
  // ** endGame function sets score back to 0 and clears all the text on the DOM **
  function endGame() {
    totalScore[playerScore] = 0;
    totalScore[computerScore] = 0;
    result.innerText = '';
    hand.innerText = '';
    t.innerText = '';
  }
  
onClickRPS()