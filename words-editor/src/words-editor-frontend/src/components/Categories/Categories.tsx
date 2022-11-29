import { getCategories } from '../../api/categories'
import useApiCall from '../../hooks/useApiCall'
import { useCategoriesStore } from '../../stores/categoriesStore'

function Words() {
  const [{ categories }, { setCategories }] = useCategoriesStore()

  useApiCall(getCategories, setCategories)

  return <div>{JSON.stringify(categories)}</div>
}

export default Words
