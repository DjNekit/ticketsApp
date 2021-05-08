import axios from 'axios'

export const buildClient = ({ req }) => {
  // Если getInitialProps выполняется на сервере
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://tickets.dev',
      headers: req.headers
    })
  }

  // Если getInitialProps выполняется на клиенте
  return axios.create({
    baseURL: '/'
  })
} 