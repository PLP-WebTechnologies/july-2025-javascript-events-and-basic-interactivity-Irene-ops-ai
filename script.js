// ----------------------
// Part 1: Event Handling
// ----------------------
const messageBtn = document.getElementById("messageBtn");
const messageOutput = document.getElementById("messageOutput");

messageBtn.addEventListener("click", () => {
  messageOutput.textContent = "🎉 Button was clicked!";
});

// ----------------------
// Part 2: Interactive Features
// ----------------------

// Light/Dark Mode Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Feature
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// ----------------------
// Part 3: Form Validation
// ----------------------
const form = document.getElementById("myForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const formSuccess = document.getElementById("formSuccess");

// Error message spans
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  let valid = true;

  // Validate name
  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailField.value.trim())) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password (at least 6 characters)
  if (passwordField.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all fields are valid
  if (valid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset(); // Clear form
  } else {
    formSuccess.textContent = "";
  }
});
