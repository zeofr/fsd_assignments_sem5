const Stack = require('./stack');
const Queue = require('./queue');

// Test Stack
console.log("=== Stack Operations ===");
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display();
console.log("Popped:", stack.pop());
stack.display();

// Test Queue
console.log("\n=== Queue Operations ===");
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
console.log("Dequeued:", queue.dequeue());
queue.display();
