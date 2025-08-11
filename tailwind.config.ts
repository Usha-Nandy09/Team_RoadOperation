import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aa-yellow': '#FFDD00',
        'aa-blue': '#003399',
        'aa-black': '#1C1C1C',
        'aa-white': '#FFFFFF',
      }
    },
  },
  plugins: [],
}
export default config 