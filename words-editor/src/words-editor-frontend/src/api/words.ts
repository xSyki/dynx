import axiosMounted from './axios'

export const getWords = (controller: AbortController) =>
  axiosMounted.get('/words', { signal: controller.signal })
