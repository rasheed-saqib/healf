import './globals.css'

import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'

import { RootLayout } from '@/layouts/root-layout'

export const metadata: Metadata = {
  title: 'Healf',
  description:
    'A Next.JS app that helps you display, filters and explore products scraped from the internet.'
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <RootLayout>{children}</RootLayout>
}

export default Layout
