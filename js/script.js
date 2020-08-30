
    let player = prompt("What's your name?"); // Asks the player to enter name before page loads
    
    const playerName = document.querySelector('#player-score');
    playerName.textContent = player;

    let playerCounter = 0;
    let computerCounter = 0;

    const playerScore = document.createElement('div');
    playerScore.textContent = playerCounter;
    playerScore.className = "player-counter";
    playerName.appendChild(playerScore);

    const computerScore = document.querySelector('.computer-counter');
    computerScore.textContent = computerCounter;

    // Animations 
    const animationPlayer = document.querySelector('animation-container');

    const lostPapertoScissors = lottie.loadAnimation( {
        container: document.getElementById('animation-container'),
        path: 'animations/lost-paper-to-scissors/lost-paper-to-scissors.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "lostPapertoScissors"
    })

    const lostScissorstoRock = lottie.loadAnimation( {
        container: document.getElementById('animation-container'),
        path: 'animations/lost-scissors-to-rock/lost-scissors-to-rock.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "lostScissorstoRock"
    })

    const lostRocktoPaper = lottie.loadAnimation( {
        container: document.getElementById('animation-container'),
        path: 'animations/lost-rock-to-paper/lost-rock-to-paper.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "lostRocktoPaper"
    })

    const tiePaper = lottie.loadAnimation( {
        container: document.getElementById('animation-container'),
        path: 'animations/tie-paper/tie-paper.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "tiePaper"
    })

    const tieRock = lottie.loadAnimation( {
        container: document.getElementById('animation-container'),
        path: 'animations/tie-rock/tie-rock.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "tieRock"
    })

    const tieScissors = lottie.loadAnimation( {
        container: document.getElementById('animation-container'),
        path: 'animations/tie-scissors/tie-scissors.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "tieScissors"
    })

    const wonPaperBeatsRock = lottie.loadAnimation( {
        container: document.getElementById('animation-container'),
        path: 'animations/won-paper-beats-rock/won-paper-beats-rock.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "wonPaperBeatsRock"
    })

    const wonRockBeatsScissors = lottie.loadAnimation( {
        container: document.getElementById('animation-container'),
        path: 'animations/won-rock-beats-scissors/won-rock-beats-scissors.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "wonRockBeatsScissors"
    })

    const wonScissorsBeatsPaper = lottie.loadAnimation( {
        container: document.getElementById('animation-container'),
        path: 'animations/won-scissors-beats-paper/won-scissors-beats-paper.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "wonScissorsBeatsPaper"
    })



    const messageBanner = document.querySelector('#message-banner');
    messageBanner.textContent = "Ready to play? Shoot!";
   
    // set scores back to zero, reset the text and update the message banner
    function resetRound() {
        playerCounter = 0;
        computerCounter = 0;
        computerScore.textContent = computerCounter;
        playerScore.textContent = playerCounter;
        messageBanner.textContent = "Ready to play again? Shoot!";
        lottie.stop();

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

        // Display victory or defeat message to user and add to the total scores - this if/else-if statement is written as a tenerary operator for shorthand 
        userSelection == "rock" && computerSelection == "paper" ? (messageBanner.textContent = "Sorry pal, paper beats rock :(", ++computerCounter, computerScore.textContent = computerCounter, lottie.stop(), lottie.play("lostRocktoPaper")) :
        userSelection == "rock" && computerSelection == "scissors" ? (messageBanner.textContent = "Hell yeah, you sure crushed those scissors!", ++playerCounter, playerScore.textContent = playerCounter, lottie.stop(), lottie.play("wonRockBeatsScissors")) :
        userSelection == "rock" && computerSelection == "rock" ? (messageBanner.textContent = "Tie - Lame, guess y'all just like rocks", lottie.stop(), lottie.play("tieRock")) :
        userSelection == "paper" && computerSelection == "rock" ? (messageBanner.textContent = "Hell yeah, you sure beat that rock", ++playerCounter, playerScore.textContent = playerCounter, lottie.stop(), lottie.play("wonPaperBeatsRock")) :
        userSelection == "paper" && computerSelection == "paper" ? (messageBanner.textContent = "Tie - Lame. Guess y'all just like paper then", lottie.stop(), lottie.play("tiePaper")) :
        userSelection == "paper" && computerSelection == "scissors" ? (messageBanner.textContent = "Sorry pal, you got beat by some scissors :(", ++computerCounter, computerScore.textContent = computerCounter, lottie.stop(), lottie.play("lostPapertoScissors")) :
        userSelection == "scissors" && computerSelection == "rock" ? (messageBanner.textContent = "Sorry pal, you got beat by a rock :(", ++computerCounter, computerScore.textContent = computerCounter, lottie.stop(), lottie.play("lostScissorstoRock")) :
        userSelection == "scissors" && computerSelection == "paper" ? (messageBanner.textContent = "Hell yeah, you sure cut that paper", ++playerCounter, playerScore.textContent = playerCounter, lottie.stop(), lottie.play("wonScissorsBeatsPaper")) : 
        userSelection == "scissors" && computerSelection == "scissors" ? (messageBanner.textContent = "Tie - Lame. Guess y'all just really like scissors", lottie.stop(), lottie.play("tieScissors"))
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





 
