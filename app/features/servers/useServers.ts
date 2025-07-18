import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useServers() {
  const { data, error, isLoading } = useSWR('/api/server', fetcher)
  return {
    servers: data,
    isLoading,
    error
  }
}
