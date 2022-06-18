import { Axios } from '@/api/base/axios'

export const Patch = async <T>(url: string, data?: any) => {
  try {
    const response = await Axios.patch<T>(url, data)
    return { data: response.data }
  } catch (error) {
    throw error
  }
}
