import { renderNavbar } from "./navbar.js";

// Sample categories for alerts
const categories = ['Food & Dining', 'Transport', 'Utilities', 'Entertainment'];

// Render the Budget Setting Page
export function renderBudgetPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    ${renderNavbar()}
    <div class="budget-container">
      <h1>Budget Insights & Alerts</h1>
      <div class="budget-inputs">
        <div class="budget-field">
          <label for="monthly-budget">Set Monthly Budget ($):</label>
          <input type="number" id="monthly-budget" min="0" step="10" />
        </div>
        <div class="budget-field">
          <label for="alert-threshold">Alert Threshold (% of Budget):</label>
          <input type="number" id="alert-threshold" min="1" max="100" />
        </div>
      </div>

      <h2>Custom Alerts</h2>
      <div class="custom-alerts">
        ${categories.map(category => `
          <div class="alert-field">
            <label for="alert-${category.toLowerCase().replace(/ & /g, "-")}">
              ${category} Alert (% of Budget):
            </label>
            <input type="number" id="alert-${category.toLowerCase().replace(/ & /g, "-")}" min="1" max="100" />
          </div>
        `).join('')}
      </div>

      <button class="save-budget-button" id="save-budget">Save Settings</button>
      <div class="alert-message" id="alert-message"></div>
    </div>
  `;

  // Save settings event handler
  document.getElementById("save-budget").addEventListener("click", () => {
    const budgetValue = document.getElementById("monthly-budget").value;
    const alertThreshold = document.getElementById("alert-threshold").value;
    const alertMessage = document.getElementById("alert-message");

    const customAlerts = categories.map(category => {
      const inputId = `alert-${category.toLowerCase().replace(/ & /g, "-")}`;
      const value = document.getElementById(inputId).value;
      return {
        category,
        threshold: value || "not set"
      };
    });

    // Validate and save the budget settings
    if (budgetValue && alertThreshold) {
      let alertDetails = `
        <p>Budget saved successfully!</p>
        <p>Alert will trigger at ${alertThreshold}% of a $${budgetValue} budget.</p>
        <ul>
      `;
      customAlerts.forEach(alert => {
        alertDetails += `<li>${alert.category}: ${alert.threshold}% of budget</li>`;
      });
      alertDetails += `</ul>`;

      alertMessage.innerHTML = alertDetails;
    } else {
      alertMessage.innerHTML = "<p>Please fill out all required fields.</p>";
    }
  });
}
