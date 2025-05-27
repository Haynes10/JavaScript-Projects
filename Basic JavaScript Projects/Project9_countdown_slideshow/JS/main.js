// ======= Countdown Timer Code =======
function countdown() {
  // Get the seconds from user input, convert to number
  let seconds = Number(document.getElementById("seconds").value);

  // Reference to timer display paragraph
  const timerDisplay = document.getElementById("timer");

  // Function to run every second and update countdown
  function tick() {
    seconds--; // decrease seconds by 1

    if (seconds > 0) {
      timerDisplay.innerHTML = seconds; // show remaining seconds
      setTimeout(tick, 1000); // call tick again after 1 second
    } else {
      timerDisplay.innerHTML = ""; // clear timer display
      alert("Time's up!"); // alert when countdown finishes
    }
  }

  // Start the countdown
  if (seconds > 0) {
    timerDisplay.innerHTML = seconds;
    setTimeout(tick, 1000);
  } else {
    alert("Please enter a positive number.");
  }
}

// ======= Slideshow Code =======
const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg"
];

let currentIndex = 0;
const slide = document.getElementById("slide");

// Function to switch to the next image in the slideshow
function changeSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; // Loop back to first image
  }
  slide.src = images[currentIndex];
}

// Start slideshow timer: changes every 3 seconds
setInterval(changeSlide, 3000);
