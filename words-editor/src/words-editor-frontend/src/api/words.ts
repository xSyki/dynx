import axios from 'axios'

export const getWords = (controller: AbortController) =>
  axios.get('/words', { signal: controller.signal })
