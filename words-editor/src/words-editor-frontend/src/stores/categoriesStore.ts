import { Action, createHook, createStore } from 'react-sweet-state'
import { ICategory } from '../../../../../src/stores/gameStore'
import { deleteCategory, patchCategory, postCategory } from '../api/categories'

export interface IEditingCategory {
  name: { pl: string; en: string }
  image: string
}

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
  postCategory:
    (category: IEditingCategory): Action<ICategoriesState> =>
    async ({ setState, getState }) => {
      const categoryId = await postCategory(category).then((res) => res.data)

      const categories = structuredClone(getState().categories)

      setState({ categories: [{ id: categoryId, ...category }, ...categories] })
    },
  patchCategory:
    (category: ICategory): Action<ICategoriesState> =>
    ({ setState, getState }) => {
      patchCategory(category)

      const categories = structuredClone(getState().categories)

      const categoryToEditIndex = categories.findIndex(
        (oldCategory) => oldCategory.id === category.id
      )

      if (categoryToEditIndex === -1) return

      categories[categoryToEditIndex] = category

      setState({ categories })
    },
  deleteCategory:
    (categoryId: string): Action<ICategoriesState> =>
    ({ setState, getState }) => {
      deleteCategory(categoryId)

      const categories = structuredClone(getState().categories)

      setState({
        categories: categories.filter((category) => category.id !== categoryId),
      })
    },
}

const Store = createStore({
  initialState: categoriesInitialState,
  actions: categoriesActions,
})

export const useCategoriesStore = createHook(Store)
