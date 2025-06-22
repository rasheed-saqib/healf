import { Slot } from '@radix-ui/react-slot'
import type { FC } from 'react'

import { cn } from '@/utils/cn'

import { BADGE_VARIANTS } from './badge.constants'
import type { BadgeProps } from './badge.types'

const Badge: FC<BadgeProps> = ({
  className,
  variant,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(BADGE_VARIANTS({ variant }), className)}
      {...props}
    />
  )
}

export { Badge }

export { BADGE_VARIANTS } from './badge.constants'
