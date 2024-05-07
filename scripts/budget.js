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

      <div class="pie-chart-container">
        <h2>Custom Alerts Breakdown</h2>
        <canvas id="alertPieChart"></canvas>
      </div>

      <div class="alert-list-container">
        <h2>Custom Alerts List</h2>
        <ul id="alert-list"></ul>
      </div>
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
        threshold: value || "0"
      };
    });

    // Update the pie chart
    const pieChartData = customAlerts.map(alert => parseInt(alert.threshold) || 0);
    updatePieChart(pieChartData);

    // Update the custom alerts list
    const alertList = document.getElementById("alert-list");
    alertList.innerHTML = customAlerts.map(alert => `
      <li>${alert.category}: ${alert.threshold}% of budget</li>
    `).join('');

    // Validate and save the budget settings
    if (budgetValue && alertThreshold) {
      alertMessage.innerHTML = `
        <p>Budget saved successfully!</p>
        <p>Alert will trigger at ${alertThreshold}% of a $${budgetValue} budget.</p>
      `;
    } else {
      alertMessage.innerHTML = "<p>Please fill out all required fields.</p>";
    }
  });

  // Initialize the pie chart
  createPieChart();
}

function createPieChart() {
  const pieCtx = document.getElementById("alertPieChart").getContext("2d");
  window.alertPieChart = new Chart(pieCtx, {
    type: "pie",
    data: {
      labels: ['Food & Dining', 'Transport', 'Utilities', 'Entertainment'],
      datasets: [{
        data: [0, 0, 0, 0],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50']
      }]
    }
  });
}

function updatePieChart(data) {
  window.alertPieChart.data.datasets[0].data = data;
  window.alertPieChart.update();
}
