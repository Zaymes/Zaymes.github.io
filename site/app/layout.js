import './globals.css'
import { DM_Sans, Montserrat } from 'next/font/google'
import { ThemeProvider } from '../lib/theme-context'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata = {
  title: 'James Shrestha - Civic Tech Engineer',
  description: 'Building civic technology for open, data-driven communities. COO at Open Knowledge Nepal.',
  keywords: 'civic tech, open data, Nepal, technology, transparency, governance',
  authors: [{ name: 'James Shrestha' }],
  openGraph: {
    title: 'James Shrestha - Civic Tech Engineer',
    description: 'Building civic technology for open, data-driven communities',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'James Shrestha - Civic Tech Engineer',
    description: 'Building civic technology for open, data-driven communities',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
