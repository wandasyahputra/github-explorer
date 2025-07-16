export interface UserItem {
  login: string
  id: number
  avatar_url: string
}
export interface UserSearchResponse {
  total_count: number
  incomplete_results: boolean
  items: Array<UserItem>
}
