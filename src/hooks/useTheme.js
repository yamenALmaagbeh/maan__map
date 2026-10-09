import { useCallback, useEffect, useState } from 'react';

const KEY = 'dalil-maan-theme';

const initial = () => {
  try {
    return (
      localStorage.getItem(KEY) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );
  } catch {
    return 'light';
  }
};

export function useTheme() {
  const [theme, setTheme] = useState(initial);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(KEY, theme); } catch { /* storage unavailable */ }
  }, [theme]);
  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);
  return { theme, toggle };
}
