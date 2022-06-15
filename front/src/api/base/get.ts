import { Axios } from '@/api/base/axios'

const Get = async <T>(url: string) => {
  try {
    const response: T = await Axios.get(url).then((res) => res.data)
    return response
  } catch (error) {
    throw error
  }
}

export default Get
