import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'

import type { UserItem } from '../type/search.type'
import RepoCard from './repo-card'

const UserAccordion = (props: UserItem) => {
  const { login, id, avatar_url } = props
  return (
    <AccordionItem
      value={id.toString()}
      className="border-b-0 px-3 py-1">
      <div className="bg-secondary w-full gap-3 rounded-lg px-4 text-lg font-bold">
        <AccordionTrigger className="w-full items-center py-2 hover:no-underline">
          <div className="flex items-center justify-start gap-2">
            <img
              src={avatar_url}
              className="h-8 w-8 rounded-full bg-white"
            />{' '}
            {login}
          </div>
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
