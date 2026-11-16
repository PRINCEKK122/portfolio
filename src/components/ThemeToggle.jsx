import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

export default function ThemeToggle() {
  // Lazy initializer: read the saved theme once, on first render.
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "dark";
    } catch {
      return false;
    }
  });

  // Synchronize React state with things outside React: the <html> attribute and storage.
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      /* Theme still works when storage is unavailable. */
    }
  }, [dark]);

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-pressed={dark}
      onClick={() => setDark((d) => !d)}
    >
      Dark theme
    </button>
  );
}
