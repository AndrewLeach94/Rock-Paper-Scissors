
    let player = prompt("What's your name?"); // Asks the player to enter name before page loads
    let playerCounter = 0;
    let computerCounter = 0;

    const playerScore = document.querySelector('#player-score');
    playerScore.textContent = player + "'s Score: " + playerCounter;

    const computerScore = document.querySelector('#computer-score');
    computerScore.textContent = "Computer's Score: " + computerCounter;

    const messageBanner = document.querySelector('#message-banner');
    messageBanner.textContent = "Ready to play? First to five wins - shoot!";

   
    // set scores back to zero, reset the text and update the message banner
    function resetRound() {
        playerCounter = 0;
        computerCounter = 0;
        computerScore.textContent = "Computer's Score: " + computerCounter;
        playerScore.textContent = player + "'s Score: " + playerCounter;
        messageBanner.textContent = "Ready to play again? Shoot!";

    }

// Make the computer pick their choice    
    function computerPlay () { 
        let randomNumber;
        let computerSelection;
        // Generate a random whole number between between 0 and 2 - inclusive
        function generateRandom (min, max) {
            min = Math.ceil(min);
            max = Math.ceil(max);
            return randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        generateRandom(0, 2); 
        
        // Assign the random number to either rock, paper, or scissors
        if (randomNumber == 0) {
            computerSelection = "rock"
        }

        else if (randomNumber == 1) {
            computerSelection = "paper";
        }

        else if (randomNumber == 2) {
            computerSelection = "scissors";
        }
        return computerSelection;
    }
    

                    // Play a single round - Have user enter their choice, count scores, roll computer's turn, and display a message
    function playRound(userSelection, computerSelection) {

        // Display victory or defeat message to user and add to the total scores - this if/else-if statement is written as a tenerary operator for shorthand                return  userSelection == "rock" && computerSelection == "rock" ? console.log("Lame. Guess y'all just like rocks then") :
        userSelection == "rock" && computerSelection == "paper" ? (messageBanner.textContent = "Sorry pal, paper beats rock :(", ++computerCounter, computerScore.textContent = "Computer's Score: " + computerCounter) :
        userSelection == "rock" && computerSelection == "scissors" ? (messageBanner.textContent = "Hell yeah, you sure crushed those scissors!", ++playerCounter, playerScore.textContent = player + "'s Score: " + playerCounter) :
        userSelection == "rock" && computerSelection == "rock" ? messageBanner.textContent = " Tie - Lame, guess y'all just like rocks" :
        userSelection == "paper" && computerSelection == "rock" ? (messageBanner.textContent = "Hell yeah, you sure beat that rock", ++playerCounter, playerScore.textContent = player + "'s Score: " + playerCounter) :
        userSelection == "paper" && computerSelection == "paper" ? messageBanner.textContent = "Tie - Lame. Guess y'all just like paper then" :
        userSelection == "paper" && computerSelection == "scissors" ? (messageBanner.textContent = "Sorry pal, you just got beat by some scissors :(", ++computerCounter, computerScore.textContent = "Computer's Score: " + computerCounter) :
        userSelection == "scissors" && computerSelection == "rock" ? (messageBanner.textContent = "Sorry pal, you got beat by a rock :(", ++computerCounter, computerScore.textContent = "Computer's Score: " + computerCounter) :
        userSelection == "scissors" && computerSelection == "paper" ? (messageBanner.textContent = "Hell yeah, you sure cut that paper", ++playerCounter, playerScore.textContent = player + "'s Score: " + playerCounter) : 
        userSelection == "scissors" && computerSelection == "scissors" ? messageBanner.textContent = "Tie - Lame. Guess y'all just really like scissors"
            : "You forgotten how to spell? Try again";

        
        // End and reset the round when someone's score reaches 5

        if (playerCounter == 5) {
            alert("How's it feel to be a winner?");
            resetRound();
        }

        else if (computerCounter == 5) {
            alert("Yikes, better luck next time");
            resetRound();
        }
           
    }



const rock = document.querySelector('#btn-rock');
rock.addEventListener("click", function(e) {
    playRound("rock", computerPlay())
});
const paper = document.querySelector('#btn-paper');
paper.addEventListener("click", function(e) {
    playRound("paper", computerPlay())});

const scissors = document.querySelector('#btn-scissors');
scissors.addEventListener("click", function(e) {
    playRound("scissors", computerPlay()) 
});





 
