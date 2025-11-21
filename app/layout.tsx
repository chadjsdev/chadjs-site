import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chad Scoville - DevSecOps Engineer & Software Developer',
  description: 'Senior Software Developer and DevSecOps Engineer with 10+ years experience in full-stack development, cloud infrastructure, and federal compliance.',
  keywords: ['DevSecOps', 'Software Developer', 'Cloud Security', 'CMMC', 'Federal Compliance', 'AWS', 'Azure'],
  authors: [{ name: 'Chad Scoville' }],
  creator: 'Chad Scoville',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chadjs.dev',
    title: 'Chad Scoville - DevSecOps Engineer & Software Developer',
    description: 'Senior Software Developer and DevSecOps Engineer specializing in federal compliance and cloud security.',
    siteName: 'Chad Scoville',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chad Scoville - DevSecOps Engineer & Software Developer',
    description: 'Senior Software Developer and DevSecOps Engineer specializing in federal compliance and cloud security.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
