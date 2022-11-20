/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function With Parameters
const addTwoNumbers = (a,b) => {
    return a + b;
}

sum = addTwoNumbers(3,5);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a,b) => a + b; 

sum2 = addTwoNumbers2(4,6);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);

saySomething("Hey you, come on!");

const sayHi = () => console.log("You are very nice today!");

sayHi();

// Returning Multiple Lines
const returnMultiLines = () => (
    `<p>
        This is a multilines string.
        Once more line...
    </p>`
)

console.log(returnMultiLines());

