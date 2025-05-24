// This function creates a dictionary about a favorite fruit
// and displays the value of the "Taste" key when clicked
function myDictionary() {
    var FavoriteFruit = {
        Name: "Mango",         // Key: Name of the fruit
        Color: "Yellow",       // Key: Color of the fruit
        Taste: "Sweet",        // Key: Taste of the fruit
        Season: "Summer",      // Key: When the fruit is in season
        Origin: "Tropical"     // Key: Where the fruit is from
    };

    // Display the value of the "Taste" key in the HTML element with id="Dictionary"
    document.getElementById("Dictionary").innerHTML = FavoriteFruit.Taste;
}

// This function shows what happens when you create a dictionary with duplicate keys
function dictionaryChallenge() {
    var FavoriteMovie = {
        Title: "Inception",             // Key: Movie title
        Director: "Christopher Nolan",  // Key: Movie director
        Genre: "Sci-Fi",                // First "Genre" key
        Genre: "Thriller"               // Second "Genre" key (overwrites the first)
    };

    // Only the second Genre key will remain ("Thriller")
    document.getElementById("Challenge").innerHTML = FavoriteMovie.Genre;
}

// This function demonstrates the use of the delete operator
function deleteExample() {
    var FavoriteFruit = {
        Name: "Mango",         // Key: Name
        Color: "Yellow",       // Key: Color
        Taste: "Sweet",        // Key: Taste to be deleted
        Season: "Summer"       // Key: Season
    };

    // Remove the "Taste" key from the dictionary
    delete FavoriteFruit.Taste;

    // Try to display the deleted "Taste" key — will show "undefined"
    document.getElementById("Delete").innerHTML = FavoriteFruit.Taste;
}
