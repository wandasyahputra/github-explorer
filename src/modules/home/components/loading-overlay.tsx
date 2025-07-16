import { LoaderCircle } from 'lucide-react'

const LoadingOverlay = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div
      className={`absolute top-14 flex h-full min-h-80 w-full items-center justify-center bg-black/20 duration-500 dark:bg-white/20 ${
        isLoading ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}>
      <LoaderCircle className="h-16 w-16 animate-spin" />
    </div>
  )
}

export default LoadingOverlay
