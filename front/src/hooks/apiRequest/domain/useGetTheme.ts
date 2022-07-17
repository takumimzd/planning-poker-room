import useFetch from '../common/useFetch'
import { IdType } from '@/types/index'
import getTheme from '@/api/domain/theme/getTheme'

interface UseGetThemeParamsType {
  roomId: IdType
  themeId: IdType
}

const useGetTheme = ({ roomId, themeId }: UseGetThemeParamsType) => {
  const fetcher = () => getTheme({ themeId, roomId })
  const { data, error } = useFetch({
    key: `/themes/${themeId}`,
    fetcher,
  })

  return {
    isError: !!error,
    data,
  }
}
export default useGetTheme
