import type { FC } from 'react'

import { FolderPlusIcon } from '@/icons/folder-plus'

export const NoProjects: FC = () => {
  return (
    <div className="py-8 text-center">
      <FolderPlusIcon className="mx-auto size-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No products</h3>
      <p className="mt-1 text-sm text-gray-500">
        Try a different search or filter to find what you’re looking for.
      </p>
    </div>
  )
}
