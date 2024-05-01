import 'styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'

import { baseUrl } from 'app/sitemap'
import Footer from 'components/footer'
import Logo from 'components/logo'
import { openSans } from 'lib/fonts'
import { cn } from 'lib/utils'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Evan 的个人博客',
    template: '%s | evanone.me',
  },
  description: 'Evan 的个人博客，专注 React 和 Next 技术栈',
  keywords: ['技术博客', '个人博客', '前端', 'Next.js', 'React'],
  openGraph: {
    title: 'Evan 的个人博客',
    description: 'Evan 的个人博客，专注 React 和 Next 技术栈',
    url: baseUrl,
    siteName: 'Evan 的个人博客',
    locale: 'zh-CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" dir="ltr" data-theme="dark">
      <body
        className={cn(
          'text-text bg-background relative min-h-screen antialiased font-sans',
          openSans.variable,
        )}
      >
        <Logo />
        <main className="max-w-4xl mx-auto">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
