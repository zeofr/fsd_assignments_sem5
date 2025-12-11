function add_digits(n) {
  return Math.abs(Number(n))
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

// Test
console.log(add_digits(1234));
