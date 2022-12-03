import { useEffect, useState } from 'react'
import { IWord } from '../../../../../../../src/stores/roundStore'
import { useCategoriesStore } from '../../../stores/categoriesStore'
import { useWordsStore } from '../../../stores/wordsStore'
import { MultiSelect, Option } from 'react-multi-select-component'
import { ICategory } from '../../../../../../../src/stores/gameStore'

interface IWordProps {
  word: IWord
}

const categoriesToOptions = (categories: ICategory[]): Option[] => {
  return categories.map((category) => {
    return {
      label: category.name.en,
      value: category.id,
    }
  })
}

const idsToOptions = (
  categories: ICategory[],
  categoriesId: string[]
): Option[] => {
  return categoriesToOptions(
    categories.filter((category) => categoriesId.includes(category.id))
  )
}

function Word(props: IWordProps) {
  const {
    id,
    word: { pl, en },
  } = props.word

  const [{ categories }] = useCategoriesStore()
  const [, { patchWord, deleteWord, changeWordId }] = useWordsStore()

  const [isEditing, setIsEditing] = useState(false)
  const [word, setWord] = useState(props.word)
  const [selectedCategories, setSelectedCategories] = useState<Option[]>(
    idsToOptions(categories, props.word.categories)
  )

  useEffect(() => {
    setWord({ ...props.word })
  }, [props.word])

  const handleCategoryChange = (value: Option[]) => {
    setSelectedCategories(value)
    setWord({ ...word, categories: optionsToCategories(value) })
  }

  const optionsToCategories = (options: Option[]) => {
    return options.map((option) => option.value)
  }

  const handleGenerateId = () => {
    changeWordId(id)
  }

  const handleSubmit = () => {
    if (!word.categories.length || !word.word.en || !word.word.pl) return

    setIsEditing(false)
    patchWord(word)
  }

  const handleDelete = () => {
    deleteWord(id)
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
          <td>
            {categories
              .filter((category) => word.categories.includes(category.id))
              .map((category) => category.name.en)
              .join(', ')}
          </td>
          <td>
            <button onClick={handleGenerateId}>Generate new id</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
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
                  setWord({
                    ...word,
                    word: { ...word.word, pl: e.target.value },
                  })
                }
                value={word.word.pl}
              />
            </div>
            <div>
              en:{' '}
              <input
                type="text"
                onChange={(e) =>
                  setWord({
                    ...word,
                    word: { ...word.word, en: e.target.value },
                  })
                }
                value={word.word.en}
              />
            </div>
          </td>
          <td>
            <MultiSelect
              options={categoriesToOptions(categories)}
              value={selectedCategories}
              onChange={handleCategoryChange}
              labelledBy="Select"
            />
          </td>
          <td>
            <button onClick={handleSubmit}>Submit</button>
          </td>
        </>
      )}
    </tr>
  )
}

export default Word
