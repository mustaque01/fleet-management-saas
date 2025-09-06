import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'FleetFlow - Modern Fleet Management SaaS',
  description: 'Comprehensive fleet management solution with real-time tracking, driver management, and analytics. Built with Next.js 14.',
  keywords: ['fleet management', 'vehicle tracking', 'logistics', 'SaaS', 'transportation'],
  authors: [{ name: 'Mustaque', url: 'https://github.com/mustaque01' }],
  creator: 'Mustaque',
  openGraph: {
    title: 'FleetFlow - Modern Fleet Management SaaS',
    description: 'Comprehensive fleet management solution with real-time tracking, driver management, and analytics.',
    url: 'https://fleetflow.vercel.app',
    siteName: 'FleetFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FleetFlow - Modern Fleet Management SaaS',
    description: 'Comprehensive fleet management solution with real-time tracking, driver management, and analytics.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
