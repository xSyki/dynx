import { useEffect, useState } from 'react'
import { ICategory } from '../../../../../../../src/stores/gameStore'
import { useCategoriesStore } from '../../../stores/categoriesStore'
import { useWordsStore } from '../../../stores/wordsStore'

interface ICategoryProps {
  category: ICategory
  index: number
}

function Category(props: ICategoryProps) {
  const { index } = props
  const {
    id,
    name: { pl, en },
    image,
  } = props.category

  const [, { patchCategory, deleteCategory, changeCategoryId }] =
    useCategoriesStore()
  const [{ words }] = useWordsStore()

  const [isEditing, setIsEditing] = useState(false)
  const [category, setCategory] = useState(props.category)

  useEffect(() => {
    setCategory({ ...props.category })
  }, [props.category])

  const handleSubmit = () => {
    if (!category.image || !category.name.en || !category.name.pl) return

    setIsEditing(false)
    patchCategory(category)
  }

  const handleChangeId = () => {
    changeCategoryId(id)
  }

  const handleDelete = () => {
    deleteCategory(id)
  }

  const wordsNumber = words.filter((word) =>
    word.categories.includes(category.id)
  ).length

  return (
    <tr>
      {!isEditing ? (
        <>
          <td>{index + 1}</td>
          <td>{id}</td>
          <td>
            <div>pl: {pl}</div>
            <div>en: {en}</div>
          </td>
          <td>{image}</td>
          <td>{wordsNumber}</td>
          <td>
            <button onClick={handleChangeId}>Regenerate Id</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </>
      ) : (
        <>
          <td>{index + 1}</td>
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
          </td>
          <td>{wordsNumber}</td>
          <td>
            <button onClick={handleSubmit}>Submit</button>
          </td>
        </>
      )}
    </tr>
  )
}

export default Category
