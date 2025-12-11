function notBad(sentence) {
  const lower = sentence.toLowerCase();
  const iNot = lower.indexOf('not');
  const iBad = lower.indexOf('bad');
  if (iNot !== -1 && iBad !== -1 && iBad > iNot) {
    return sentence.slice(0, iNot) + 'good' + sentence.slice(iBad + 3);
  }
  return sentence;
}

// Test
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
