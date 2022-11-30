import { ICategory } from '../../../../../src/stores/gameStore'
import { IEditingCategory } from '../stores/categoriesStore'
import axiosMounted from './axios'

export const getCategories = (controller: AbortController) =>
  axiosMounted.get('/categories', { signal: controller.signal })

export const patchCategory = (category: ICategory) =>
  axiosMounted.patch<string>('/categories', category)

export const postCategory = (category: IEditingCategory) =>
  axiosMounted.post('/categories', category)

export const deleteCategory = (id: string) =>
  axiosMounted.delete(`/categories/${id}`)
