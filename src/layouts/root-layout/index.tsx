import Link from 'next/link'
import type { FC, PropsWithChildren } from 'react'

import { Button } from '@/components/ui/button'
import { ABSOLUTE_ROUTES } from '@/constants/routes'

import { geistMono } from './root-layout.constants'

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <div className="container mx-auto flex items-center justify-between p-4">
          <h2 className="text-2xl font-semibold">HEALF.</h2>
          <Button asChild>
            <Link href={ABSOLUTE_ROUTES.HOME}>Get Started</Link>
          </Button>
        </div>
        {children}
      </body>
    </html>
  )
}
