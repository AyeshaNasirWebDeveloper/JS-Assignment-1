// First Question of Chapter # 3

//Declare a variable called age & assign to it your age.
var age = 19;
alert(`I am ${age} years old`);


// Second Question of Chapter # 3

//number of visits


// Check if localStorage is supported by the browser
if (typeof(Storage) !== "undefined") {
    // Retrieve visit count from localStorage
    var visitCount = localStorage.getItem("visitCount");

    // If visit count is not available, initialize it to 0
    if (!visitCount) {
        visitCount = 0;
    }

    // Increment visit count
    visitCount++;

    // Save updated visit count to localStorage
    localStorage.setItem("visitCount", visitCount);

    // Display visit count on the web page and in an alert box
    var message = "You have visited this site " + visitCount + " times";
    alert(message);
} else {
    // If localStorage is not supported
    document.write("Sorry, your browser does not support web storage. Visit count cannot be tracked.");
}


