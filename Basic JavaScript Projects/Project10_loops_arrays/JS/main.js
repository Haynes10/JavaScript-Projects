// Array of musical instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""; // String to store the instruments list

// Function to demonstrate a for loop that iterates through the Instruments array
function for_Loop() {
    Content = ""; // Reset content before looping
    for (let Y = 0; Y < Instruments.length; Y++) {  // Loop from 0 to the length of the array
        Content += Instruments[Y] + "<br>";         // Add each instrument with a line break
    }
    // Display the list of instruments inside the paragraph with id "List_of_Instruments"
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Function to demonstrate use of an array
function array_Function() {
    let myArray = ["Apple", "Banana", "Cherry"];  // Define an array of fruits
    // Display the second item in the array (index 1) inside the paragraph with id "Array"
    document.getElementById("Array").innerHTML = "My favorite fruit is " + myArray[1] + ".";
}

// Function to demonstrate use of const keyword with an object
function constant_function() {
    const Musical_Instrument = {
        type: "guitar",
        brand: "Fender",
        color: "black"
    };
    // Changing the color property of the constant object (allowed)
    Musical_Instrument.color = "blue";
    // Adding a new property price to the object (allowed)
    Musical_Instrument.price = "$900";
    // Display a string including the updated properties inside the paragraph with id "Constant"
    document.getElementById("Constant").innerHTML =
        "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + ".";
}

// Creating an object using let keyword with properties and a method
let car = {
    make: "Dodge",
    model: "Viper",
    year: 2021,
    color: "red",
    // Method to describe the car, returns a string
    description: function() {
        return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model + ".";
    }
};

// Function to call the car object's description method and display it
function car_Description() {
    document.getElementById("car_Object").innerHTML = car.description();
}

// Function to demonstrate the break statement in a loop
function breakLoop() {
    let text = ""; // String to store output
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break; // Exit loop completely when i equals 5
        }
        text += "The number is " + i + "<br>";
    }
    // Display the output in the paragraph with id "break"
    document.getElementById("break").innerHTML = text;
}

// Function to demonstrate the continue statement in a loop
function continueLoop() {
    let text = ""; // String to store output
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue; // Skip the rest of the loop body when i equals 5
        }
        text += "The number is " + i + "<br>";
    }
    // Display the output in the paragraph with id "continue"
    document.getElementById("continue").innerHTML = text;
}