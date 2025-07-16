import { objectToParams } from '@/lib/utils'
import voyager from '@/lib/voyager'

import type { UserSearchResponse } from '../type/search.type'

type SearchUserPropsType = {
  key: string
  page?: number
  perPage: number
}

const fetchSearchUser = async ({
  key,
  page = 1,
  perPage,
}: SearchUserPropsType): Promise<UserSearchResponse> => {
  const params = objectToParams({
    q: key,
    page,
    per_page: perPage,
  })
  const path = `search/users?${params}`
  return voyager.get<UserSearchResponse>(path).then((res) => {
    return res.data
  })
}

export { fetchSearchUser }
