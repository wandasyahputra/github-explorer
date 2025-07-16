import { ArrowRight, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'

const SearchInput = ({
  setKeySearch,
  handleClickButton,
  inputRef,
}: {
  setKeySearch: (key: string) => void
  handleClickButton: () => void
  inputRef: React.RefObject<HTMLInputElement | null>
}) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <Search className="h-6 w-6" />
      <input
        className="w-full focus:outline-none dark:placeholder-white/50"
        placeholder="Explore GitHub"
        alt="Find GitHub user here"
        id="search-input"
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setKeySearch(e.currentTarget.value)
          }
        }}
      />
      <Button
        className="cursor-pointer"
        aria-label="Find GitHub user"
        onClick={handleClickButton}>
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default SearchInput
