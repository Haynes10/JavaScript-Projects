// Combines multiple strings into one sentence using concat()
function full_Sentence() {
    var part_1 = "JavaScript ";
    var part_2 = "is a ";
    var part_3 = "really cool ";
    var part_4 = "language!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Uses slice() to extract part of a string
function slice_Method() {
    var sentence = "The quick brown fox jumps over the lazy dog.";
    var section = sentence.slice(10, 15); // Extracts "brown"
    document.getElementById("Slice").innerHTML = section;
}

// Converts a string to uppercase using toUpperCase()
function upper_Case() {
    var text = "coding is fun!";
    var result = text.toUpperCase();
    document.getElementById("Uppercase").innerHTML = result;
}

// Finds the index of a word in a string using search()
function search_Method() {
    var sentence = "Learning JavaScript is fun and useful.";
    var position = sentence.search("JavaScript");
    document.getElementById("Search").innerHTML = "Found at position: " + position;
}

// Converts a number to a string using toString()
function string_Method() {
    var score = 98; // Example of a numeric value
    var result = "Your final score is: " + score.toString();
    document.getElementById("Numbers_to_string").innerHTML = result;
}

// Formats a number to a specified precision using toPrecision()
function precision_Method() {
    var bigNumber = 12933.3012987376112;
    var formattedNumber = bigNumber.toPrecision(10); // Limits number to 10 significant digits
    document.getElementById("Precision").innerHTML = "Formatted number: " + formattedNumber;
}

// Formats a number to a fixed number of decimal places using toFixed()
function fixed_Method() {
    var pi = 3.141592653589793;
    var fixedPi = pi.toFixed(3); // Keeps 3 decimal places, returns string "3.142"
    document.getElementById("Fixed").innerHTML = "Pi rounded to 3 decimals: " + fixedPi;
}

// Returns the primitive value of a Number object using valueOf()
function value_Method() {
    var numObject = new Number(123);
    var primitiveValue = numObject.valueOf(); // Returns number 123 as a primitive
    document.getElementById("Value").innerHTML = "Primitive value of number object: " + primitiveValue;
}
