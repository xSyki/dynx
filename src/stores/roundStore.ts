import { Action, createHook, createStore } from 'react-sweet-state'

import { IPlayer } from './gameStore'

export enum GameStageEnum {
  'START' = 'start',
  'PLAYERS' = 'players',
  'WORD' = 'word',
  'TIMER' = 'timer',
  'RESULT' = 'RESULT',
  'END' = 'end',
}

export interface IRound {
  players: [IPlayer] | [IPlayer, IPlayer]
  word: IWord
  result: number
}

export interface IWord {
  word: string
  id: string
  categories: string[]
}

interface IGameState {
  gameStage: GameStageEnum
  rounds: IRound[]
  roundNumber: number
}

const gameInitialState: IGameState = {
  gameStage: GameStageEnum.START,
  rounds: [],
  roundNumber: 0,
}

const gameActions = {
  setRounds:
    (rounds: IRound[]): Action<IGameState> =>
    ({ setState }) => {
      setState({ rounds })
    },
  increaseRoundNumber:
    (): Action<IGameState> =>
    ({ setState, getState }) => {
      setState({ roundNumber: getState().roundNumber + 1 })
    },
  setGameStage:
    (gameStage: GameStageEnum): Action<IGameState> =>
    ({ setState }) => {
      setState({ gameStage })
    },
  changeRoundResult:
    (): Action<IGameState> =>
    ({ setState, getState }) => {
      const rounds = JSON.parse(JSON.stringify(getState().rounds)) as IRound[]

      rounds[getState().roundNumber].result = 1

      setState({ rounds })
    },
}

const Store = createStore({
  initialState: gameInitialState,
  actions: gameActions,
})

export const useRoundStore = createHook(Store)
