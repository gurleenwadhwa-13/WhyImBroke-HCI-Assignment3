// Function to render the navbar with links
export function renderNavbar() {
    return `
      <nav class="navbar">
        <img src="assets/NavbarLogo.png" alt="Logo" class="navbar-logo">
        <ul class="navbar-list">
          <li class="navbar-item"><a href="/dashboard" class="navbar-link">Dashboard</a></li>
          <li class="navbar-item"><a href="/transactions" class="navbar-link">Transactions</a></li>
          <li class="navbar-item"><a href="/patterns" class="navbar-link">Spending Patterns</a></li>
          <li class="navbar-item"><a href="/budget" class="navbar-link">Budget</a></li>
          <li class="navbar-item"><a href="/reports" class="navbar-link">Export Reports</a></li>
      </ul>
        </ul>
        <button class="logout-button" id="logout">Logout</button>
      </nav>
    `;
}