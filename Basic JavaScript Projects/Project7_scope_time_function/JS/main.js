// Global variable
var userName = "Jordan";

// Function that uses the global variable
function greetUser() {
    console.log("Hello, " + userName + "!");
}
greetUser();  // Output: Hello, Jordan!

// Function with a local variable
function displayAge() {
    var age = 22;  // local scope
    console.log("User's age is " + age);
}
displayAge();  // Output: User's age is 22

// Function with a bug (undefined variable)
function brokenFunction() {
    console.log("Your score is: " + score); // 'score' is not defined
}
brokenFunction(); // This will throw an error in the console

// Method Assignment: Show greeting based on time
function showGreeting() {
    var currentHour = new Date().getHours();  // Get the current hour

    if (currentHour < 18) {
        document.getElementById("timeMessage").innerHTML = "Hope you're having a great day!";
    } else {
        document.getElementById("timeMessage").innerHTML = "Good evening! Take it easy!";
    }
}

// Else If Assignment: Weather temperature check
function checkWeather() {
    var temp = document.getElementById('temperatureInput').value;
    var message;

    if (temp >= 85) {
        message = "It's really hot outside! Stay hydrated.";
    } else if (temp >= 60) {
        message = "Nice weather today, perfect for a walk.";
    } else if (temp >= 32) {
        message = "It's a bit chilly. Wear a jacket.";
    } else {
        message = "Brr! It's freezing cold outside!";
    }

    document.getElementById('weatherResponse').innerHTML = message;
}

   