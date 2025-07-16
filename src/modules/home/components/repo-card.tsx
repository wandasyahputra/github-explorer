import { ExternalLink, Star } from 'lucide-react'

const RepoCard = () => {
  return (
    <div className="github-card-item bg-secondary mb-3 rounded-md p-3 text-left">
      <div className="flex justify-between">
        <a
          href="https://www.github.com"
          target="_blank"
          className="flex w-4/5 items-center gap-2">
          <span className="truncate font-bold">
            Github Github Github Github Github Github Github Github Github
            Github Github Github Github Github Github Github Github Github
            Github Github Github Github Github Github Github Github Github
            Github Github Github Github Github Github Github Github Github
          </span>
          <button className="cursor-pointer">
            <ExternalLink className="h-4 w-4" />
          </button>
        </a>
        <span className="flex items-center">
          1
          <Star className="h-4 w-4" />
        </span>
      </div>
      <p>
        Repository Description gaes Repository Description gaesRepository
        Description gaes
      </p>
    </div>
  )
}

export default RepoCard
