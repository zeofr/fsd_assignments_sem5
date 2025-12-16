/*
Write a JavaScript function called notBad that takes a single argument, a string.
a. It should find the first appearance of the substring 'not' and 'bad'.
b. If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' 
   substring with 'good' and return the result.
c. If it doesn't find 'not' and 'bad' in the right sequence (or at all), 
   just return the original sentence.
Example:
i. notBad('This dinner is not that bad!'): 'This dinner is good!'
ii. notBad('This dinner is bad!'): 'This dinner is bad!'
*/

function notBad(str) {
    const notIndex = str.indexOf('not');
    const badIndex = str.indexOf('bad');
    
    if (notIndex !== -1 && badIndex !== -1 && badIndex > notIndex) {
        return str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3);
    }
    return str;
}

// Test cases
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This dinner is bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This tea is not bad'));
