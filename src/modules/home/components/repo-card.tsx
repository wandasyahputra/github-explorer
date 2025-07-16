import { ExternalLink, Star } from 'lucide-react'

import type { RepoItem } from '../type/repo.type'

const RepoCard = (props: RepoItem) => {
  const { html_url, name, description, stargazers_count } = props
  return (
    <div className="github-card-item bg-secondary mb-3 rounded-md p-3 text-left">
      <div className="flex justify-between">
        <a
          href={html_url}
          target="_blank"
          className="flex w-4/5 items-center gap-2">
          <span className="truncate font-bold">{name}</span>
          <button className="cursor-pointer">
            <ExternalLink className="h-4 w-4" />
          </button>
        </a>
        <span className="flex items-center gap-1">
          {stargazers_count}
          <Star className="h-4 w-4" />
        </span>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default RepoCard
