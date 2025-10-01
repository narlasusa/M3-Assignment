
    // Prompt the user for the first integer.
    // The input from prompt is a string, so parseInt() is used to convert it to an integer.
    const num1 = parseInt(prompt("Enter the first integer:"), 10);

    // Prompt the user for the second integer.
    const num2 = parseInt(prompt("Enter the second integer:"), 10);

    // Check if the two numbers are equal.
    if (num1 === num2) {
        window.alert("The two numbers are equal.");
    } 
    // Check if the first number is greater than the second.
    else if (num1 > num2) {
        windiow.alert("The larger number is: " + num1);
    } 
    // If the above conditions are not met, the second number must be the larger.
    else {
        window.alert("The larger number is: " + num2);
    }
