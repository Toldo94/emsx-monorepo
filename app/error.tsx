'use client' // Error boundaries must be Client Components
 
import { Suspense, useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Add any components that should be wrapped in Suspense here */}
      </Suspense>
    </div>
  )
}