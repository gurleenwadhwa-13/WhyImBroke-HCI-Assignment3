import { renderNavbar } from "./navbar.js";

// Sample data for demonstration
const lineData = [150, 200, 250, 300, 350, 400];
const pieData = [30, 20, 25, 25];
const barData = [100, 120, 140, 160, 180, 200];
const transactions = [
  { name: "Groceries", amount: "$80.00" },
  { name: "Dining", amount: "$45.00" },
  { name: "Transport", amount: "$60.00" }
];

// Render the Spending Patterns page
export function renderSpendingPatternsPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    ${renderNavbar()}
    <div class="heading-container">
      <h2>This Month</h2>
    </div>
    <div class="patterns-container">
      <div class="pattern-row">
        <div class="pattern-item">
          <h2>Pattern 1</h2>
          <canvas id="lineChart"></canvas>
        </div>
        <div class="pattern-item">
          <h2>Pattern 2</h2>
          <canvas id="pieChart"></canvas>
          <p>Getting insights</p>
        </div>
      </div>
      <div class="pattern-row">
        <div class="pattern-item">
          <h2>Pattern 3</h2>
          <canvas id="barChart"></canvas>
        </div>
        <div class="pattern-item">
          <h2>Top Transactions</h2>
          <ul id="transactionList"></ul>
          <p>For Future use: ML to categorize transactions</p>
        </div>
      </div>
      <button class="back-button" id="back-to-dashboard">Back to Dashboard</button>
    </div>
  `;

  // Back button event listener
  document.getElementById("back-to-dashboard").addEventListener("click", () => {
    import("./dashboard.js").then((module) => module.renderDashboardPage());
  });

  // Draw charts
  const lineCtx = document.getElementById('lineChart').getContext('2d');
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
      datasets: [{
        label: 'Weekly Spending',
        data: lineData,
        borderColor: '#4CAF50',
        fill: false
      }]
    }
  });

  const pieCtx = document.getElementById('pieChart').getContext('2d');
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['Food & Dining', 'Transport', 'Utilities', 'Entertainment'],
      datasets: [{
        data: pieData,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50']
      }]
    }
  });

  const barCtx = document.getElementById('barChart').getContext('2d');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Monthly Spending',
        data: barData,
        backgroundColor: '#FFCE56'
      }]
    }
  });

  // List of transactions
  const transactionList = document.getElementById('transactionList');
  transactions.forEach(t => {
    const li = document.createElement('li');
    li.textContent = `${t.name}: ${t.amount}`;
    transactionList.appendChild(li);
  });
}