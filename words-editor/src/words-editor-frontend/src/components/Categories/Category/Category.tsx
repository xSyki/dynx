import { useEffect, useState } from 'react'
import { ICategory } from '../../../../../../../src/stores/gameStore'
import { useCategoriesStore } from '../../../stores/categoriesStore'

interface ICategoryProps {
  category: ICategory
}

function Category(props: ICategoryProps) {
  const {
    id,
    name: { pl, en },
    image,
  } = props.category

  const [, { patchCategory }] = useCategoriesStore()

  const [isEditing, setIsEditing] = useState(false)
  const [category, setCategory] = useState(props.category)

  useEffect(() => {
    setCategory({ ...props.category })
  }, [props.category])

  const handleSubmit = () => {
    setIsEditing(false)
    patchCategory(category)
  }

  return (
    <tr>
      {!isEditing ? (
        <>
          <td>{id}</td>
          <td>
            <div>pl: {pl}</div>
            <div>en: {en}</div>
          </td>
          <td>{image}</td>
          <td>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </td>
        </>
      ) : (
        <>
          <td>{id}</td>
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
              onChange={(e) =>
                setCategory({ ...category, image: e.target.value })
              }
              value={category.image}
            />
            {image}
          </td>
          <td>
            <button onClick={handleSubmit}>Submit</button>
          </td>
        </>
      )}
    </tr>
  )
}

export default Category
