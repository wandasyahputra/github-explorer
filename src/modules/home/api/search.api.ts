import { objectToParams } from '@/lib/utils'
import voyager from '@/lib/voyager'

import type { RepoPropsType, RepoResponse } from '../type/repo.type'
import type {
  SearchUserPropsType,
  UserSearchResponse,
} from '../type/search.type'

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

const fetchRepo = async ({
  username,
  page = 1,
  perPage,
}: RepoPropsType): Promise<RepoResponse> => {
  const params = objectToParams({
    page,
    per_page: perPage,
  })
  const path = `users/${username}/repos?${params}`
  return voyager.get<RepoResponse>(path).then((res) => {
    return res.data
  })
}

export { fetchSearchUser, fetchRepo }
