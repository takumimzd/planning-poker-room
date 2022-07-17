import getRoom from '@/api/domain/room/getRoom'
import useFetch from '../common/useFetch'
import { IdType } from '@/types/index'
import { GetRoomResponseType } from '@/types/api/room'
import { getRoomMapper } from 'src/mapper/room/getRoomMapper'

interface UseGetRoomParamsType {
  roomId: IdType
}

const useGetRoom = ({ roomId }: UseGetRoomParamsType) => {
  const fetcher = () => getRoom({ roomId })
  const { data: resData, error } = useFetch<GetRoomResponseType>({
    key: `/rooms/${roomId}`,
    fetcher,
  })

  const { data } = getRoomMapper(resData)
  return {
    isError: !!error,
    data,
  }
}
export default useGetRoom
