import { Action, createHook, createStore } from 'react-sweet-state'

export enum RouterEnum {
  'SPLASH_SCREEN' = 'splash_screen',
  'GAME' = 'game',
  'RULES' = 'rules',
}

interface IRouterState {
  route: RouterEnum
}

const routerInitialState: IRouterState = {
  route: RouterEnum.SPLASH_SCREEN,
}

const routerActions = {
  navigate:
    (route: RouterEnum): Action<IRouterState> =>
    ({ setState }) => {
      setState({ route })
    },
}

const Store = createStore({
  initialState: routerInitialState,
  actions: routerActions,
})

export const useRouterStore = createHook(Store)
