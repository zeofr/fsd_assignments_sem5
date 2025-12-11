function first20Fibonacci() {
  const seq = [0, 1];
  while (seq.length < 20) {
    const len = seq.length;
    seq.push(seq[len - 1] + seq[len - 2]);
  }
  console.log(seq.join(', '));
  return seq;
}

// Test
first20Fibonacci();
