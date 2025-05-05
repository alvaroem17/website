// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Sigue siendo necesario
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
