// Q5: Implement sum() and multiply() over an array of numbers.
function sum(nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

function multiply(nums) {
  return nums.reduce((acc, n) => acc * n, 1);
}

// Test
console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));
