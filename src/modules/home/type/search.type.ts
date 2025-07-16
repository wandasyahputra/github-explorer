export interface UserSearchResponse {
  total_count: number
  incomplete_results: boolean
  items: Array<{ login: string; id: number /* ...other fields */ }>
}
