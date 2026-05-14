import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' })

export const metadata = {
  metadataBase: new URL('https://developervishalgupta.github.io'),
  title: 'Vishal Gupta | Full Stack MERN Developer',
  description: 'Premium portfolio of Vishal Gupta, Full Stack MERN Developer with 3+ years of experience in building modern web applications.',
  keywords: 'Full Stack Developer, MERN Stack, React, Node.js, MongoDB, Web Developer',
  authors: [{ name: 'Vishal Gupta' }],
  openGraph: {
    type: 'website',
    url: 'https://developervishalgupta.github.io',
    title: 'Vishal Gupta | Full Stack MERN Developer',
    description: 'Premium portfolio showcasing MERN stack projects and expertise',
    images: [
      {
        url: '/images/vishalGupta.png',
        width: 1200,
        height: 630,
        alt: 'Vishal Gupta Portfolio',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark-900 text-text-primary font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
