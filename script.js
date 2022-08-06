    //const roundAmount = prompt("How many rounds would you like to play?")
    roundAmount = 5;
    let computerSelection = computerPlay();
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;



    // Generates computers choice each game
    function computerPlay() {
        let randomNumber = Math.floor(Math.random() * 3 + 1)
        switch (randomNumber) {
            case 1:
                return 'rock'
            case 2:
                return 'paper'
            case 3:
                return 'scissors'   
        }
    }
        
    // Single Round
    function playRound(computerSelection){

        // Player input
        //let playerSelection = prompt("Rock Paper or Scissors?").toLowerCase();
        let playerSelection = 'rock'

        // States Player and Computers choice
        console.log("You chose: " + playerSelection);
        console.log("The computer chose: " + computerSelection);

        //Check to see winner, adds 1 to winners score
        if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')){
            playerScore ++;
            return 'You won! You really are skilled';
        }
        else if (playerSelection === computerSelection) {
            return 'It\'s a draw im afraid';
        }
        else{
            computerScore ++;
            return 'You\'ve lost and the computer won! What a shame';
            
        }
        
    }
    /**
    //Attempts to run the game until number of games reaches roundAmount
    function game(roundAmount){

        //Runs the below lines until i = roundAmount
        for (let i = 0; i < roundAmount; i++) {

            computerSelection = computerPlay();
   

            //Prompts player input,  compares player input to computer choice and picks winner 
            playRound(computerSelection);

            //console.log("test");
        }
    }
    
    //console.log(game(roundAmount));
    **/
    console.log(playerScore);
    console.log(computerScore);
    console.log(playRound(computerSelection));