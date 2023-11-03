import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Wemsc - Music Streaming Desktop App (Dark Mode) by Nailul Izah on Dribbble',
  description: 'Wemsc - Music Streaming Desktop App (Dark Mode) designed by Nailul Izah. Connect with them on Dribbble; the global community for designers and creative professionals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
