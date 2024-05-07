import { renderLoginPage } from "./login.js";
import { renderDashboardPage } from "./dashboard.js";
import { renderSignUpPage } from "./signup.js";
import { renderTransactionsPage } from "./transactions.js";
import { renderSpendingPatternsPage } from "./patterns.js";
import { renderBudgetPage } from "./budget.js";
import { renderReportsPage } from "./reports.js";

// Route paths and their corresponding functions
const routes = {
  "/": renderLoginPage,
  "/dashboard": renderDashboardPage,
  "/signup": renderSignUpPage,
  "/transactions": renderTransactionsPage,
  "/patterns": renderSpendingPatternsPage,
  "/budget":renderBudgetPage,
  "/reports": renderReportsPage
};

function navigateTo(path) {
  window.history.pushState({}, path, window.location.origin + path);
  updateRoute(); // Update the current route
}

function updateRoute() {
  const path = window.location.pathname;
  const routeFunction = routes[path] || renderLoginPage; // Default to login page if path not found
  routeFunction(); // Call the appropriate function based on the path
}

// Listen for browser navigation events (back/forward buttons)
window.addEventListener("popstate", updateRoute);

// Initial route loading
document.addEventListener("DOMContentLoaded", () => {
  updateRoute();
});

// Function to load the sign-up page
function loadSignUpPage() {
  navigateTo("/signup");
}

// Function to load the dashboard page using navigation
function loadDashboardPage() {
    navigateTo("/dashboard");
}
  
// Export navigation functions
export { navigateTo, loadDashboardPage ,loadSignUpPage };
