import { Header } from '@/app/_components'
import Providers from '@/app/providers'
import { Inter } from 'next/font/google'

import '@/styles/globals.scss'

import s from './home.module.scss'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--inter-font'
})

export const metadata = {
  title: 'Fantasy Shop'
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru' className={inter.variable}>
      <body>
        <Providers>
          <Header />
          <main className={s.main}>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
