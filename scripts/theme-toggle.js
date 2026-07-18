(function () {
  const STORAGE_KEY = 'darkMode';

  function getIsDarkMode() {
    return localStorage.getItem(STORAGE_KEY) === 'enabled';
  }

  function applyTheme(isDarkMode) {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';

    document.querySelectorAll('#toggle, .theme-toggle').forEach((button) => {
      if (button) {
        button.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        button.setAttribute('aria-pressed', String(isDarkMode));
      }
    });
  }

  function initializeThemeToggle() {
    const toggleButtons = Array.from(document.querySelectorAll('#toggle, .theme-toggle'));
    if (!toggleButtons.length) {
      return;
    }

    toggleButtons.forEach((button) => {
      if (button.dataset.initialized === 'true') {
        return;
      }

      button.dataset.initialized = 'true';
      button.addEventListener('click', () => {
        const isDarkMode = !document.documentElement.classList.contains('dark-mode');
        localStorage.setItem(STORAGE_KEY, isDarkMode ? 'enabled' : 'disabled');
        applyTheme(isDarkMode);
      });
    });

    applyTheme(getIsDarkMode());
  }

  window.initializeThemeToggle = initializeThemeToggle;
  window.applyThemeFromStorage = () => applyTheme(getIsDarkMode());

  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
      applyTheme(getIsDarkMode());
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeThemeToggle);
  } else {
    initializeThemeToggle();
  }
})();