import { Action, createHook, createStore } from 'react-sweet-state'
import { ICategory } from '../../../../../src/stores/gameStore'

type ICategoriesState = {
  categories: ICategory[]
}

const categoriesInitialState: ICategoriesState = {
  categories: [],
}

const categoriesActions = {
  setCategories:
    (categories: ICategory[]): Action<ICategoriesState> =>
    ({ setState }) => {
      setState({ categories })
    },
}

const Store = createStore({
  initialState: categoriesInitialState,
  actions: categoriesActions,
})

export const useCategoriesStore = createHook(Store)
