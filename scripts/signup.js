import { renderLoginPage } from "./login.js";

// Function to render the sign-up page
export function renderSignUpPage() {
  const app = document.getElementById("app");

  // Render sign-up page with "Page in Progress" message
  app.innerHTML = `
    <div class="signup-container">
      <div class="in-progress-container">
        <p class="page-in-progress-message">Page in progress...</p>
        <button class="back-button" id="back-to-login">Back to Login</button>
      </div>
    </div>
  `;

  // Add event listener for "Back to Login" button
  document.getElementById("back-to-login").addEventListener("click", renderLoginPage);
}