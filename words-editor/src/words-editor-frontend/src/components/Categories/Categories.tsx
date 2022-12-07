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
            <th>index</th>
            <th>id</th>
            <th>name</th>
            <th>image</th>
            <th>words</th>
            <th>buttons</th>
          </tr>
        </thead>
        <tbody>
          <AddCategory />
          {categories.map((category, index) => (
            <Category key={category.id} category={category} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Words
