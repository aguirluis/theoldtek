const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  icon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLight = body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  icon.classList.replace(isLight ? 'fa-moon' : 'fa-sun', isLight ? 'fa-sun' : 'fa-moon');
});
