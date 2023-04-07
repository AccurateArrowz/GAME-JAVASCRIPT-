/* 
🌟 APP: Fighting Game

Create an updateGame() function that will update the DOM with the state of the game 👇
========================================

- updateGame()

These are the 2 classes you must create and their methods 👇
========================================

class Player {
  - strike()
  - heal()
}

class Game {
  - play()
  - checkIsOver()
  - declareWinner()
  - reset()
}

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'play' = Button to run simulation
#2 ID 👉 'result' = Div that holds the winner of the match
#3 ID 👉 'p1Name' = Div that holds player 1's Name
#4 ID 👉 'p2Name' = Div that holds player 2's Name
#5 ID 👉 'p1Health' = Div that holds player 1's health
#6 ID 👉 'p2Health' = Div that holds player 2's health
*/

// ** Grabs elements from the DOM and stores them into variables **
let stimulateButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')

// ** Check if either players health is  0 and if it is, then update isOver to true **
const updateGame = (p1, p2) => {
  // Update the DOM with the names and the latest health of players
  p1NameDiv.innerText = p1.name;
  p2NameDiv.innerText = p2.name;
  p1HealthDiv.innerText = p1.health;
  p2HealthDiv.innerText = p2.health;
  // Condition IF either player health is <= 0 then set isOver to true and declareWinner
  if (p1.health <= 0 || p2.health <= 0) {
    myG.isOver = true;
    myG.declareWinner(p1, p2)
     // NOTE "myG" is accessed here ,even if though it is decelared below
  }

}

// ** Create the Player class which can create a player with all it's attributes and methods **
// qazi = new Player('Qazi', 100, 7)
// qazi.name 👉 'Qazi'
// qazi.health 👉 100
// qazi.attackDmg 👉 7
class Player {
  constructor(name, health, maxAttackDamage) {
    this.name = name;
    this.health = health;
    this.maxAttackDmg = maxAttackDamage;
  }

  // ** Attack an enemy with a random number from 0 to YOUR attackDmg bonus **

  strike(_player, enemy, maxAttackDmg) {

            //EVEN THO WE CAN CONSOLE LOG THE ARGUMRENT "MAX_ATTACK" ,WE STILL AREN'T ABLE TO USE INSIDE MATH
     let damageAmount = Math.ceil(Math.random() * 11);
    enemy.health -= damageAmount;
             //IF YOU DO THIS :- updateGame(player, enemy,myG.isOver), IT WILL SWAP NAME 
             //SO DO THIS:-
    updateGame(p1,p2,gameState )
            //THIS MEANS CHANGING ARUGUMENT WILL CHANGE VALUE OF PARAMETER
           
    //  Return a message of 'player name attacks enemy name for damageAmount'

  }

  // ** Heal the player for random number from  1 to 5 **
  heal(player) {

    // Get random number between 1 - 5 and store that in hpAmount
    let hpAmount =Math.ceil(Math.random() * 5)
    // Add hpAmount to players health
    player.health += hpAmount;
    //  Update the game and DOM with updateGame()
    updateGame(p1,p2,gameState );
  
    //  Return a message of 'player name heals for hpAmount HP'

  }
}

// ** Create the Game class with all it's attributes and methods to run a match **
// game = new Game()
// game.isOver 👉 false
class Game {
  constructor() {
    this.isOver = false;
  }

  // ** If the game is over and a player has 0 health declare the winner! **
  declareWinner(p1, p2) {
    let msg =`TIE`;
    //SETTING DEFAULT VALUE TO TIE SO IT DOESN'T GO TO UNDEFINED WHEN GLITCHIN
    console.log(p1)
   
    if ( p1.health<= 0){
      msg = `${p2.name} WINS!`
     }

    else if ( p2.health <= 0){
      msg = `${p1.name} WINS!`
    }
    // Play victory sound

    // Return message variable 
    resultDiv.innerText = `${msg}`
  }

  // ** Reset the players health back to it's original state and isOver to FALSE **
  reset(p1, p2) {
    // set p1 health and p2 health back to 100 and isOver back to false and clear resultDiv.innerText and don't forget to updateGame()
    this.isOver = false;
    p1.health = 100;
    p2.health = 100;
    updateGame(p1, p2);
    resultDiv.innerText = ""

  }

  // ** Simulates the whole match untill one player runs out of health **
  stimulate(p1, p2) {
    // Reset to make sure player health is back to full before starting
    p1.health = 100;
    p2.health = 100;
    // Make sure the players take turns untill isOver is TRUE
    while (this.isOver == false) {
         //CAN ALSO BE WRITTEN AS while(!this.isOver){
      console.log("inside")
      p1.strike(p1, p2, p1.maxAttackDamage)
       p2.strike(p2, p1, p2.maxAttackDamage)
      p1.heal(p1)
      p2.heal(p2)
      //Make sure both players get strike() and heal() once each loop
    }
    // Once isOver is TRUE run the declareWinner() method 
    console.log("outside")
this.declareWinner(p1,p2)
  }

}

// ** Create 2 players using the player class **
let player1 = new Player('sujay', 100, 10)
let player2 = new Player('ravi', 100, 11)
// ** Save original Player Data into a variable in order to reset **
let p1 = player1;
let p2 = player2;

// ** Create the game object from the Game class **
let myG = new Game();
// ** Intialize the game by calling updateGame() **
updateGame(p1, p2, myG.isOver)

// ** Save intial isOver from the game object inside this variable **
let gameState;
gameState = myG.isOver;

// ** Add a click listener to the simulate button that runs the play() method on click and pass in the players **
stimulateButton.onclick = () => {

  myG.stimulate(p1, p2)
}

document.getElementById("reset").onclick=() => myG.reset(p1,p2)

// Add functionality where players can press a button to attack OR heal
// ** Player 1 Controls **
document.addEventListener('keydown', function(e) {
  // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()
  console.log(e.key)
  if (e.key == "q" && p2.health > 0 ) {
    p1.strike(p1, p2, p1.maxAttackDamage)
  }
  // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {

  // if you press a AND the player health is greater than 0 AND isOver is still false then heal()
  if (e.key == "a" && p1.health > 0 ) {
    p1.heal(p1)
  }
  // After healing then play heal sound

});

// ** Player 2 Controls **
document.addEventListener('keydown', function(e) {

  // if you press p AND enemy health is greater than 0 AND isOver is still false then stike()
  if (e.key == "p" && p2.health > 0 ) {
    p2.strike(p2, p1, p2.maxAttackDamage)
  }
  // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {
  // if you press l AND the player health is greater than 0 AND isOver is still false then heal()
  if (e.key == "l" && p2.health > 0 ) {
    p2.heal(p2)
  }
  // After healing then play heal sound

});





