let enterNum = prompt("Enter a number between 0 and 100:");
let grade;

if (enterNum >= 90 && enterNum <= 100) {
    grade = 'A';
} else if (enterNum >= 80 && enterNum < 90) {
    grade = 'B';
} else if (enterNum >= 70 && enterNum < 80) {
    grade = 'C';
} else if (enterNum >= 60 && enterNum < 70) {
    grade = 'D';
} else if (enterNum >= 0 && enterNum < 60) {
    grade = 'F';
} else {
    grade = 'Invalid input. Please enter a number between 0 and 100.';
}

alert("Your grade is: " + grade);   
