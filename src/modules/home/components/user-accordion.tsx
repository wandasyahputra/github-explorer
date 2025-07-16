import { useEffect, useRef } from 'react'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'

import useRepo from '../features/repo.hook'
import type { UserItem } from '../type/search.type'
import RepoCard from './repo-card'

const UserAccordion = (props: UserItem & { isActive: boolean }) => {
  const { login, avatar_url, isActive } = props
  const hook = useRepo(props)
  const { getRepoByUser } = hook

  useEffect(() => {
    const parent = document.getElementById(`${login}-scroll-area`)
    if (parent) {
      const viewport = parent.querySelector(
        '[data-slot="scroll-area-viewport"]'
      )
      const onScroll = () => {
        if (viewport) {
          const scrollPosition = viewport.scrollTop
          const scrollHeight = viewport.scrollHeight
          const clientHeight = viewport.clientHeight
          const isScrollable = scrollHeight > clientHeight
          const isAtBottom = scrollHeight - scrollPosition <= clientHeight + 1

          if (isScrollable && isAtBottom && !getRepoByUser.isFetching) {
            getRepoByUser.fetchNextPage()
          }
        }
      }
      viewport?.addEventListener('scroll', onScroll)
      return () => {
        viewport?.removeEventListener('scroll', onScroll)
      }
    }
  }, [isActive, getRepoByUser])
  return (
    <AccordionItem
      value={login}
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
        <ScrollArea
          className="relative h-[50vh] [&_.github-card-item]:w-[calc(100vw-120px)] [&_.github-card-item]:max-w-[544px]"
          id={`${login}-scroll-area`}>
          {getRepoByUser?.data?.pages?.flatMap((x) =>
            x?.map((y) => (
              <RepoCard
                key={y.html_url}
                {...y}
              />
            ))
          )}
          {getRepoByUser?.isFetching
            ? Array.from({ length: 3 }).map((_, index) => (
                <Skeleton
                  className="mb-2 h-20 w-full"
                  key={index}
                />
              ))
            : null}
        </ScrollArea>
      </AccordionContent>
    </AccordionItem>
  )
}

export default UserAccordion
