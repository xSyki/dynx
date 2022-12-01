import { useState } from 'react'
import { useCategoriesStore } from '../../../stores/categoriesStore'

const initialCategory = {
  name: { en: '', pl: '' },
  image: '',
}

function AddCategory() {
  const [, { postCategory }] = useCategoriesStore()
  const [category, setCategory] = useState(initialCategory)

  const handleSubmit = () => {
    if (!category.image || !category.name.en || !category.name.pl) return

    postCategory(category)

    setCategory(initialCategory)
  }

  const {
    image,
    name: { en, pl },
  } = category

  return (
    <tr>
      <td></td>
      <td>
        <div>
          pl:{' '}
          <input
            type="text"
            onChange={(e) =>
              setCategory({
                ...category,
                name: { ...category.name, pl: e.target.value },
              })
            }
            value={category.name.pl}
          />
          {pl}
        </div>
        <div>
          en:{' '}
          <input
            type="text"
            onChange={(e) =>
              setCategory({
                ...category,
                name: { ...category.name, en: e.target.value },
              })
            }
            value={category.name.en}
          />
          {en}
        </div>
      </td>
      <td>
        <input
          type="text"
          onChange={(e) => setCategory({ ...category, image: e.target.value })}
          value={category.image}
        />
      </td>
      <td>
        <button onClick={handleSubmit}>Submit</button>
      </td>
    </tr>
  )
}

export default AddCategory
