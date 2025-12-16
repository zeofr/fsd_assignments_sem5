/*
Write an npm script having a function vowelCount() that takes a string as input 
and counts number of occurrences of each vowel in the string. 
(Hint: run the program through npm start)
Example: Input: vowelCount('Le Tour de France')
Output: a, e, i, o, and u appear, respectively
*/

function vowelCount(str) {
    const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    
    for (let char of str.toLowerCase()) {
        if (vowels.hasOwnProperty(char)) {
            vowels[char]++;
        }
    }
    
    console.log(`a: ${vowels.a}, e: ${vowels.e}, i: ${vowels.i}, o: ${vowels.o}, u: ${vowels.u}`);
    return vowels;
}

// Test
vowelCount('Le Tour de France');

module.exports = { vowelCount };
