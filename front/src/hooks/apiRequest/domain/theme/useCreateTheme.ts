import createTheme from '@/api/domain/theme/createTheme'

export const useCreateTheme = () => {
  const handleCreateTheme = async () => {
    const data = await createTheme()
    return data
  }

  return { createTheme: handleCreateTheme }
}
