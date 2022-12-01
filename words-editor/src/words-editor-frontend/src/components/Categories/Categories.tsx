import { useCategoriesStore } from '../../stores/categoriesStore'
import AddCategory from './AddCategory/AddCategory'
import Category from './Category/Category'

function Words() {
  const [{ categories }] = useCategoriesStore()

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
