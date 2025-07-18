import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useActivityLog() {
  const { data, error, isLoading } = useSWR('/api/activity-log', fetcher)
  return {
    activityLog: data,
    isLoading,
    error
  }
}
