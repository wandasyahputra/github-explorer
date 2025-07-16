import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'

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

  const keyListener = () => {
    document.getElementById('search-input')?.focus()
  }
  useEffect(() => {
    document.addEventListener('keydown', keyListener)
    return () => {
      document.removeEventListener('keydown', keyListener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    getSearchUser,
    isLoading: getSearchUser.isLoading,
    isPaused: getSearchUser.isPaused,
    isError: getSearchUser.isError,
    refetch: getSearchUser.refetch,
    keySearch,
    setKeySearch,
    inputRef,
    handleClickButton,
  }
}

export default useSearch
