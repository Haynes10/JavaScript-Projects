// Addition function: adds two numbers and shows the result
function showAddition() {
  let number1 = 12;
  let number2 = 7;
  let sum = number1 + number2;

  // Display the addition result
  document.getElementById("Math").textContent = `${number1} + ${number2} = ${sum}`;
}

// Subtraction function: subtracts one number from another and shows the result
function showSubtraction() {
  let start = 15;
  let takeAway = 4;
  let result = start - takeAway;

  document.getElementById("Math").textContent = `${start} - ${takeAway} = ${result}`;
}

// Multiplication function: multiplies two numbers and shows the result
function showMultiplication() {
  let a = 6;
  let b = 9;
  let product = a * b;

  document.getElementById("Math").textContent = `${a} × ${b} = ${product}`;
}

// Division function: divides one number by another and shows the result
function showDivision() {
  let total = 24;
  let parts = 3;
  let answer = total / parts;

  document.getElementById("Math").textContent = `${total} ÷ ${parts} = ${answer}`;
}

// Function showing multiple math operations with 10 and 2
function showAllOperations() {
  let a = 10;
  let b = 2;

  let addition = a + b;
  let subtraction = a - b;
  let multiplication = a * b;
  let division = a / b;
  let remainder = a % b;

  let output = `
    ${a} + ${b} = ${addition}<br>
    ${a} - ${b} = ${subtraction}<br>
    ${a} × ${b} = ${multiplication}<br>
    ${a} ÷ ${b} = ${division}<br>
    ${a} % ${b} = ${remainder} (remainder)
  `;

  document.getElementById("Math").innerHTML = output;
}

// Function doing multiple operations on 20 and 5
function doMultipleOperations() {
  let x = 20;
  let y = 5;

  let sum = x + y;
  let difference = x - y;
  let product = x * y;
  let quotient = x / y;

  let message = `
    ${x} + ${y} = ${sum}<br>
    ${x} - ${y} = ${difference}<br>
    ${x} × ${y} = ${product}<br>
    ${x} ÷ ${y} = ${quotient}
  `;

  document.getElementById("Math").innerHTML = message;
}

// Modulus function: calculates remainder after division
function showModulus() {
  let dividend = 17;
  let divisor = 4;
  let remainder = dividend % divisor;

  document.getElementById("Math").textContent =
    `${dividend} % ${divisor} = ${remainder} (remainder)`;
}

// Negation operator: flips the sign of a number
function negation_Operator() {
  var x = 10;
  document.getElementById("Math").innerHTML = -x;
}

// Increment and Decrement function
function increment_Decrement() {
  let value = 5;
  value++; // Increment
  value--; // Decrement

  document.getElementById("Math").textContent = `After increment and decrement, value = ${value}`;
}

// Random number function (0 to 1)
function showRandom() {
  let randomValue = Math.random();
  document.getElementById("Math").textContent = `Random number between 0 and 1: ${randomValue}`;
}

// Random number function (0 to 100)
function showRandom100() {
  let randomValue = Math.random() * 100;
  document.getElementById("Math").textContent = `Random number between 0 and 100: ${randomValue}`;
}

// ✅ Math Object method function: uses Math.sqrt to find the square root
function showMathMethod() {
  let number = 64;
  let result = Math.sqrt(number); // Square root of 64

  document.getElementById("Math").textContent = `The square root of ${number} is ${result}`;
}
// Addition function: adds two numbers and shows the result
function showAddition() {
  let number1 = 12;
  let number2 = 7;
  let sum = number1 + number2;

  // Display the addition result
  document.getElementById("Math").textContent = `${number1} + ${number2} = ${sum}`;
}

// Subtraction function: subtracts one number from another and shows the result
function showSubtraction() {
  let start = 15;
  let takeAway = 4;
  let result = start - takeAway;

  document.getElementById("Math").textContent = `${start} - ${takeAway} = ${result}`;
}

// Multiplication function: multiplies two numbers and shows the result
function showMultiplication() {
  let a = 6;
  let b = 9;
  let product = a * b;

  document.getElementById("Math").textContent = `${a} × ${b} = ${product}`;
}

