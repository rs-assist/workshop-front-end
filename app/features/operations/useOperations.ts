import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useOperations() {
  const { data, error, isLoading } = useSWR('/api/operation', fetcher)
  return {
    operations: data,
    isLoading,
    error
  }
}
