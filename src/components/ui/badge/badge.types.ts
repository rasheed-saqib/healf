import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import type { BADGE_VARIANTS } from './badge.constants'

export interface BadgeProps
  extends ComponentProps<'span'>,
    VariantProps<typeof BADGE_VARIANTS> {
  asChild?: boolean
}