// Division function: divides one number by another and shows the result
function showDivision() {
  let total = 24;
  let parts = 3;
  let answer = total / parts;

  document.getElementById("Math").textContent = `${total} ÷ ${parts} = ${answer}`;
}

// Function showing multiple math operations with 10 and 2
function showAllOperations() {
  let a = 10;
  let b = 2;

  let addition = a + b;
  let subtraction = a - b;
  let multiplication = a * b;
  let division = a / b;
  let remainder = a % b;

  let output = `
    ${a} + ${b} = ${addition}<br>
    ${a} - ${b} = ${subtraction}<br>
    ${a} × ${b} = ${multiplication}<br>
    ${a} ÷ ${b} = ${division}<br>
    ${a} % ${b} = ${remainder} (remainder)
  `;

  document.getElementById("Math").innerHTML = output;
}

// Function doing multiple operations on 20 and 5
function doMultipleOperations() {
  let x = 20;
  let y = 5;

  let sum = x + y;
  let difference = x - y;
  let product = x * y;
  let quotient = x / y;

  let message = `
    ${x} + ${y} = ${sum}<br>
    ${x} - ${y} = ${difference}<br>
    ${x} × ${y} = ${product}<br>
    ${x} ÷ ${y} = ${quotient}
  `;

  document.getElementById("Math").innerHTML = message;
}

// Modulus function: calculates remainder after division
function showModulus() {
  let dividend = 17;
  let divisor = 4;
  let remainder = dividend % divisor;

  document.getElementById("Math").textContent =
    `${dividend} % ${divisor} = ${remainder} (remainder)`;
}

// Negation operator: flips the sign of a number
function negation_Operator() {
  var x = 10;
  document.getElementById("Math").innerHTML = -x;
}

// Increment and Decrement function
function increment_Decrement() {
  let value = 5;
  value++; // Increment
  value--; // Decrement

  document.getElementById("Math").textContent = `After increment and decrement, value = ${value}`;
}

// Random number function (0 to 1)
function showRandom() {
  let randomValue = Math.random();
  document.getElementById("Math").textContent = `Random number between 0 and 1: ${randomValue}`;
}

// Random number function (0 to 100)
function showRandom100() {
  let randomValue = Math.random() * 100;
  document.getElementById("Math").textContent = `Random number between 0 and 100: ${randomValue}`;
}

// ✅ Math Object method function: uses Math.sqrt to find the square root
function showMathMethod() {
  let number = 64;
  let result = Math.sqrt(number); // Square root of 64

  document.getElementById("Math").textContent = `The square root of ${number} is ${result}`;
}
// Addition function: adds two numbers and shows the result
function showAddition() {
  let number1 = 12;
  let number2 = 7;
  let sum = number1 + number2;

  // Display the addition result
  document.getElementById("Math").textContent = `${number1} + ${number2} = ${sum}`;
}

// Subtraction function: subtracts one number from another and shows the result
function showSubtraction() {
  let start = 15;
  let takeAway = 4;
  let result = start - takeAway;

  document.getElementById("Math").textContent = `${start} - ${takeAway} = ${result}`;
}

// Multiplication function: multiplies two numbers and shows the result
function showMultiplication() {
  let a = 6;
  let b = 9;
  let product = a * b;

  document.getElementById("Math").textContent = `${a} × ${b} = ${product}`;
}

// Division function: divides one number by another and shows the result
function showDivision() {
  let total = 24;
  let parts = 3;
  let answer = total / parts;

  document.getElementById("Math").textContent = `${total} ÷ ${parts} = ${answer}`;
}

// Function showing multiple math operations with 10 and 2
function showAllOperations() {
  let a = 10;
  let b = 2;

  let addition = a + b;
  let subtraction = a - b;
  let multiplication = a * b;
  let division = a / b;
  let remainder = a % b;

  let output = `
    ${a} + ${b} = ${addition}<br>
    ${a} - ${b} = ${subtraction}<br>
    ${a} × ${b} = ${multiplication}<br>
    ${a} ÷ ${b} = ${division}<br>
    ${a} % ${b} = ${remainder} (remainder)
  `;

  document.getElementById("Math").innerHTML = output;
}

