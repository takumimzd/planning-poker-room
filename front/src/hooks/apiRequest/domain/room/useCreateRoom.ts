import createRoom from '@/api/domain/room/createRoom'

export const useCreateRoom = () => {
  const handleCreateRoom = async () => {
    const data = await createRoom()
    return data
  }

  return { createRoom: handleCreateRoom }
}
