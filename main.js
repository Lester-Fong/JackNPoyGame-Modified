const game = () => {
    let pScore = 0;
    let cScore = 0;
    let MAX_SCORE = 3;
    const gameOver = document.querySelector('.intro h1');
    const playBtn = document.querySelector('.intro button');
    const introScrn = document.querySelector('.intro');
    const match = document.querySelector('.match');
    const playerScore = document.querySelector('.player-score p')
    const computerScore = document.querySelector('.computer-score p')



    // Start of the Game
    const startgame = () => {
        playBtn.addEventListener('click', () => {
            introScrn.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.option button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hand');

        //To make the hands animate again after 1 try
        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = "";
            });
        });

        // Computer options
        const computerOptions = ['rock', 'scissors', 'paper'];

        options.forEach(option => {
          option.addEventListener('click', function () {
              //Computer Choice
              const computerNumbers = Math.floor(Math.random() * 3);   
              const computerChoice = computerOptions[computerNumbers];
              
            
            setTimeout(() => {
                // Here is where the comparehands function is called  
                compareHands(this.textContent, computerChoice);
                // Updating the Images
                playerHand.src = `./images/${this.textContent}.png`
                computerHand.src = `./images/${computerChoice}.png`
            }, 1500)

            // Animation of the Images/Hands
            playerHand.style.animation = 'ShakeysPlayer .8s ease';
            computerHand.style.animation = 'ShakeysComputer .8s ease';


            // Scoreboard
            

          })
        });
    };

   // The scoreboard of the game.
    const updateScore = () => {
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        Limit();
        Retry();
    }

    // If the score reaches the value of MAX_SCORE, the match will end and show text if win or lose!

    const Limit = () => {
        if (cScore === MAX_SCORE) {
            match.classList.remove('fadeIn');
            match.style.transitionDelay = "0s"
            introScrn.classList.add('fadeIn');
            playBtn.textContent = "Let's Play Again!"
            gameOver.textContent = "Game Over, Computer Wins"
        }

        if (pScore === MAX_SCORE) {
            match.classList.remove('fadeIn');
            match.style.transitionDelay = "0s"
            introScrn.classList.add('fadeIn');
            playBtn.textContent = "Let's Play Again!"
            gameOver.textContent = "Congrats, You're a Champ!"
        }
    }

    //To play again after getting the MAX_SCORE

    const Retry = () => {
        playBtn.addEventListener('click', function() {
            pScore = 0;
            cScore = 0;
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
            match.classList.add('fadeIn');
            match.style.transitionDelay = "0s"
            introScrn.classList.remove('fadeIn')
            introScrn.classList.add('fadeOut');
        });
    }


    const compareHands = (playerChoice, computerChoice) => {
        // Update Text
        const winner = document.querySelector('.winner');

        // Checking for a Tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a Tie"
            return;
        }
        // Check for Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Player Wins!"
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins!"
                cScore++;
                updateScore();
                return;
            }
        }
        
        // Check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = "Player Wins!"
                pScore++;
                updateScore();
            return;
            } else {
                winner.textContent = "Computer Wins!"
                cScore++;
                updateScore();
                return;
         }
        }
        //Check for Scissor

        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
            winner.textContent = "Player Wins!"
            pScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Computer Wins!"
            cScore++;
            updateScore();
            return;
        }
    }


 }


    startgame();
    playMatch();
};

game();