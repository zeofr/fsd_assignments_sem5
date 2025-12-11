// Q13: Generate N random numbers, compute their average, and report to user.
// Note: This requires a browser environment with prompt() and alert().
function promptAndReport() {
  const count = Number(prompt('How many random numbers do you want?'));
  if (Number.isNaN(count) || count < 0) return;
  const nums = Array.from({ length: count }, () => Math.random());
  const average = nums.reduce((a, n) => a + n, 0) / (nums.length || 1);
  alert(`Numbers: ${nums.join(', ')}\nAverage: ${average}`);
}

// Test: Uncomment in browser console or HTML page
// promptAndReport();
