const passwordInput = document.getElementById("password");
const progressBar = document.getElementById("progress-bar");
const strengthText = document.getElementById("strength-text");
const toggleVisibility = document.getElementById("toggleVisibility");

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;
  let strength = 0;

  if (val.length >= 6) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[a-z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;

  // Reset progress
  progressBar.style.width = `${(strength / 5) * 100}%`;

  if (strength <= 2) {
    progressBar.style.backgroundColor = "red";
    strengthText.textContent = "Weak password 😟";
  } else if (strength <= 4) {
    progressBar.style.backgroundColor = "orange";
    strengthText.textContent = "Moderate password 😐";
  } else {
    progressBar.style.backgroundColor = "green";
    strengthText.textContent = "Strong password 💪";
  }

  if (val.length === 0) {
    progressBar.style.width = "0%";
    strengthText.textContent = "";
  }
});

// Toggle password visibility
toggleVisibility.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type");
  passwordInput.setAttribute("type", type === "password" ? "text" : "password");
});
