/*
Create a Ticket Booking Counter system using Lexical Scoping and Closures.
Requirements:
A. Create a function ticketCounter() that initializes a variable tickets = 0.
B. Inside it, define another function bookTicket() that:
   - increments tickets by 1 each time it is called
   - displays: "Ticket booked. Total tickets: X"
C. Return the inner function from the outer function to form a closure.
D. Call the returned function three times and display the output
*/

function ticketCounter() {
    let tickets = 0;
    
    return function bookTicket() {
        tickets++;
        return `Ticket booked. Total tickets: ${tickets}`;
    };
}

const book = ticketCounter();

// Call the function three times
console.log(book());
console.log(book());
console.log(book());
