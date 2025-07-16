import { useQuery } from '@tanstack/react-query'
import { useRef, useState } from 'react'

import { fetchSearchUser } from '../api/search.api'
import { searchUserParams } from './search.params'

const useSearch = () => {
  const [keySearch, setKeySearch] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const getSearchUser = useQuery({
    queryKey: ['search_user', keySearch],
    enabled: keySearch !== '',
    queryFn: () =>
      fetchSearchUser({
        key: keySearch,
        perPage: searchUserParams.perPage,
      }),
  })

  const handleClickButton = () => {
    setKeySearch(inputRef?.current?.value || '')
  }

  return {
    getSearchUser,
    isLoading: getSearchUser.isLoading,
    keySearch,
    setKeySearch,
    inputRef,
    handleClickButton,
  }
}

export default useSearch
