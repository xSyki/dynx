import { Action, createHook, createStore } from 'react-sweet-state'

export enum GameStatusEnum {
  'GAME_MODE' = 'game_mode',
  'PLAYERS' = 'players',
}

export enum GameModeEnum {
  EVE = 'EVE',
  TEAMS = 'TEAMS',
}

interface IGameState {
  gameStatus: GameStatusEnum
  gameMode: undefined | GameModeEnum
}

const gameInitialState: IGameState = {
  gameStatus: GameStatusEnum.GAME_MODE,
  gameMode: undefined,
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
}

const Store = createStore({
  initialState: gameInitialState,
  actions: gameActions,
})

export const useGameStore = createHook(Store)
