document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form submission

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Get error fields
  const errors = document.querySelectorAll(".error");
  const successMsg = document.getElementById("success");

  // Clear old messages
  errors.forEach((err) => (err.textContent = ""));
  successMsg.textContent = "";

  // Validation flags
  let isValid = true;

  // Name validation
  if (name === "") {
    errors[0].textContent = "Name cannot be empty.";
    isValid = false;
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    errors[1].textContent = "Email cannot be empty.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    errors[1].textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    errors[2].textContent = "Message cannot be empty.";
    isValid = false;
  }

  // Show success message if valid
  if (isValid) {
    successMsg.textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
