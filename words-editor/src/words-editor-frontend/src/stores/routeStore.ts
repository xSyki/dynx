import { Action, createHook, createStore } from 'react-sweet-state'

export enum RouteEnum {
  'WORDS' = 'words',
  'CATEGORIES' = 'categories',
}

type IRouteState = {
  route: RouteEnum
}

const routeInitialState: IRouteState = {
  route: RouteEnum.WORDS,
}

const routeActions = {
  setRoute:
    (route: RouteEnum): Action<IRouteState> =>
    ({ setState }) => {
      setState({ route })
    },
}

const Store = createStore({
  initialState: routeInitialState,
  actions: routeActions,
})

export const useRouteStore = createHook(Store)
