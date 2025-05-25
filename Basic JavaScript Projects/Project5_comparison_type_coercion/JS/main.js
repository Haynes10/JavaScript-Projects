// Displaying the data type of a variable using typeof
var myVariable = "Hello, world!";
document.write("The data type of myVariable is: " + typeof myVariable + "<br>");

// String and Number concatenation example
document.write("Combining string and number: " + "Age: " + 25 + "<br>");

// NaN Challenge
function showNaN() {
    document.getElementById("NaN_Display").innerHTML = 0 / 0;  // Results in NaN
}

function checkTrue() {
    document.getElementById("IsTrue").innerHTML = isNaN("This is a string");  // true
}

function checkFalse() {
    document.getElementById("IsFalse").innerHTML = isNaN("007");  // false
}

// Infinity Assignment
function showPositiveInfinity() {
    document.getElementById("PositiveInfinity").innerHTML = 2e310;  // Infinity
}

function showNegativeInfinity() {
    document.getElementById("NegativeInfinity").innerHTML = -3e310;  // -Infinity
}

// Boolean Logic Assignment
function showTrue() {
    document.getElementById("BooleanTrue").innerHTML = 10 > 2;  // true
}

function showFalse() {
    document.getElementById("BooleanFalse").innerHTML = 10 < 2;  // false
}

// Console.log() Assignment
// Performing a math operation and logging the result to the browser console
console.log("Console.log() Assignment: 5 * 3 = " + (5 * 3));  // Outputs: 15 in the console

// Boolean Challenge: Display "false" in the console using Boolean logic and console.log()
console.log("Boolean Challenge: 10 < 2 is " + (10 < 2));  // Outputs: false

// DOUBLE EQUAL SIGNS (==) EXAMPLES

// Compare two values that are equal in value → returns true
document.write("<br>15 == 15 : " + (15 == 15));  // Output: true

// Compare two values that are not equal in value → returns false
document.write("<br>10 == 5 : " + (10 == 5));    // Output: false

// === (TRIPLE EQUAL SIGN) COMPARISONS

// 1. Return true by matching data type and value
let a = 100;            // number
let b = 100;            // number
document.write("<br>a === b : " + (a === b));  // true

// 2. Return false by using different data type and different value
let c = "200";          // string
let d = 300;            // number
document.write("<br>c === d : " + (c === d));  // false

// 3. Return false by using different data type but same value
let e = "50";           // string
let f = 50;             // number
document.write("<br>e === f : " + (e === f));  // false

// 4. Return false by using same data type but different values
let g = 10;             // number
let h = 20;             // number
document.write("<br>g === h : " + (g === h) + "<br>" );  // false

// AND operator examples
function showAndTrue() {
    // Both conditions true => returns true
    document.write("AND true: " + (5 > 2 && 10 > 4) + "<br>");
}

function showAndFalse() {
    // One condition false => returns false
    document.write("AND false: " + (5 > 10 && 10 > 4) + "<br>");
}

// OR operator examples
function showOrTrue() {
    // One condition true => returns true
    document.write("OR true: " + (5 > 0 || 10 > 4) + "<br>");
}

function showOrFalse() {
    // Both conditions false => returns false
    document.write("OR false: " + (5 > 10 || 10 > 200) + "<br>");
}

// NOT operator examples
function showNotTrue() {
    // ! (not) operator: false condition becomes true
    document.write("NOT true (negation of false): " + !(5 > 10) + "<br>");
}

function showNotFalse() {
    // ! (not) operator: true condition becomes false
    document.write("NOT false (negation of true): " + !(10 > 5) + "<br>");
}

// Call these functions so output appears when index.html loads
showAndTrue();
showAndFalse();
showOrTrue();
showOrFalse();
showNotTrue();
showNotFalse();


