import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'

import RepoCard from './repo-card'

const UserAccordion = () => {
  return (
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
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
        </ScrollArea>
      </AccordionContent>
    </AccordionItem>
  )
}

export default UserAccordion
