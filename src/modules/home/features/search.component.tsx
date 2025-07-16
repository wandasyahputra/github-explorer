import { useState } from 'react'

import { Accordion } from '@/components/ui/accordion'

import EmptyState from '../components/empty-state'
import ErrorOverlay from '../components/error-overlay'
import LoadingOverlay from '../components/loading-overlay'
import SearchInput from '../components/search-input'
import UserAccordion from '../components/user-accordion'
import useSearch from './search.hook'

const SearchComponent = () => {
  const hook = useSearch()
  const { isLoading, getSearchUser, isError, isPaused, keySearch } = hook
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)
  return (
    <>
      <div
        className={`relative mx-auto max-h-[95vh] w-[600px] overflow-hidden rounded-xl shadow-xl duration-500 dark:shadow-white ${
          isLoading || isError || isPaused ? 'min-h-86' : 'min-h-5'
        }`}>
        <SearchInput {...hook} />
        <div className="noscrollbar overflow-auto">
          <div className="max-h-[65vh]">
            <Accordion
              type="single"
              collapsible
              onValueChange={setActiveAccordion}
              className="w-full space-y-2">
              {!getSearchUser?.data?.items?.length &&
              !isLoading &&
              keySearch ? (
                <EmptyState />
              ) : null}
              {getSearchUser?.data?.items?.map((x, index) => (
                <UserAccordion
                  key={index}
                  {...x}
                  isActive={activeAccordion === x.login}
                />
              ))}
            </Accordion>
          </div>
        </div>
        <ErrorOverlay {...hook} />
        <LoadingOverlay {...hook} />
      </div>
    </>
  )
}

export default SearchComponent
