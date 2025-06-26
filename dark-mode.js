// Dark Mode Functionality
function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('darkModeBtn')?.querySelector('i') || document.getElementById('darkModeIcon');
    
    if (!body || !icon) return;
    
    body.classList.toggle('dark-mode');
    
    // Change icon based on mode
    if (body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check for saved dark mode preference on page load
function initializeDarkMode() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
    const body = document.body;
    const icon = document.getElementById('darkModeBtn')?.querySelector('i') || document.getElementById('darkModeIcon');
    
    if (!body || !icon) return;
    
    if (darkModeEnabled) {
        body.classList.add('dark-mode');
        icon.className = 'fas fa-sun';
    } else {
        body.classList.remove('dark-mode');
        icon.className = 'fas fa-moon';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDarkMode);

// Make function available globally
window.toggleDarkMode = toggleDarkMode;