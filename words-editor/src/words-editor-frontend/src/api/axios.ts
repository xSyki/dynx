import axios from 'axios'

const axiosMounted = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001/',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

export default axiosMounted
