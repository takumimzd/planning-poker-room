import { Post } from '@/api/base/post'

interface CreateThemeResponseType {
  status: number
}

const createTheme = async () => {
  const { data } = await Post<CreateThemeResponseType>('themes')
  return data
}

export default createTheme
