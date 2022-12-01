import { IWord } from '../../../../../src/stores/roundStore'
import { INewWord } from '../stores/wordsStore'
import axiosMounted from './axios'

export const getWords = (controller: AbortController) =>
  axiosMounted.get('/words', { signal: controller.signal })

export const postWord = (word: INewWord) =>
  axiosMounted.post<string>('/words', word)

export const patchWord = (word: IWord) => axiosMounted.patch('/words', word)

export const deleteWord = (id: string) => axiosMounted.delete(`/words/${id}`)
