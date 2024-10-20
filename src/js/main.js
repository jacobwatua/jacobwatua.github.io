// Function to toggle dark mode
const toggleDarkMode = () => {
  let isDarkMode = localStorage.getItem("isDarkMode");

  // Check if it's a new visit and there's no preference stored
  if (isDarkMode === null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      isDarkMode = true;
    } else {
      isDarkMode = false;
    }
    localStorage.setItem("isDarkMode", isDarkMode);
  } else {
    // Convert stored value to boolean
    isDarkMode = isDarkMode === "true";
  }

  // Toggle dark mode
  isDarkMode = !isDarkMode;
  localStorage.setItem("isDarkMode", isDarkMode);

  // Update SVG color when toggled
  updateSvgColor();

  return isDarkMode;
};

// Function to check if dark mode is enabled
function checkDarkMode() {
  return localStorage.getItem("isDarkMode") === "true";
}

// Function to update the SVG fill color
function updateSvgColor() {
  const darkMode = checkDarkMode();
  const svg = document.querySelector(".burger svg g"); // Targeting <g> inside the SVG
  const closeBtn = document.querySelector("#close-btn svg g");
  if (darkMode) {
    svg.setAttribute("fill", "#ffffff"); // White for dark mode
    closeBtn.setAttribute("fill", "#ffffff");
  } else {
    svg.setAttribute("fill", "#000000"); // Black for light mode
    closeBtn.setAttribute("fill", "#000000");
  }
}

// Add event listener to monitor system dark mode changes
if (window.matchMedia) {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const isSystemDarkMode = e.matches;
      localStorage.setItem("isDarkMode", isSystemDarkMode);
      updateSvgColor();
    });
}

//function to toggle sidebar
function toggleSidebar() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.classList.toggle("hidden");
}

// Initialize the SVG color based on the current mode when the page loads
document.addEventListener("DOMContentLoaded", () => {
  updateSvgColor(); // Set SVG color on page load
});
