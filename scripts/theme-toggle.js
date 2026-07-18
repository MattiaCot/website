(function () {
  function applyThemeFromStorage() {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    document.body.classList.toggle('dark-mode', isDarkMode);

    const toggleButton = document.getElementById('toggle');
    if (toggleButton) {
      toggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    }
  }

  function initializeThemeToggle() {
    const toggleButton = document.getElementById('toggle');
    if (!toggleButton || toggleButton.dataset.initialized === 'true') {
      return;
    }

    toggleButton.dataset.initialized = 'true';
    applyThemeFromStorage();

    toggleButton.addEventListener('click', () => {
      const isDarkMode = document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
      toggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    });
  }

  window.initializeThemeToggle = initializeThemeToggle;
  window.applyThemeFromStorage = applyThemeFromStorage;

  document.addEventListener('DOMContentLoaded', initializeThemeToggle);
})();
