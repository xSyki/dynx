import { Action, createHook, createStore } from 'react-sweet-state'

import { IPlayer } from './gameStore'

export interface IRound {
  players: [IPlayer] | [IPlayer, IPlayer]
  word: IWord
}

export interface IWord {
  word: string
  id: string
  categories: string[]
}

interface IGameState {
  rounds: IRound[]
  round: number
}

const gameInitialState: IGameState = {
  rounds: [],
  round: 0,
}

const gameActions = {
  setRounds:
    (rounds: IRound[]): Action<IGameState> =>
    ({ setState }) => {
      setState({ rounds })
    },
}

const Store = createStore({
  initialState: gameInitialState,
  actions: gameActions,
})

export const useRoundStore = createHook(Store)
