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

    return isValid;
}

function showInputError(inputElement, message) {
    const errorDisplay = document.createElement("span");
    errorDisplay.innerHTML = message;
    errorDisplay.className = "error-message";
    inputElement.parentElement.appendChild(errorDisplay);
}

function escapeHTML(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
} 