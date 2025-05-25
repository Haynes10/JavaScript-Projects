// === Ride Height Checker using a ternary operator ===
function Ride_Function() {
    let Height = document.getElementById("Height").value;  // Get user height input
    // Ternary operator checks height
    let Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// === Voting Eligibility using a ternary operator ===
function Check_Vote() {
    let age = document.getElementById("Age").value;  // Get user age input
    // Ternary checks if user is old enough to vote
    let result = (age >= 18) ? "You can vote!" : "You are not old enough to vote.";
    document.getElementById("Vote_Result").innerHTML = result;
}

// === Constructor Function using 'new' and 'this' keywords ===
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Creating new vehicle objects using the constructor
let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle("Ford", "Mustang", 1971, "Mustard");

// Display one of the vehicles in the browser
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " +
        Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

// === Nested Function Example ===
function count_Function() {
    document.getElementById("Counting").innerHTML = Count(); // Display the result of Count()

    // Outer function
    function Count() {
        let Starting_point = 9;

        // Nested function increases value by 1
        function Plus_one() {
            Starting_point += 1;
        }

        Plus_one(); // Call the nested function
        return Starting_point;
    }
}

// === Nested Function Assignment ===
function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML = ShowMessage();

    // Outer function that contains a nested function
    function ShowMessage() {
        let message = "Outer message. ";

        // Nested function that adds more text
        function AddDetail() {
            message += "This is a nested function message.";
        }

        AddDetail(); // Call the nested function
        return message;
    }
}


