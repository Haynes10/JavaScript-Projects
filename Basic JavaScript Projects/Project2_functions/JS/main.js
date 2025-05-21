// This function assigns two parts of a sentence and displays them in a paragraph
function showMessage() {
    let part1 = "Learning JavaScript is";
    let part2 = " exciting!";
    document.getElementById("output").innerHTML = part1 + part2; // Displays combined sentence
}

// This function appends more text using += operator
function addMoreText() {
    // Adds more text to the existing content using the += operator
    document.getElementById("output").innerHTML += " Keep practicing!";
}

