import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ABSOLUTE_ROUTES } from '@/constants/routes'

export const Home: FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Badge variant="outline">What's new</Badge>
          </div>
          <h1 className="mt-10 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Turn CSV Chaos into a Shoppable Showcase
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Upload any product CSV and—boom—you’ve got a lightning-fast catalog
            you can search, filter, and share in seconds.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" asChild>
              <Link href={ABSOLUTE_ROUTES.HOME}>Get started</Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                alt="App screenshot"
                src="https://placehold.co/600x400/0a0a0a/ffffff?text=Healf"
                width={2432}
                height={1442}
                className="w-304 rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
