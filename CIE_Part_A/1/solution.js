/*
Write a function translate() that will translate a text i.e, double every consonant 
and place an occurrence of "o" in between. For example, translate("this is fun") 
should return the string "tothohisos isos fofunon".
*/

function translate(text) {
    let result = '';
    const vowels = 'aeiouAEIOU';
    
    for (let char of text) {
        if (char.match(/[a-zA-Z]/) && !vowels.includes(char)) {
            result += char + 'o' + char.toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
}

// Test cases
console.log('Input: "this is fun"');
console.log('Output:', translate("this is fun"));

console.log('\nInput: "hello world"');
console.log('Output:', translate("hello world"));
