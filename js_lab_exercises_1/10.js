// Q10: Build a character frequency map for a given string.
function charFreq(str) {
  return str.split('').reduce((freq, ch) => {
    freq[ch] = (freq[ch] || 0) + 1;
    return freq;
  }, {});
}

// Test
console.log(charFreq('abbabcbdbabdbdbabababcbcbab'));
