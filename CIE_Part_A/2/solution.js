/*
Write a javascript program to convert month number to month name using closures.
a. If the user enters a number less than 1 or greater than 12 or a non-number, 
   have the function write "Bad Number" in the monthName field.
b. If the user enters a decimal between 1 and 12 (inclusive), strip the decimal 
   portion of the number.
*/

function getMonthName(num) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];
    
    if (isNaN(num) || num < 1 || num > 12) {
        return "Bad Number";
    }
    num = Math.floor(num); // Strip decimal
    return months[num - 1];
}

// Test cases
console.log('Month 1:', getMonthName(1));        // January
console.log('Month 6:', getMonthName(6));        // June
console.log('Month 12:', getMonthName(12));      // December
console.log('Month 5.7:', getMonthName(5.7));    // May (decimal stripped)
console.log('Month 0:', getMonthName(0));        // Bad Number
console.log('Month 13:', getMonthName(13));      // Bad Number
console.log('Month abc:', getMonthName('abc'));  // Bad Number
