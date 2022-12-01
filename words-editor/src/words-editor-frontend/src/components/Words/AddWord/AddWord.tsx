import { useState } from 'react'
import { IWord } from '../../../../../../../src/stores/roundStore'
import { useCategoriesStore } from '../../../stores/categoriesStore'
import { INewWord, useWordsStore } from '../../../stores/wordsStore'
import { MultiSelect, Option } from 'react-multi-select-component'
import { ICategory } from '../../../../../../../src/stores/gameStore'

const initialWord: INewWord = {
  word: {
    en: '',
    pl: '',
  },
  categories: [],
}

function AddWord() {
  const [{ categories }] = useCategoriesStore()
  const [, { postWord }] = useWordsStore()
  const [word, setWord] = useState(initialWord)

  const [selectedCategories, setSelectedCategories] = useState<Option[]>([])

  const categoriesToOptions = (categories: ICategory[]): Option[] => {
    return categories.map((category) => {
      return {
        label: category.name.en,
        value: category.id,
      }
    })
  }

  const handleCategoryChange = (value: Option[]) => {
    setSelectedCategories(value)
    setWord({ ...word, categories: optionsToCategories(value) })
  }

  const optionsToCategories = (options: Option[]) => {
    return options.map((option) => option.value)
  }

  const handleSubmit = () => {
    if (!word.categories.length || !word.word.en || !word.word.pl) return
    
    postWord(word)

    setWord(initialWord)
  }

  const {
    word: { en, pl },
  } = word

  return (
    <tr>
      <td></td>
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
    </tr>
  )
}

export default AddWord
