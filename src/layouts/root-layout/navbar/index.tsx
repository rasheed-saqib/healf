import Link from 'next/link'
import type { FC } from 'react'

import { Button } from '@/components/ui/button'
import { ABSOLUTE_ROUTES } from '@/constants/routes'

export const Navbar: FC = () => {
  return (
    <div className="mx-auto flex items-center justify-between p-4 xl:container">
      <Link href={ABSOLUTE_ROUTES.HOME}>
        <h2 className="text-2xl font-semibold">HEALF.</h2>
      </Link>
      <Button asChild>
        <Link href={ABSOLUTE_ROUTES.CREATE_PROJECT}>Get Started</Link>
      </Button>
    </div>
  )
}
