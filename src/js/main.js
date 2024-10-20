const toggleDarkMode = () => {
  let isDarkMode = localStorage.getItem("isDarkMode");
  if (isDarkMode === null) {
    if (window.matchMedia) {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      if (query.matches) {
        isDarkMode = true;
      } else {
        isDarkMode = false;
      }
    } else {
      isDarkMode = false;
    }
    localStorage.setItem("isDarkMode", isDarkMode);
  }
  isDarkMode = !isDarkMode;
  localStorage.setItem("isDarkMode", isDarkMode);
  return isDarkMode;
};
