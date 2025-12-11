// Q9: Filter words longer than a given length i from an array.
function filterLongWords(words, minLength) {
  return words.filter((w) => w.length > minLength);
}

// Test
console.log(filterLongWords(['cat', 'elephant', 'dog', 'bird'], 3));
