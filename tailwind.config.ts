import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  content: [
    './app/**/*.{tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lxgwwenkaiscreen)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
