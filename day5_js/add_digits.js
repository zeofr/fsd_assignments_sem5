function add_digits(n) {
  return Math.abs(Number(n))
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

if (typeof module !== 'undefined') module.exports = { add_digits };
