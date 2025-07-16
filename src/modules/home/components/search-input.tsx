import { ArrowRight, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'

const SearchInput = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <Search className="h-6 w-6" />
      <input
        className="w-full focus:outline-none dark:placeholder-white/50"
        placeholder="Explore GitHub"
        alt="Explore GitHub"
        id="search-input"
      />
      <Button className="cursor-pointer">
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default SearchInput
