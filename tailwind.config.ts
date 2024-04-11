import type { Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

export default config