// Function doing multiple operations on 20 and 5
function doMultipleOperations() {
  let x = 20;
  let y = 5;

  let sum = x + y;
  let difference = x - y;
  let product = x * y;
  let quotient = x / y;

  let message = `
    ${x} + ${y} = ${sum}<br>
    ${x} - ${y} = ${difference}<br>
    ${x} × ${y} = ${product}<br>
    ${x} ÷ ${y} = ${quotient}
  `;

  document.getElementById("Math").innerHTML = message;
}

// Modulus function: calculates remainder after division
function showModulus() {
  let dividend = 17;
  let divisor = 4;
  let remainder = dividend % divisor;

  document.getElementById("Math").textContent =
    `${dividend} % ${divisor} = ${remainder} (remainder)`;
}

// Negation operator: flips the sign of a number
function negation_Operator() {
  var x = 10;
  document.getElementById("Math").innerHTML = -x;
}

// Increment and Decrement function
function increment_Decrement() {
  let value = 5;
  value++; // Increment
  value--; // Decrement

  document.getElementById("Math").textContent = `After increment and decrement, value = ${value}`;
}

// Random number function (0 to 1)
function showRandom() {
  let randomValue = Math.random();
  document.getElementById("Math").textContent = `Random number between 0 and 1: ${randomValue}`;
}

// Random number function (0 to 100)
function showRandom100() {
  let randomValue = Math.random() * 100;
  document.getElementById("Math").textContent = `Random number between 0 and 100: ${randomValue}`;
}

// ✅ Math Object method function: uses Math.sqrt to find the square root
function showMathMethod() {
  let number = 64;
  let result = Math.sqrt(number); // Square root of 64

  document.getElementById("Math").textContent = `The square root of ${number} is ${result}`;
}
// Addition function: adds two numbers and shows the result
function showAddition() {
  let number1 = 12;
  let number2 = 7;
  let sum = number1 + number2;

  // Display the addition result
  document.getElementById("Math").textContent = `${number1} + ${number2} = ${sum}`;
}

// Subtraction function: subtracts one number from another and shows the result
function showSubtraction() {
  let start = 15;
  let takeAway = 4;
  let result = start - takeAway;

  document.getElementById("Math").textContent = `${start} - ${takeAway} = ${result}`;
}

// Multiplication function: multiplies two numbers and shows the result
function showMultiplication() {
  let a = 6;
  let b = 9;
  let product = a * b;

  document.getElementById("Math").textContent = `${a} × ${b} = ${product}`;
}

// Division function: divides one number by another and shows the result
function showDivision() {
  let total = 24;
  let parts = 3;
  let answer = total / parts;

  document.getElementById("Math").textContent = `${total} ÷ ${parts} = ${answer}`;
}

// Function showing multiple math operations with 10 and 2
function showAllOperations() {
  let a = 10;
  let b = 2;

  let addition = a + b;
  let subtraction = a - b;
  let multiplication = a * b;
  let division = a / b;
  let remainder = a % b;

  let output = `
    ${a} + ${b} = ${addition}<br>
    ${a} - ${b} = ${subtraction}<br>
    ${a} × ${b} = ${multiplication}<br>
    ${a} ÷ ${b} = ${division}<br>
    ${a} % ${b} = ${remainder} (remainder)
  `;

  document.getElementById("Math").innerHTML = output;
}

// Function doing multiple operations on 20 and 5
function doMultipleOperations() {
  let x = 20;
  let y = 5;

  let sum = x + y;
  let difference = x - y;
  let product = x * y;
  let quotient = x / y;

  let message = `
    ${x} + ${y} = ${sum}<br>
    ${x} - ${y} = ${difference}<br>
    ${x} × ${y} = ${product}<br>
    ${x} ÷ ${y} = ${quotient}
  `;

  document.getElementById("Math").innerHTML = message;
}

// Modulus function: calculates remainder after division
function showModulus() {
  let dividend = 17;
  let divisor = 4;
  let remainder = dividend % divisor;

  document.getElementById("Math").textContent =
    `${dividend} % ${divisor} = ${remainder} (remainder)`;
}

// Negation operator: flips the sign of a number
function negation_Operator() {
  var x = 10;
  document.getElementById("Math").innerHTML = -x;
}

