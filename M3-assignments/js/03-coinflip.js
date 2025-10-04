let randomNum = Math.round(random());
let result;
 

// If the number is less than 0.5, it's 'Heads'. Otherwise, it's 'Tails'.
  if (randomNum < 0.5) {
    result = 'Heads';
  } else {
    result = 'Tails';
  }
 // alert("The coin landed on " + (randomNum ? 'Heads' : 'Tails'));

let choice = prompt("Choose heads or tails:").toLowerCase();
alert("The coin landed on " +result + ".");

if (result===choice) {
    alert("You win!");
} else {
    alert("You lose!");
}


