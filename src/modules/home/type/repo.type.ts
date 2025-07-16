export type RepoItem = {
  name: string
  description: number
  html_url: string
  stargazers_count: number
}
export type RepoResponse = [RepoItem]

export type RepoPropsType = {
  username: string
  page?: number
  perPage: number
}
