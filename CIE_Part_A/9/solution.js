/*
Write a JavaScript program using Anonymous Functions.
A. Create an anonymous function assigned to a variable to calculate the sum of two numbers.
B. Create another anonymous function to display whether the entered number is even or odd.
C. Display both results on the browser using document.write() or console output.
*/

// A. Sum of two numbers
const sum = (a, b) => {
    return a + b;
};

// B. Even or Odd
const checkEvenOdd = (num) => {
    return num % 2 === 0 ? 'Even' : 'Odd';
};

// C. Display results
const num1 = 10, num2 = 20;
const testNum = 15;

console.log(`Sum of ${num1} and ${num2}: ${sum(num1, num2)}`);

console.log(`${testNum} is ${checkEvenOdd(testNum)}`);

console.log('\nMore tests:');
console.log(`Sum of 5 and 7: ${sum(5, 7)}`);
console.log(`8 is ${checkEvenOdd(8)}`);

