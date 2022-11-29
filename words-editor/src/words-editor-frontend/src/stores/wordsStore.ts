import { Action, createHook, createStore } from 'react-sweet-state'

import { IWord } from '../../../../../src/stores/roundStore'

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
}

const Store = createStore({
  initialState: wordsInitialState,
  actions: wordsActions,
})

export const useWordsStore = createHook(Store)
