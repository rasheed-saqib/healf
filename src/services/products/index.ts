import { clientEnv } from '@/env/client'
import { ProjectSchemaKeys } from '@/schemas/project'
import type { APIResponse } from '@/types/next'
import type { Product } from '@/types/product'

/**
 * Uploads a file containing product data to the server.
 * @param file
 * @param keys
 * @returns The URL of the uploaded file.
 */
export const uploadProducts = async (
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

/**
 * Fetches product data from a JSON file hosted on the server.
 * @returns A promise that resolves to an array of products.
 */
export const getProducts = async (): Promise<Product[]> => {
  const url = new URL('/assets/products.json', clientEnv.NEXT_PUBLIC_APP_URL)

  const response = await fetch(url.href)

  if (!response.ok) {
    return []
  }

  return (await response.json()) as Promise<Product[]>
}
