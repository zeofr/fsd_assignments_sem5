function verbing(str) {
  if (str.length < 3) return str;
  if (str.endsWith('ing')) return `${str}ly`;
  return `${str}ing`;
}

// Test
console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));
