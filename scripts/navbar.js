// Function to render the navbar with links
export function renderNavbar() {
    return `
      <nav class="navbar">
        <ul class="navbar-list">
          <li class="navbar-item"><a href="/dashboard" class="navbar-link">Dashboard</a></li>
          <li class="navbar-item"><a href="/transactions" class="navbar-link">Transactions</a></li>
          <li class="navbar-item"><a href="/patterns" class="navbar-link">Spending Patterns</a></li>
        </ul>
        <button class="logout-button" id="logout">Logout</button>
      </nav>
    `;
}