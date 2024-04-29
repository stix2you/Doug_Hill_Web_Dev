
// the following functions are used to toggle the light/dark theme and save the preference in local storage
function toggleTheme() {
   let isDark = document.body.classList.toggle("dark-theme");
   localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function loadTheme() {
   const savedTheme = localStorage.getItem('theme');
   if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
   } else {
      document.body.classList.remove('dark-theme');
   }
}

// Call loadTheme() when the page loads
window.onload = loadTheme;