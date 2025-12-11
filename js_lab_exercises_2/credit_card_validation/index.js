function validateCreditCard(number) {
  const cleaned = (number || '').replaceAll('-', '');
  const result = { valid: false, number };
  if (!/^\d{16}$/.test(cleaned)) return { ...result, error: 'wrong_length_or_chars' };

  const digits = cleaned.split('').map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  const hasDiff = new Set(digits).size > 1;
  const isEven = digits[digits.length - 1] % 2 === 0;

  if (!hasDiff) return { ...result, error: 'all_same_digit' };
  if (!isEven) return { ...result, error: 'final_not_even' };
  if (sum <= 16) return { ...result, error: 'sum_too_low' };

  return { valid: true, number };
}

// Test
console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('6666-6666-6666-1666'));
console.log(validateCreditCard('4444-4444-4444-4444'));
