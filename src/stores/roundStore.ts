import { Action, createHook, createStore } from 'react-sweet-state'

import { IPlayer } from './gameStore'

export enum GameStageEnum {
  'START' = 'start',
  'PLAYERS' = 'players',
  'WORD' = 'word',
  'TIMER' = 'timer',
  'RESULT' = 'RESULT',
}

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
  gameStage: GameStageEnum
  rounds: IRound[]
  round: number
}

const gameInitialState: IGameState = {
  gameStage: GameStageEnum.START,
  rounds: [],
  round: 0,
}

const gameActions = {
  setRounds:
    (rounds: IRound[]): Action<IGameState> =>
    ({ setState }) => {
      setState({ rounds })
    },
  setGameStage:
    (gameStage: GameStageEnum): Action<IGameState> =>
    ({ setState }) => {
      setState({ gameStage })
    },
}

const Store = createStore({
  initialState: gameInitialState,
  actions: gameActions,
})

export const useRoundStore = createHook(Store)
