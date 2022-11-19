import { Action, createHook, createStore } from 'react-sweet-state'

export enum EnumGameMode {
  EVE = 'EVE',
  TEAMS = 'TEAMS',
}

interface IGameState {
  gameMode: undefined | EnumGameMode
}

const gameInitialState: IGameState = {
  gameMode: undefined,
}

const gameActions = {
  setGameMode:
    (gameMode: EnumGameMode | undefined): Action<IGameState> =>
    ({ setState }) => {
      setState({ gameMode })
    },
}

const Store = createStore({
  initialState: gameInitialState,
  actions: gameActions,
})

export const useGameStore = createHook(Store)
