// Theme toggle logic
const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);
} else {
  // Default to light theme
  root.setAttribute('data-theme', 'light');
  updateIcon('light');
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});

// Update icon based on theme
function updateIcon(theme) {
  const icon = toggleBtn.querySelector('i');
  if (theme === 'dark') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}
