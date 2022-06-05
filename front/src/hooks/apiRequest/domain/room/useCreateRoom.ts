import createRoom from '@/api/domain/createRoom'

export const useCreateRoom = () => {
  const handleCreateRoom = async () => {
    const data = await createRoom()
    return data
  }

  return { handleCreateRoom }
}
