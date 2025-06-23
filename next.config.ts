import { fileURLToPath } from 'node:url'

import createJiti from 'jiti'
import type { NextConfig } from 'next'

const jiti = createJiti(fileURLToPath(import.meta.url))
jiti('./src/env/client.ts')

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  }
}

export default nextConfig
