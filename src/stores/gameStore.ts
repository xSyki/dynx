import { Action, createHook, createStore } from 'react-sweet-state'

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

interface IGameState {
  gameStatus: GameStatusEnum
  gameMode: undefined | GameModeEnum
  players: undefined | IPlayer[]
}

const gameInitialState: IGameState = {
  gameStatus: GameStatusEnum.GAME_MODE,
  gameMode: undefined,
  players: undefined,
}

const gameActions = {
  setGameStatus:
    (gameStatus: GameStatusEnum): Action<IGameState> =>
    ({ setState }) => {
      setState({ gameStatus })
    },
  setGameMode:
    (gameMode: GameModeEnum | undefined): Action<IGameState> =>
    ({ setState }) => {
      setState({ gameMode })
    },
  setPlayers:
    (players: IPlayer[]): Action<IGameState> =>
    ({ setState }) => {
      setState({ players })
    },
}

const Store = createStore({
  initialState: gameInitialState,
  actions: gameActions,
})

export const useGameStore = createHook(Store)
