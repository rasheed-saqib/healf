import { existsSync, mkdirSync, unlinkSync, writeFileSync } from 'node:fs'
import path from 'node:path'

import { type NextMiddleware, NextResponse } from 'next/server'

import { clientEnv } from '@/env/client'
import { ProjectSchemaKeys } from '@/schemas/project'
import type { APIResponse } from '@/types/next'
import { parseCSV } from '@/utils/csv'
import { formatProducts } from '@/utils/products'

const ASSETS_PATH = path.join(process.cwd(), 'public', 'assets')

export const POST: NextMiddleware = async req => {
  try {
    const formData = await req.formData()

    const file = formData.get(ProjectSchemaKeys.FILE) as File | null
    const keys = formData.get(ProjectSchemaKeys.KEYS) as string | null

    if (file == null) {
      return NextResponse.json<APIResponse>(
        { status: 'error', message: 'No files received.' },
        {
          status: 400
        }
      )
    }

    const products = await parseCSV(
      Buffer.from(await file.arrayBuffer()).toString('utf8')
    )

    const formattedProducts = formatProducts(products, JSON.parse(keys ?? '{}'))

    mkdirSync(ASSETS_PATH, { recursive: true })

    const filePath = path.join(ASSETS_PATH, 'products.json')

    if (existsSync(filePath)) {
      unlinkSync(filePath)
    }

    writeFileSync(filePath, JSON.stringify(formattedProducts, null, 2), 'utf8')

    const url = new URL(`/assets/products.json`, clientEnv.NEXT_PUBLIC_APP_URL)

    return NextResponse.json<APIResponse>({
      status: 'success',
      message: 'File uploaded successfully.',
      data: {
        path: url.href
      }
    })
  } catch (error) {
    console.log(error)

    return NextResponse.json<APIResponse>(
      {
        status: 'error',
        message: 'An error occurred while uploading the file.'
      },
      {
        status: 500
      }
    )
  }
}
