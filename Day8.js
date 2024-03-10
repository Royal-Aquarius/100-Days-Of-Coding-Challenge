//("Task No: 22");
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var friends = ["Alice", "Bob", "Charlie"];
console.log(friends[3]); //Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; //Correcting the error by accessing a valid index.
//("Task No: 23");
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = "tesla";
console.log("Is car == 'tesla'? I predict True.");
console.log(car == 'tesla'); //True
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); //False
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//("Task No: 24");
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
// Equality with strings
// console.log("Testing equality with strings:");
// console.log("apple" == "apple"); // True
// console.log("apple" == "Apple"); // False
// // Using the lower case function
// console.log("Testing with lower case:");
// console.log("Apple".toLowerCase() == "apple"); // True
// // Numerical tests
// console.log("Numerical tests:");
// console.log(10 > 5); // True
// console.log(2 < 1); // False
// // Tests using "and" and "or" operators
// console.log("Tests with 'and' and 'or':");
// console.log(true && false); // False
// console.log(true || false); // True
// // Test whether an item is in a array
// let fruits = ["apple", "banana", "cherry"];
// console.log("Is 'apple' in fruits?");
// console.log(fruits.includes("apple")); // True
// // Test whether an item is not in a array
// console.log("Is 'mango' not in fruits?");
// console.log(!fruits.includes("mango")); // True
