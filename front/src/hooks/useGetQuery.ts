import { useRouter } from 'next/router'

export const useGetQuery = (params: string) => {
  const router = useRouter()
  const query = router.query[params]
  if (!query) return null
  return query
}
