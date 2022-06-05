import { Axios } from '@/api/base/axios'

export const Post = async <T>(url: string, data?: any) => {
  try {
    const response = await Axios.post<T>(url, data)
    return { data: response.data }
  } catch (error) {
    throw error
  }
}
