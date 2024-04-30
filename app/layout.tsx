import 'styles/globals.css'

import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import Footer from 'app/components/footer'
import { Navbar } from 'app/components/navbar'
import { baseUrl } from 'app/sitemap'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

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

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={cn(
        'text-black bg-white dark:text-white dark:bg-black font-sans',
        openSans.variable,
      )}
    >
      <body className="antialiased max-w-xl px-4 sm:px-0 mt-8 sm:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
