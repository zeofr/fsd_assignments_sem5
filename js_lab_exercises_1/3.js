// Q3: Check if a single character is a vowel, returning true/false.
function isVowel(ch) {
  return /^[aeiou]$/i.test(ch);
}

// Test
console.log(isVowel('a'), isVowel('b'));
