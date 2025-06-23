'use client'

import { ProjectSchemaKeys } from '@/schemas/project'
import type { APIResponse } from '@/types/next'

export const uploadFile = async (
  file: File,
  keys: Record<string, string> = {}
): Promise<string> => {
  const formData = new FormData()
  formData.append(ProjectSchemaKeys.FILE, file)
  formData.append(ProjectSchemaKeys.KEYS, JSON.stringify(keys))

  const response = await fetch('/api/files', {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw new Error('Failed to upload file')
  }

  const data = (await response.json()) as APIResponse<{ url: string }>

  if (data.status !== 'success' || data.data == null) {
    throw new Error(data.message ?? 'Failed to upload file')
  }

  return data.data.url
}
