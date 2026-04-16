/*
Declare three variables using const and let: your name (string),
your age (number), and a boolean called isStudent. Log all 
three to the console on separate lines.

Que 1:
*/

const name = "Babatunde";
const age = 30;
const isStudent = true;

console.log(name, age, isStudent);

let name2 = "Babatunde";
let age2 = 30;
let isStudent2 = true;

console.log(name2, age2, isStudent2);

/*
Write an arrow function called multiply that takes two numbers 
and returns their product. Then call it with 6 and 7 and log 
the result.

Que 2:
*/

const multiply = (num1, num2) => {
	return num1 * num2;
};

const result = multiply(6, 7);
console.log(result);

/*
Write a function called greetUser that takes a name parameter 
and returns the string: 'Welcome to TechCrush, [name]!'. Test 
it with your own name.

Que 3:
*/
function greetUser(name) {
	return `Welcome to TechCrush, ${name}!`;
}

const greeting = greetUser("Babatunde");
console.log(greeting);

/*
Given the array below, write code to:
1. Add 'pineapple' to the end
2. Remove the first item
3. Log the updated array and its length

Que 4:
*/
const fruits = ["mango", "orange", "banana"];

const addPineappleToEnd = fruits.push("pineapple");

const removeFirstItem = fruits.shift();

console.log(fruits, fruits.length);

/*
Use the map() method on the numbers array below to create 
a NEW array where every number is doubled. Log the new array. 
Do NOT change the original.

Que 5:
*/

const numbers = [3, 6, 9, 12, 15];

const doubleNums = numbers.map((num) => num * 2);
console.log(doubleNums);

/*
Create an object called myProfile with at least 4 properties: 
name, age, country, and hobby. Then write a function 
displayProfile(person) that logs a sentence describing the 
person using their properties.

Que 6:
*/

const myProfile = {
	name: "Babatunde",
	age: 23,
	country: "Kuwait",
	hobby: "Coding",
};

function displayProfile(person) {
	return `My name is ${person.name}. I am ${person.age} years of age. I love ${person.hobby} and I'm from ${person.country}.`;
}

console.log(displayProfile(myProfile));
