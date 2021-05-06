import axios from 'axios'
import { usePopover } from './usePopover'

interface UseRequest {
  url: string
  method?: 'get' | 'post',
  body?: any,
}

type ErrorsType = null | Array<{ message: string }>

export const useRequest = () => {
  const { showPopover } = usePopover()

  const doRequest = async ({ url, method = 'get', body = {} }: UseRequest) => {
    try {
      const { data } = await axios[method](url, body)
      return data

    } catch (e) {
      showPopover(e.response.data.errors)
    }
  }

  return { doRequest }

}
