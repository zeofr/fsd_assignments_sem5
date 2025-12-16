/*
Write a javascript function named pluralize that:
a. takes 2 arguments, a noun and a number.
b. returns the number and pluralized form, like "5 cats" or "1 dog".
*/

function pluralize(noun, number) {
    if (number === 1) {
        return number + ' ' + noun;
    } else {
        return number + ' ' + noun + 's';
    }
}

// Test cases
console.log(pluralize('cat', 5));
console.log(pluralize('dog', 1));
console.log(pluralize('book', 3));
console.log(pluralize('apple', 0));
