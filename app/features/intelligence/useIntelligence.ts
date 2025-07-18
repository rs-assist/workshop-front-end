import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useIntelligence() {
  const { data, error, isLoading } = useSWR('/api/intelligence', fetcher)
  return {
    intelligence: data,
    isLoading,
    error
  }
}
