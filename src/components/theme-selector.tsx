'use client';

const ThemeSelector = () => {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    if (
      localStorage?.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  return null;
};

export default ThemeSelector;
