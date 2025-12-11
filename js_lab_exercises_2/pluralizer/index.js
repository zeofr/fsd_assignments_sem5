const irregular = { sheep: 'sheep', geese: 'geese', goose: 'geese', deer: 'deer' };

function pluralize(noun, count) {
  let word = noun;
  if (count !== 1) {
    if (irregular[noun]) word = irregular[noun];
    else word = `${noun}s`;
  }
  return `${count} ${word}`;
}

// Test
console.log(pluralize('cat', 5));
console.log(pluralize('dog', 1));
console.log(pluralize('sheep', 3));
