export function demo() {

// letters, numbers, _, $
// Can not start with number

// Multi word variables
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// var, let, const
var myName;
console.log(myName);
myName = 'John';
console.log(myName);
var myName2 = 'Jane';
console.log(myName2);

// LET
let myName3;
console.log(myName3);
myName3 = 'Jim';
console.log(myName3);
let myName4 = 'Jill';
console.log(myName4);

// CONST
const myName5 = 'James';
console.log(myName5);
// Can not reassign
//myName5 = 'Sara';
// Have to assign a value at declaration
//const myName6;

// CONST Literal Object
const person = {
  name: 'John',
  age: 30
}
console.log(person);
// You can reassign but be careful
// person.name = 'Sara';
// person.age = 32;
// console.log(person);

// CONST Array
const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);

}