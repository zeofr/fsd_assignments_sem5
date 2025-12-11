// Q4: Translate text to rövarspråket by doubling consonants with 'o' between.
function translate(text) {
  return text
    .split('')
    .map((ch) => {
      const isLetter = /[a-z]/i.test(ch);
      const isVowel = /[aeiou]/i.test(ch);
      if (isLetter && !isVowel) return `${ch}o${ch.toLowerCase()}`;
      return ch;
    })
    .join('');
}

// Test
console.log(translate('this is fun'));
