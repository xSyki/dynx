import { Action, createHook, createStore } from 'react-sweet-state'

import { IWord } from '../../../../../src/stores/roundStore'
import { deleteWord, patchWord, patchWordId, postWord } from '../api/words'

export interface INewWord {
  categories: string[]
  word: {
    en: string
    pl: string
  }
}

type IWordsState = {
  words: IWord[]
}

const wordsInitialState: IWordsState = {
  words: [],
}

const wordsActions = {
  setWords:
    (words: IWord[]): Action<IWordsState> =>
    ({ setState }) => {
      setState({ words })
    },
  postWord:
    (word: INewWord): Action<IWordsState> =>
    async ({ setState, getState }) => {
      const newWordId = await postWord(word).then((res) => res.data)

      setState({ words: [{ id: newWordId, ...word }, ...getState().words] })
    },
  patchWord:
    (word: IWord): Action<IWordsState> =>
    ({ setState, getState }) => {
      patchWord(word)

      const words = structuredClone(getState().words)

      const wordToEditIndex = words.findIndex(
        (oldWord) => oldWord.id === word.id
      )

      if (wordToEditIndex === -1) return

      words[wordToEditIndex] = word

      setState({ words })
    },
  deleteWord:
    (wordId: string): Action<IWordsState> =>
    ({ setState, getState }) => {
      deleteWord(wordId)

      const categories = structuredClone(getState().words)

      setState({
        words: categories.filter((word) => word.id !== wordId),
      })
    },
  changeWordId:
    (wordId: string): Action<IWordsState> =>
    async ({ setState, getState }) => {
      const newWordId = await patchWordId(wordId).then((res) => res.data)

      const words = structuredClone(getState().words)

      const wordIndex = words.findIndex((word) => word.id === wordId)

      if (wordIndex === -1) return

      words[wordIndex].id = newWordId

      setState({ words })
    },
}

const Store = createStore({
  initialState: wordsInitialState,
  actions: wordsActions,
})

export const useWordsStore = createHook(Store)
