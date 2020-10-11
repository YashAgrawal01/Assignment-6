// Get a random number between 0 & 9
var coinFlip = Math.floor(Math.random() * 10);
var choice = window.prompt("Choose Heads (H) or Tails (T):");

var result = Boolean (coinFlip > 4);
var resultsHeads = Boolean (choice.toUpperCase() == "H" || choice.toLowerCase() == "heads");
var resultsTails = Boolean (choice.toUpperCase() == "T" || choice.toLowerCase() == "tails");

if (result) {
    //Result is Heads

    if (resultsHeads) {
        window.alert("The flip was heads and you chose heads...you win!");
    } else if (resultsTails) {
        window.alert("The flip was heads but you chose tails...you lose!");
    } else {
        window.alert("Invalid choice.");
    }
} else {
    //Result is Tails
    
    if (resultsHeads) {
        window.alert("The flip was tails but you chose heads...you lose!");
    } else if (resultsTails) {
        window.alert("The flip was tails and you chose tails...you win!");
    } else {
        window.alert("Invalid choice.");
    }
}