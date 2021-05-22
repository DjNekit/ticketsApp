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
      console.log(data)
      if (data.errors) {
        return data.errors.map(err => showPopover(err))
      }
      return data

    } catch (e) {
      showPopover(e)
    }
  }

  return { doRequest }

}
