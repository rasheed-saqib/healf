import type { FC } from 'react'

import type { PropsWithClassname } from '@/types/common'

export const ChevronDoubleRightIcon: FC<PropsWithClassname> = ({
  className
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    />
  </svg>
)
