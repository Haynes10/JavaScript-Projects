// This function changes the first element with the "animalText" class
function changeAnimalText() {
    let elements = document.getElementsByClassName("animalText"); // Get all elements with this class
    elements[0].innerHTML = "The text has successfully changed!";  // Change the first one
}

// Get the canvas element and its drawing context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Create a left-to-right gradient
const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0); // (x0, y0) to (x1, y1)
gradient.addColorStop(0, "blue");   // Start color (left side)
gradient.addColorStop(1, "purple"); // End color (right side)

// Fill the entire canvas with the gradient background
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Add some white text on top of the gradient
ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.fillText("Canvas Drawing Example", 150, 140);

// Draw a red circle in the center of the canvas
ctx.beginPath();
ctx.arc(250, 125, 40, 0, 2 * Math.PI); // x, y, radius, startAngle, endAngle
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

// This function draws a red circle wherever the user clicks
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI); // Circle with radius 20
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}

// When the user clicks on the canvas, this event fires
canvas.addEventListener("click", function(event) {
    // Get the position of the click relative to the canvas
    const rect = canvas.getBoundingClientRect(); // Canvas position on page
    const x = event.clientX - rect.left; // Mouse X within canvas
    const y = event.clientY - rect.top;  // Mouse Y within canvas

    // Call our drawCircle function using those coordinates
    drawCircle(x, y);
});