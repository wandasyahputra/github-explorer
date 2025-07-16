import { Accordion } from '@/components/ui/accordion'

import LoadingOverlay from '../components/loading-overlay'
import SearchInput from '../components/search-input'
import UserAccordion from '../components/user-accordion'
import useSearch from './search.hook'

const SearchComponent = () => {
  const hook = useSearch()
  const { isLoading } = hook
  return (
    <>
      <div
        className={`relative mx-auto max-h-[95vh] w-[600px] overflow-hidden rounded-xl shadow-xl duration-500 dark:shadow-white ${
          isLoading ? 'min-h-86' : 'min-h-5'
        }`}>
        <SearchInput {...hook} />
        <div className="noscrollbar overflow-auto px-4 py-3">
          <div className="max-h-[65vh]">
            <Accordion
              type="single"
              className="w-full space-y-2">
              <UserAccordion />
              <UserAccordion />
              <UserAccordion />
              <UserAccordion />
              <UserAccordion />
            </Accordion>
          </div>
        </div>
        <LoadingOverlay isLoading={isLoading} />
      </div>
    </>
  )
}

export default SearchComponent
