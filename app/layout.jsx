
import './globals.css';
import { Inter } from 'next/font/google';
import {Providers} from './providers';
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fantasy Formulate',
  description: 'Set your winning line-up',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
