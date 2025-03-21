const checkEvenOdd = () => {
    let n = parseInt(prompt("Enter a number:"));
    let result = (n % 2 === 0) ? "Even" : "Odd";
    console.log("The number is:", result);
};
checkEvenOdd();