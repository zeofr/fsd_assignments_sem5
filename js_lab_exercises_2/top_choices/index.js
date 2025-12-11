const choices = ['blue', 'green', 'red', 'yellow'];

function suffix(n) {
  if (n % 100 >= 11 && n % 100 <= 13) return `${n}th`;
  const last = n % 10;
  if (last === 1) return `${n}st`;
  if (last === 2) return `${n}nd`;
  if (last === 3) return `${n}rd`;
  return `${n}th`;
}

// Test
choices.forEach((c, i) => console.log(`My ${suffix(i + 1)} choice is ${c}.`));
