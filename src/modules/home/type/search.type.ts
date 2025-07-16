export type UserItem = {
  login: string
  id: number
  avatar_url: string
}
export type UserSearchResponse = {
  total_count: number
  incomplete_results: boolean
  items: Array<UserItem>
}

export type SearchUserPropsType = {
  key: string
  page?: number
  perPage: number
}