// Increment and Decrement function
function increment_Decrement() {
  let value = 5;
  value++; // Increment
  value--; // Decrement

  document.getElementById("Math").textContent = `After increment and decrement, value = ${value}`;
}

// Random number function (0 to 1)
function showRandom() {
  let randomValue = Math.random();
  document.getElementById("Math").textContent = `Random number between 0 and 1: ${randomValue}`;
}

// Random number function (0 to 100)
function showRandom100() {
  let randomValue = Math.random() * 100;
  document.getElementById("Math").textContent = `Random number between 0 and 100: ${randomValue}`;
}

// ✅ Math Object method function: uses Math.sqrt to find the square root
function showMathMethod() {
  let number = 64;
  let result = Math.sqrt(number); // Square root of 64

  document.getElementById("Math").textContent = `The square root of ${number} is ${result}`;
}
// Addition function: adds two numbers and shows the result
function showAddition() {
  let number1 = 12;
  let number2 = 7;
  let sum = number1 + number2;

  // Display the addition result
  document.getElementById("Math").textContent = `${number1} + ${number2} = ${sum}`;
}

// Subtraction function: subtracts one number from another and shows the result
function showSubtraction() {
  let start = 15;
  let takeAway = 4;
  let result = start - takeAway;

  document.getElementById("Math").textContent = `${start} - ${takeAway} = ${result}`;
}

// Multiplication function: multiplies two numbers and shows the result
function showMultiplication() {
  let a = 6;
  let b = 9;
  let product = a * b;

  document.getElementById("Math").textContent = `${a} × ${b} = ${product}`;
}

// Division function: divides one number by another and shows the result
function showDivision() {
  let total = 24;
  let parts = 3;
  let answer = total / parts;

  document.getElementById("Math").textContent = `${total} ÷ ${parts} = ${answer}`;
}

// Function showing multiple math operations with 10 and 2
function showAllOperations() {
  let a = 10;
  let b = 2;

  let addition = a + b;
  let subtraction = a - b;
  let multiplication = a * b;
  let division = a / b;
  let remainder = a % b;

  let output = `
    ${a} + ${b} = ${addition}<br>
    ${a} - ${b} = ${subtraction}<br>
    ${a} × ${b} = ${multiplication}<br>
    ${a} ÷ ${b} = ${division}<br>
    ${a} % ${b} = ${remainder} (remainder)
  `;

  document.getElementById("Math").innerHTML = output;
}

// Function doing multiple operations on 20 and 5
function doMultipleOperations() {
  let x = 20;
  let y = 5;

  let sum = x + y;
  let difference = x - y;
  let product = x * y;
  let quotient = x / y;

  let message = `
    ${x} + ${y} = ${sum}<br>
    ${x} - ${y} = ${difference}<br>
    ${x} × ${y} = ${product}<br>
    ${x} ÷ ${y} = ${quotient}
  `;

  document.getElementById("Math").innerHTML = message;
}

// Modulus function: calculates remainder after division
function showModulus() {
  let dividend = 17;
  let divisor = 4;
  let remainder = dividend % divisor;

  document.getElementById("Math").textContent =
    `${dividend} % ${divisor} = ${remainder} (remainder)`;
}

// Negation operator: flips the sign of a number
function negation_Operator() {
  var x = 10;
  document.getElementById("Math").innerHTML = -x;
}

// Increment and Decrement function
function increment_Decrement() {
  let value = 5;
  value++; // Increment
  value--; // Decrement

  document.getElementById("Math").textContent = `After increment and decrement, value = ${value}`;
}

// Random number function (0 to 1)
function showRandom() {
  let randomValue = Math.random();
  document.getElementById("Math").textContent = `Random number between 0 and 1: ${randomValue}`;
}

// Random number function (0 to 100)
function showRandom100() {
  let randomValue = Math.random() * 100;
  document.getElementById("Math").textContent = `Random number between 0 and 100: ${randomValue}`;
}

// ✅ Math Object method function: uses Math.sqrt to find the square root
function showMathMethod() {
  let number = 64;
  let result = Math.sqrt(number); // Square root of 64

  document.getElementById("Math").textContent = `The square root of ${number} is ${result}`;
}
