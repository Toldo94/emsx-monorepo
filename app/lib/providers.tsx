'use client'

import { SearchProvider } from '@/lib/context/search.context'
import { SessionProvider } from 'next-auth/react'

type Props = {
  children?: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </SessionProvider>
  )
}