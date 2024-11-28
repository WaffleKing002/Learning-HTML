// Get the button element by ID
const darkModeButton = document.getElementById("dark-mode-toggle");
// Creating a variable to track whether dark mode is active or not and setting it initially to false
let isDarkMode = false;

// Event listener for the dark mode toggle button
darkModeButton.addEventListener("click", function() {
    // Toggle the state of dark mode
    isDarkMode = !isDarkMode;

    // Toggle the 'dark-mode' class on the body and other elements
    document.body.classList.toggle("dark-mode", isDarkMode);
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header.classList.toggle("dark-mode", isDarkMode);
    footer.classList.toggle("dark-mode", isDarkMode);

    // Here I am basically changing the text on the button based on whether dark mode is on or off
    if (isDarkMode) {
        darkModeButton.textContent = "Disable Dark Mode";
    } else {
        darkModeButton.textContent = "Enable Dark Mode";
    }
});

// To insert the current year dynamically into the footer
const currentYear = new Date().getFullYear(); // Get the current year
document.getElementById("current-year").textContent = currentYear; // Insert the year into the footer
