let randomNum = Math.round(random());
    
 let choice = prompt("Enter Heads or Tails:").toLowerCase();

// If the number is less than 0.5, it's 'Heads'. Otherwise, it's 'Tails'.
  if (randomNum < 0.5) {
    return 'Heads';
  } else {
    return 'Tails';
  }
if (randomNum) && (choice === 'heads') {
    alert("You win!");
} else if (!randomNum) && (choice === 'tails') {
    alert("You win!");
} else {
    alert("You lose!");
}

