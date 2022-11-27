import { SafeAreaView } from 'react-native'

import categories from '../../../../assets/words/categories.json'
import i18n, { LanguageEnum } from '../../../i18n/config'
import {
  GameStatusEnum,
  ICategory,
  useGameStore,
} from '../../../stores/gameStore'
import StyledButton from '../../Atoms/StyledButton'
import StyledText from '../../Atoms/StyledText'

function Category() {
  const [, { setGameStatus, setCategory }] = useGameStore()

  const handleChoseCategory = (category: ICategory) => {
    setCategory(category)
    setGameStatus(GameStatusEnum.SETTINGS)
  }

  return (
    <SafeAreaView>
      <StyledText size="bg">Categories</StyledText>
      {(categories as ICategory[]).map((category) => (
        <StyledButton
          onPress={() => handleChoseCategory(category)}
          key={category.id}
          title={category.name[i18n.language as LanguageEnum]}
        />
      ))}
    </SafeAreaView>
  )
}

export default Category
