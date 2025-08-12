import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aa-blue': '#003399',
        'aa-yellow': '#FFD100',
        'aa-white': '#FFFFFF',
        'aa-dark': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
export default config 