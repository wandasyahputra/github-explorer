import { SearchX } from 'lucide-react'

const EmptyState = () => (
  <div className="bg-secondary flex h-70 w-full items-center justify-center rounded-lg">
    <SearchX className="h-20 w-20" />
    <span className="text-left">
      Nothing here
      <br /> Maybe you can change the keyword
    </span>
  </div>
)

export default EmptyState
