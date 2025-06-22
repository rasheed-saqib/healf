import type { FC, PropsWithChildren } from 'react'

import { Toaster } from '@/components/ui/sonner'

import { Navbar } from './navbar'
import { geistMono } from './root-layout.constants'

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  )
}
