import { renderNavbar } from "./navbar.js";

// Sample data
const transactionsData = [
    {
      category: "Food & Dining",
      transactions: [
        { name: "Groceries", amount: "$50.00" },
        { name: "Restaurant", amount: "$30.00" },
      ],
    },
    {
      category: "Utilities",
      transactions: [
        { name: "Electricity Bill", amount: "$60.00" },
        { name: "Water Bill", amount: "$20.00" },
      ],
    },
  ];
  
  // Render a single transaction item
  function renderTransactionItem(transaction) {
    return `
      <div class="transaction-item">
        <span class="transaction-name">${transaction.name}</span>
        <span class="transaction-amount">${transaction.amount}</span>
      </div>
    `;
  }
  
  // Render a category with its transactions
  function renderTransactionCategory(categoryData) {
    const transactions = categoryData.transactions.map(renderTransactionItem).join("");
    return `
      <div class="transaction-category">
        <h2>${categoryData.category}</h2>
        ${transactions}
      </div>
    `;
  }
  
  // Render the entire transactions page
  export function renderTransactionsPage() {
    const app = document.getElementById("app");
  
    const transactionsPageContent = transactionsData.map(renderTransactionCategory).join("");
  
    app.innerHTML = `
      ${renderNavbar()}
      <div class="transactions-container">
        <h1>Transactions</h1>
        ${transactionsPageContent}
        <button class="back-button" id="back-to-dashboard">Back to Dashboard</button>
      </div>
    `;
  
    // Add event listener for back button
    document.getElementById("back-to-dashboard").addEventListener("click", () => {
      import("./dashboard.js").then((module) => {
        module.renderDashboardPage();
      });
    });
  }
  