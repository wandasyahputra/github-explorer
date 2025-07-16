import { HeartCrack, WifiOff } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ErrorOverlay = ({
  isError,
  isPaused,
  refetch,
}: {
  isError: boolean
  isPaused: boolean
  refetch: () => void
}) => {
  return (
    <div
      className={cn(
        'bg-secondary absolute top-14 flex h-full min-h-80 w-full items-center justify-center duration-500',
        { 'opacity-100': isError || isPaused },
        { 'pointer-events-none opacity-0': !isError && !isPaused }
      )}>
      {isPaused ? (
        <div className="flex flex-col items-center gap-3">
          <WifiOff className="h-16 w-16" />
          <span>
            It looks like you're offline, we'll try again when you're online.
          </span>
        </div>
      ) : null}
      {isError ? (
        <div className="flex flex-col items-center gap-3">
          <HeartCrack className="h-16 w-16" />
          <span>Something went wrong, please try again</span>
          <Button onClick={refetch}>Try Again</Button>
        </div>
      ) : null}
    </div>
  )
}

export default ErrorOverlay
