// Q11: Provide calculator functions (add, subtract, multiply, divide).

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }
};

// Test
console.log(calculator.add(5, 3));
console.log(calculator.divide(10, 2));
