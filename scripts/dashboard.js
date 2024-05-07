import { renderLoginPage } from "./login.js";
import { renderNavbar } from "./navbar.js";

function renderAccountCard(account) {
    return `
      <div class="account-card">
        <h3>${account.name}</h3>
        <p>Ending in: ****${account.lastFourDigits}</p>
      </div>
    `;
}

// Sample linked accounts
const linkedAccounts = [
  { name: "Checking Account", lastFourDigits: "1234" },
  { name: "Savings Account", lastFourDigits: "5678" }
];

// State management
let isLinkingAccount = false;

function renderPageInProgress(message = "Page in progress...") {
  return `
    <div class="in-progress-container">
      <p class="page-in-progress-message">${message}</p>
      <button class="back-button" id="back-to-dashboard">Back to Dashboard</button>
    </div>
  `;
}

function renderAccountList() {
  return `
    <div class="account-list-container">
      ${
        linkedAccounts.length === 0
          ? "<p>No accounts linked yet. Add your first account!</p>"
          : linkedAccounts
              .map((account) => renderAccountCard(account))
              .join("")
      }
    </div>
  `;
}

export function renderDashboardPage() {
  const app = document.getElementById("app");

  const mainContent = isLinkingAccount
    ? renderPageInProgress("Page in progress...")
    : `
    <div class="account-management-container">
      ${renderAccountList()}
      <button class="link-new-account-button" id="link-new-account">
        <span class="link-new-icon">+</span> Link New Account
      </button>
    </div>
  `;

  app.innerHTML = `
    ${renderNavbar()}
    <div class="dashboard-container">
      <button class="logout-button" id="logout">Logout</button>
      <h1>Link Your Account</h1>
      ${mainContent}
    </div>
  `;

  document.getElementById("logout").addEventListener("click", () => {
    renderLoginPage(); // Navigate back to the login page
  });

  if (isLinkingAccount) {
    document
      .getElementById("back-to-dashboard")
      .addEventListener("click", () => {
        isLinkingAccount = false;
        renderDashboardPage(); // Re-render dashboard page
      });
  } else {
    document
      .getElementById("link-new-account")
      .addEventListener("click", () => {
        isLinkingAccount = true;
        renderDashboardPage(); // Re-render dashboard page
      });
  }
}
