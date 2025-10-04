let randomNum = Math.random();
let coinFlip; 
 

// If the number is less than 0.5, it's 'Heads'. Otherwise, it's 'Tails'.
  if (randomNum < 0.5) {
    coinFlip = 'heads';
  } else {
    coinFlip = 'tails';
  }
 // alert("The coin landed on " + (randomNum ? 'Heads' : 'Tails'));

let choice = prompt("Choose heads or tails:").toLowerCase();
//alert("The coin landed on " +result + ".");

if (coinFlip ==='heads' && choice==='heads' ) {
    alert("The flip was heads and you chose heads ... You win!");
} else if (coinFlip ==='heads' && choice==='tails' ) {
    alert("The flip was heads and you chose tails ... You lose!");
}
else if (coinFlip === 'tails' && choice === 'heads  ') {
    alert("The flip was tails and you chose heads ... You lose!");
}
else  {
    alert("The flip was tails and you chose tails ... You win!");
}

