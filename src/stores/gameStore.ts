import { Action, createHook, createStore } from 'react-sweet-state'

import { LanguageEnum } from '../i18n/config'

export enum GameStatusEnum {
  'GAME_MODE' = 'game_mode',
  'PLAYERS' = 'players',
  'SETTINGS' = 'settings',
  'CATEGORY' = 'category',
  'GAME' = 'game',
}

export enum GameModeEnum {
  EVE = 'EVE',
  TEAMS = 'TEAMS',
}

export interface IPlayer {
  id: string
  name: string
}

export interface ICategory {
  id: string
  name: Record<LanguageEnum, string>
  image: string
  file: string
}

export interface ISettings {
  timer: boolean
  rounds: number
}

interface IGameState {
  gameStatus: GameStatusEnum
  gameMode: GameModeEnum
  players: IPlayer[]
  category: undefined | ICategory
  settings: ISettings
}

const gameInitialState: IGameState = {
  gameStatus: GameStatusEnum.GAME_MODE,
  gameMode: GameModeEnum.EVE,
  players: [],
  category: undefined,
  settings: {
    timer: false,
    rounds: 1,
  },
}

const gameActions = {
  setGameStatus:
    (gameStatus: GameStatusEnum): Action<IGameState> =>
    ({ setState }) => {
      setState({ gameStatus })
    },
  setGameMode:
    (gameMode: GameModeEnum | undefined): Action<IGameState> =>
    ({ setState, getState }) => {
      if (getState().gameMode !== gameMode) {
        setState({ players: [] })
      }

      setState({
        gameMode,
      })
    },
  setPlayers:
    (players: IPlayer[]): Action<IGameState> =>
    ({ setState }) => {
      setState({ players })
    },
  setCategory:
    (category: ICategory): Action<IGameState> =>
    ({ setState }) => {
      setState({ category })
    },
  setSettings:
    (settings: ISettings): Action<IGameState> =>
    ({ setState }) => {
      setState({ settings })
    },
}

const Store = createStore({
  initialState: gameInitialState,
  actions: gameActions,
})

export const useGameStore = createHook(Store)
