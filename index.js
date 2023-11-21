function getUserChoice() {
   
     let input = prompt("Choose rock, paper, or scissors");
    return input.toLowerCase();
    }
     function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
     return choices[randomIndex];
    }
    
    function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
     return "It's a tie!";
        }}
    
    if (userChoice === "rock") {
     if (computerChoice === "scissors")} {
    return "You win!";
     } else {
    return "Computer wins"
}




