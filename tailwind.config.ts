import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: 'rgb(var(--color-blue) / <alpha-value>)',
        title: 'rgb(var(--color-title) / <alpha-value>)',
        subtitle: 'rgb(var(--color-subtitle) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        span: 'rgb(var(--color-span) / <alpha-value>)',
        label: 'rgb(var(--color-label) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        post: 'rgb(var(--color-post) / <alpha-value>)',
        profile: 'rgb(var(--color-profile) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        input: 'rgb(var(--color-input) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
