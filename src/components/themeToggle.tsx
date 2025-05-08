// src/components/ThemeToggle.tsx
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
