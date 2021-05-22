import axios from 'axios'
import { useState } from 'react'
import { usePopover } from './usePopover'

interface UseRequest {
  url: string
  body?: any,
  method?: string,
  err?: string
}

export const useRequest = () => {
  const { showPopover } = usePopover()
  const [isLoading, setIsLoading] = useState(false)

  const doRequest = async ({ 
    url, 
    body, 
    method, 
    err='Во время запроса произошла ошибка, попробуйте позднее' 
  }: UseRequest) => {
    setIsLoading(true)
    const chooseMethod = method || (body ? 'post' : 'get')
    
    try {
      const { data } = await axios[chooseMethod](url, body)
      if (data.errors) {
        return data.errors.map(err => showPopover(err))
      }
      return data

    } catch (e) {
      showPopover({ message: err })
    } finally {
      setIsLoading(false)
    }

  }

  return { doRequest, isLoading }

}
