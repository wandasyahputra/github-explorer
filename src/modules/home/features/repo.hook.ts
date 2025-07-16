import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { fetchRepo } from '../api/search.api'
import type { UserItem } from '../type/search.type'
import { repoParams } from './search.params'

const useRepo = (props: UserItem & { isActive: boolean }) => {
  const { login, isActive } = props

  const getRepoByUser = useInfiniteQuery({
    queryKey: ['repo_user', login],
    enabled: isActive,
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      fetchRepo({
        username: login,
        page: pageParam,
        perPage: repoParams.perPage,
      }),
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.length < repoParams.perPage) {
        return undefined
      }
      return lastPageParam + 1
    },
  })

  return {
    getRepoByUser,
    isLoading: getRepoByUser.isLoading,
  }
}

export default useRepo
