import { renderNavbar } from "./navbar.js";

// Render the Custom Report Generation Page
export function renderReportsPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    ${renderNavbar()}
    <div class="reports-container">
      <h1>Export Reports</h1>
      <div class="parameters-container">
        <div class="parameter-field">
          <label for="custom-parameter1">Custom Parameter 1:</label>
          <input type="text" id="custom-parameter1">
        </div>
        <div class="parameter-field">
          <label for="custom-parameter2">Custom Parameter 2:</label>
          <input type="text" id="custom-parameter2">
        </div>
        <div class="parameter-field">
          <label for="custom-parameter3">Custom Parameter 3:</label>
          <input type="text" id="custom-parameter3">
        </div>
        <div class="parameter-field">
          <label for="format-selection">Format:</label>
          <select id="format-selection">
            <option value="xls">.xls</option>
            <option value="csv">.csv</option>
            <option value="pdf">.pdf</option>
          </select>
        </div>
      </div>

      <div class="reports-buttons">
        <button class="report-button" id="export-report">Export</button>
        <button class="report-button" id="share-report">Share</button>
        <button class="report-button" id="save-report">Save</button>
      </div>
    </div>
  `;

  // Placeholder event listeners for the buttons
  document.getElementById("export-report").addEventListener("click", () => {
    alert("Report will be exported in the selected format.");
  });
  document.getElementById("share-report").addEventListener("click", () => {
    alert("Report sharing functionality will be added.");
  });
  document.getElementById("save-report").addEventListener("click", () => {
    alert("Report settings will be saved.");
  });
}
