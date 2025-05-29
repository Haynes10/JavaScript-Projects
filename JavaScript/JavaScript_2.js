// Function to validate the contact form
function validateForm() {
    // Get values from input fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Reset previous error message
    errorMessage.textContent = "";

    // Check if any field is empty
    if (name === "" || email === "" || message === "") {
        errorMessage.textContent = "All fields must be filled out.";
        return false; // Stop the form from submitting
    }

    // Simple email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    // If everything is fine, show a success alert
    alert("Form submitted successfully!");
    return true;
}
