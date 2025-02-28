'use client'

import { Suspense } from 'react'

import { SearchProvider } from '@/lib/context/search.context'
import { SessionProvider } from 'next-auth/react'

type Props = {
  children?: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchProvider>
          {children}
        </SearchProvider>
      </Suspense>
    </SessionProvider>
  )
}