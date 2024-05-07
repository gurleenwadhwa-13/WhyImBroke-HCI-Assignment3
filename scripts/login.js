import { loadDashboardPage } from "./main.js";
import { loadSignUpPage } from "./main.js";

export function renderLoginPage() {
  const app = document.getElementById("app");

  // Hardcoded credentials
  const validCredentials = {
    username: "user",
    password: "password@123",
  };

  // Render login page
  app.innerHTML = `
    <div class="login-container">
      <form id="login-form" class="login-form">
        <img src="assets/WhyImBrokeMainImage.png" alt="Logo" class="login-icon">
        <h1>Login</h1>
        <div class="form-group">
          <label for="username">Username:</label>
          <input id="username" type="text" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input id="password" type="password" required>
        </div>
        <div id="error-message" class="error"></div>
        <button type="submit" class="login-button">Login</button>
        <button type="button" class="new-user-button" id="new-user">New User? Sign Up Here</button>
      </form>
    </div>
  `;

  // Add form submission event listener
  const loginForm = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Retrieve input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate credentials
    if (username === validCredentials.username && password === validCredentials.password) {
      errorMessage.innerText = "";
      loadDashboardPage(); // Navigate to the dashboard page
    } else {
      errorMessage.innerText = "Invalid Username or Password.";
    }
  });

  // Navigate to the sign-up page on button click
  document.getElementById("new-user").addEventListener("click", loadSignUpPage);
}
