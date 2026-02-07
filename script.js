//your JS code here. If required.
// Get input from user
const num = Number(prompt());

// Calculate factorial
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}

// Display result
alert(`The factorial of ${num} is ${factorial}`);
