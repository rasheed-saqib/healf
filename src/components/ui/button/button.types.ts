import type { VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'

import type { BUTTON_VARIANTS } from './button.constants'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof BUTTON_VARIANTS> {
  asChild?: boolean
}
