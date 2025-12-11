// Q7: Use a bilingual lexicon object to translate Christmas phrases to Swedish.
const lexicon = {
  merry: 'god',
  christmas: 'jul',
  and: 'och',
  happy: 'gott',
  new: 'nytt',
  year: 'år'
};

function translateToSwedish(text) {
  return text
    .split(/\s+/)
    .map((word) => lexicon[word.toLowerCase()] ?? word)
    .join(' ');
}

// Test
console.log(translateToSwedish('merry christmas and happy new year'));
