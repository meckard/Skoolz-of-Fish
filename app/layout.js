import { Pacifico } from 'next/font/google'
import './globals.css'
import Navbar from './Components/nav'

const pacifico = Pacifico({ 
  subsets: ['latin'],
  weight: '400' })

export const metadata = {
  title: 'Skoolz of Fish',
  description: 'Freshwater fish, tanks, and more!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={pacifico.className}>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
