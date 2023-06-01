import HorizontalNav from './components/navbar/HorizontalNav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MD Blog',
  description: 'A blog powered by the wonder of markdown',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-200  dark:bg-gray-800 dark:text-gray-50">
          <HorizontalNav />
          <main>{children}</main>
        </div>
      </body>

    </html>
  )
}
