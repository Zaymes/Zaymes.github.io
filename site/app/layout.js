import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
