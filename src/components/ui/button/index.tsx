import { Slot } from '@radix-ui/react-slot'
import type { FC } from 'react'

import { cn } from '@/utils/cn'

import { BUTTON_VARIANTS } from './button.constants'
import type { ButtonProps } from './button.types'

const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(BUTTON_VARIANTS({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }

export { BUTTON_VARIANTS } from './button.constants'
