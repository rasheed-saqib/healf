import type { FC } from 'react'

import type { PropsWithClassname } from '@/types/common'

export const FolderPlusIcon: FC<PropsWithClassname> = ({ className }) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
      strokeWidth={2}
      vectorEffect="non-scaling-stroke"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
