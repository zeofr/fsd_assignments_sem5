// Q8: Find the length of the longest word in an array.
function findLongestWord(words) {
  return words.reduce((max, w) => Math.max(max, w.length), 0);
}

// Test
console.log(findLongestWord(['cat', 'elephant', 'dog']));
