function fixStart(str) {
  const first = str[0];
  return first + str.slice(1).replaceAll(first, '*');
}

// Test
console.log(fixStart('babble'));
