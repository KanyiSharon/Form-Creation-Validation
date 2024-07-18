document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var isValid = true;
    var messages = [];

    // username validation
    if (username.length < 3) {
      isValid = false;
      messages.push = "Username must contain at least 3 characters";
    }
    // email validation
    if (!email.includes("@") && email.includes(".")) {
      isValid = false;
      messages.push('Email must contain "@" and "."');
    }
    // password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must contain at leats 8 characters");
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.textContent = messages.join("<br>");
      feedbackDiv.innerHTML("");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
