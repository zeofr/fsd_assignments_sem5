function counter(numbers) {
  const counts = { negative: 0, zero: 0, positive: 0 };
  numbers.forEach((n) => {
    const sign = Math.sign(n);
    switch (sign) {
      case -1:
        counts.negative += 1;
        break;
      case 0:
        counts.zero += 1;
        break;
      case 1:
        counts.positive += 1;
        break;
      default:
        break;
    }
  });
  return counts;
}

// Test
console.log(counter([5, -3, 0, 2, -1, 0]));

if (typeof module !== 'undefined') module.exports = { counter };
