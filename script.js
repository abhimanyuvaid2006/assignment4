const form = document.getElementById("surveyForm");

form.addEventListener("submit", (event) => {
    
    event.preventDefault();

 
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(error => {
        error.remove();
    });

    if (validateForm()) {
        form.submit();
        console.log("Validation successful");
    } else {
        console.log("Validation failed");
    }
});

/**
 * Validates all form inputs
 * @returns {boolean} true if all inputs are valid, false otherwise
 */
function validateForm() {
    let isValid = true;

    const fullNameInput = document.getElementById("fullName");
    const fullName = escapeHTML(fullNameInput.value);

    if (fullName === "") {
        showInputError(fullNameInput, "Full name is required.");
        isValid = false;
    }

    const frequencyInput = document.getElementById("frequency");
    const frequency = escapeHTML(frequencyInput.value);

    if (frequency === "") {
        showInputError(frequencyInput, "Please select an option.");
        isValid = false;
    }

    const usernameInput = document.getElementById("username");
    const username = escapeHTML(usernameInput.value);

    if (username === "") {
        showInputError(usernameInput, "Username is required.");
        isValid = false;
    }

    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    if (username !== "" && !alphanumericPattern.test(username)) {
        showInputError(usernameInput, "Username can only contain letters and numbers.");
        isValid = false;
    }

    const genreOptions = document.querySelectorAll("input[name='genre']");
    let genreChecked = false;

    genreOptions.forEach(option => {
        if (option.checked) {
            genreChecked = true;
        }
    });

    if (!genreChecked) {
        showInputError(document.getElementById("action"), "Please select a genre.");
        isValid = false;
    }

    const movieOptions = document.querySelectorAll("input[name='movies']");
    let movieChecked = false;

    movieOptions.forEach(option => {
        if (option.checked) {
            movieChecked = true;
        }
    });

    if (!movieChecked) {
        showInputError(document.getElementById("hollywood"), "Please select at least one movie type.");
        isValid = false;
    }

    return isValid;
}

/**
 * Creates and displays an error message next to the input
 * @param {HTMLElement} inputElement - the input that failed validation
 * @param {string} message - the error message to display
 */
function showInputError(inputElement, message) {
    const errorDisplay = document.createElement("span");
    errorDisplay.innerHTML = message;
    errorDisplay.className = "error-message";
    inputElement.parentElement.appendChild(errorDisplay);
}

/**
 * Replaces special characters with HTML entities to prevent XSS
 * @param {string} input - the raw input value
 * @returns {string} sanitized string
 */
function escapeHTML(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}