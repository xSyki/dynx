import axios from 'axios'

export const getCategories = (controller: AbortController) =>
  axios.get('/categories', { signal: controller.signal })
