// This function runs when an animal <li> is clicked
function playSound(animalElement) {
    // Get the custom data-animal-sound attribute value
    var sound = animalElement.getAttribute("data-animal-sound");

    // Get the animal's name from its inner text
    var animal = animalElement.innerHTML;

    // Show a message with the animal and its sound
    alert(animal + " says: " + sound);
}