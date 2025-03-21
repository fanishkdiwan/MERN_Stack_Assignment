const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const square = (num) => num * num;

rl.question("Enter a number to square: ", (input) => {
    const num = parseInt(input);
    if (isNaN(num)) {
        console.log("Please enter a valid number.");
    } else {
        console.log("Square of the number:", square(num));
    }
    rl.close();
});
