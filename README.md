
# Why I'm Broke

**Why I'm Broke** is a financial management tool designed to help users gain insights into their spending patterns, set budgets, generate custom reports, and link their financial accounts for better tracking. The application features a dashboard with account linking, custom reports, spending pattern visualization, and transaction management.

## Project Features
- **Login and Signup:** Users can log in with the provided credentials or sign up (page in progress).
- **Dashboard:** View linked accounts and add new accounts.
- **Transactions:** Review categorized transactions and navigate back to the dashboard.
- **Spending Patterns:** Visualize spending patterns using line, bar, and pie charts.
- **Budget Insights & Alerts:** Set monthly budgets, customize alerts, and see alerts visually via a pie chart.
- **Export Reports:** Generate custom reports based on different parameters and file formats.

## Installation Guide
### Prerequisites
- **Node.js** and **npm** (Node Package Manager)
- Modern web browser (Chrome, Firefox, etc.)

### Setup Instructions
1. **Clone or Download the Repository:**
   - Clone the project from your version control or download the ZIP file.

2. **Navigate to the Project Folder:**
   - Open a terminal and navigate to the project directory.

3. **Install NodeJS into local machine**
    - If Node.js is not yet installed on your machine, follow these steps:

    ##### Download Node.js:
    - Go to the official Node.js download page and select the appropriate installer for your operating system (Windows, macOS, or Linux).
    
    ##### Install Node.js:
    - Run the downloaded installer and follow the installation instructions. The installer will also install npm, the Node Package Manager.
    
    ##### Verify Installation:
    - After installation, open a terminal or command prompt and run the following commands to check if Node.js and npm are correctly installed:
    ```bash
    node -v
    npm -v
    ```

    - The output should show version numbers if both are properly installed.
3. **Install Lite Server**
   - Install the required packages (e.g., Lite Server, Chart.js, Vite) using npm.
   ```bash
   npm install -g lite-server
   ```

## Running the Project
### Using Lite Server
1. **Start Lite Server:**
   - Execute the following command to start the project with Lite Server.
   ```bash
   lite-server
   ```

2. **Access the App:**
   - Open your web browser and go to `http://localhost:3000`.

## Usage Guide
### Login Credentials
- **Username:** `user`
- **Password:** `password@123`

### Pages Overview
1. **Login:**
   - Enter the credentials above to access the dashboard.

2. **Dashboard:**
   - View linked financial accounts.
   - Add new accounts using the "Link New Account" button.

3. **Transactions:**
   - View categorized transactions.

4. **Spending Patterns:**
   - Visualize spending using line, bar, and pie charts.

5. **Budget Insights & Alerts:**
   - Set monthly budgets and custom alerts.
   - View a pie chart breakdown of alerts.

6. **Export Reports:**
   - Enter custom parameters and choose a report format.
   - Use the "Export," "Share," or "Save" buttons for different actions.

## Source Code
### Main JavaScript Files
- **`main.js`:** Routes and navigation.
- **`login.js`:** Login page.
- **`dashboard.js`:** Dashboard page and account linking.
- **`transactions.js`:** Transactions page.
- **`patterns.js`:** Spending Patterns page.
- **`budget.js`:** Budget setting and alerts.
- **`reports.js`:** Export reports UI.
- **`navbar.js`:** Navigation bar.

### HTML and CSS Files
- **`index.html`:** Main HTML entry point.
- **`styles/`:** Folder containing styles for all pages.

### Config File for Lite-server
**`bs-config.js`:** Custom config file for lite-server.