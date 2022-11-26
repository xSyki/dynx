import { SafeAreaView } from 'react-native'

import categories from '../../../assets/words/categories.json'
import { GameStatusEnum, ICategory, useGameStore } from '../../stores/gameStore'
import StyledButton from '../Atoms/StyledButton'
import StyledText from '../Atoms/StyledText'

function Category() {
  const [, { setGameStatus, setCategory }] = useGameStore()

  const handleBack = () => {
    setGameStatus(GameStatusEnum.PLAYERS)
  }

  const handleChoseCategory = (category: ICategory) => {
    setCategory(category)
    setGameStatus(GameStatusEnum.SETTINGS)
  }

  return (
    <SafeAreaView>
      <StyledButton onPress={handleBack} title="Back" />
      <StyledText>Categories</StyledText>
      {categories.map((category) => (
        <StyledButton
          onPress={() => handleChoseCategory(category)}
          key={category.id}
          title={category.name}
        />
      ))}
    </SafeAreaView>
  )
}

export default Category
