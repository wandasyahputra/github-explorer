import {
  ArrowRight,
  ExternalLink,
  LoaderCircle,
  Search,
  Star,
} from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

import useSearch from './search.hook'

const SearchComponent = () => {
  const hook = useSearch()
  const { isLoading, setIsloading } = hook
  return (
    <>
      <div
        className={`relative mx-auto max-h-[95vh] w-[600px] overflow-hidden rounded-xl shadow-xl duration-500 dark:shadow-white ${
          isLoading ? 'min-h-86' : 'min-h-5'
        }`}>
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
        <div className="overflow-auto px-4 py-3">
          <Accordion
            type="multiple"
            className="w-full space-y-2">
            <AccordionItem
              value={'1'}
              className="border-b-0">
              <div className="bg-secondary w-full gap-3 rounded-lg px-4 text-lg font-bold">
                <AccordionTrigger className="w-full py-2 hover:no-underline">
                  Trigger
                </AccordionTrigger>
              </div>
              <AccordionContent className="block flex-col p-3">
                <ScrollArea className="relative h-[50vh] [&_.github-card-item]:w-[calc(100vw-120px)] [&_.github-card-item]:max-w-[544px]">
                  <div className="github-card-item bg-secondary mb-3 rounded-md p-3 text-left">
                    <div className="flex justify-between">
                      <a
                        href="https://www.github.com"
                        target="_blank"
                        className="flex w-4/5 items-center gap-2">
                        <span className="truncate font-bold">
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github
                        </span>
                        <button className="cursor-pointer">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </a>
                      <span className="flex items-center">
                        1
                        <Star className="h-4 w-4" />
                      </span>
                    </div>
                    <p>
                      Repository Description gaes Repository Description
                      gaesRepository Description gaes
                    </p>
                  </div>
                  <div className="github-card-item bg-secondary mb-3 rounded-md p-3 text-left">
                    <div className="flex justify-between">
                      <a
                        href="https://www.github.com"
                        target="_blank"
                        className="flex w-4/5 items-center gap-2">
                        <span className="truncate font-bold">
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github
                        </span>
                        <button className="cursor-pointer">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </a>
                      <span className="flex items-center">
                        1
                        <Star className="h-4 w-4" />
                      </span>
                    </div>
                    <p>
                      Repository Description gaes Repository Description
                      gaesRepository Description gaes
                    </p>
                  </div>
                  <div className="github-card-item bg-secondary mb-3 rounded-md p-3 text-left">
                    <div className="flex justify-between">
                      <a
                        href="https://www.github.com"
                        target="_blank"
                        className="flex w-4/5 items-center gap-2">
                        <span className="truncate font-bold">
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github
                        </span>
                        <button className="cursor-pointer">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </a>
                      <span className="flex items-center">
                        1
                        <Star className="h-4 w-4" />
                      </span>
                    </div>
                    <p>
                      Repository Description gaes Repository Description
                      gaesRepository Description gaes
                    </p>
                  </div>
                  <div className="github-card-item bg-secondary mb-3 rounded-md p-3 text-left">
                    <div className="flex justify-between">
                      <a
                        href="https://www.github.com"
                        target="_blank"
                        className="flex w-4/5 items-center gap-2">
                        <span className="truncate font-bold">
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github
                        </span>
                        <button className="cursor-pointer">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </a>
                      <span className="flex items-center">
                        1
                        <Star className="h-4 w-4" />
                      </span>
                    </div>
                    <p>
                      Repository Description gaes Repository Description
                      gaesRepository Description gaes
                    </p>
                  </div>
                  <div className="github-card-item bg-secondary mb-3 rounded-md p-3 text-left">
                    <div className="flex justify-between">
                      <a
                        href="https://www.github.com"
                        target="_blank"
                        className="flex w-4/5 items-center gap-2">
                        <span className="truncate font-bold">
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github
                        </span>
                        <button className="cursor-pointer">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </a>
                      <span className="flex items-center">
                        1
                        <Star className="h-4 w-4" />
                      </span>
                    </div>
                    <p>
                      Repository Description gaes Repository Description
                      gaesRepository Description gaes
                    </p>
                  </div>
                  <div className="github-card-item bg-secondary mb-3 rounded-md p-3 text-left">
                    <div className="flex justify-between">
                      <a
                        href="https://www.github.com"
                        target="_blank"
                        className="flex w-4/5 items-center gap-2">
                        <span className="truncate font-bold">
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github
                        </span>
                        <button className="cursor-pointer">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </a>
                      <span className="flex items-center">
                        1
                        <Star className="h-4 w-4" />
                      </span>
                    </div>
                    <p>
                      Repository Description gaes Repository Description
                      gaesRepository Description gaes
                    </p>
                  </div>
                  <div className="github-card-item bg-secondary mb-3 rounded-md p-3 text-left">
                    <div className="flex justify-between">
                      <a
                        href="https://www.github.com"
                        target="_blank"
                        className="flex w-4/5 items-center gap-2">
                        <span className="truncate font-bold">
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github Github Github Github Github Github Github
                          Github
                        </span>
                        <button className="cursor-pointer">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </a>
                      <span className="flex items-center">
                        1
                        <Star className="h-4 w-4" />
                      </span>
                    </div>
                    <p>
                      Repository Description gaes Repository Description
                      gaesRepository Description gaes
                    </p>
                  </div>
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div
          className={`absolute top-14 flex h-full min-h-80 w-full items-center justify-center duration-500 dark:bg-white/20 ${
            isLoading ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}>
          <LoaderCircle className="h-16 w-16 animate-spin" />
        </div>
      </div>
    </>
  )
}

export default SearchComponent
