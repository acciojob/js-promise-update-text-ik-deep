//your JS code here. If required.
function delayMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000); // Resolves after 1 second
    });
}

// Get the HTML element with the ID "output"
const outputElement = document.getElementById("output");

// Call the function and handle the resolved promise
delayMessage()
    .then((message) => {
        // Update the text of the "output" element
        outputElement.textContent = message;
    })
    .catch((error) => {
        // Handle any errors here
        console.error(error);
    });
