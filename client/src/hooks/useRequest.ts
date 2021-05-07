import axios from 'axios'
import { usePopover } from './usePopover'

interface UseRequest {
  url: string
  body?: any,
  method?: string
}

export const useRequest = () => {
  const { showPopover } = usePopover()

  const doRequest = async ({ url, body, method }: UseRequest) => {
    const chooseMethod = method || (body ? 'post' : 'get')
    
    try {
      const { data } = await axios[chooseMethod](url, body)
      return data

    } catch (e) {
      e.response.data.errors.map(err => showPopover(err))
    }
  }

  return { doRequest }

}
