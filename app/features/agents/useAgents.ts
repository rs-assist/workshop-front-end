import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useAgents() {
  const { data, error, isLoading } = useSWR('/api/agent', fetcher)
  return {
    agents: data,
    isLoading,
    error
  }
}
