'use client'

import type { CSSProperties, FC } from 'react'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster: FC<ToasterProps> = ({ ...props }) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)'
        } as CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
