import { getCategories } from '../../api/categories'
import useApiCall from '../../hooks/useApiCall'
import { useCategoriesStore } from '../../stores/categoriesStore'
import AddCategory from './AddCategory/AddCategory'
import Category from './Category/Category'

function Words() {
  const [{ categories }, { setCategories }] = useCategoriesStore()

  useApiCall(getCategories, setCategories)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>image</th>
            <th>buttons</th>
          </tr>
        </thead>
        <tbody>
          <AddCategory />
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Words
