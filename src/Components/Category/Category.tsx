import { Button, SafeAreaView, Text } from 'react-native'

import categories from '../../../assets/words/categories.json'
import { GameStatusEnum, ICategory, useGameStore } from '../../stores/gameStore'

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
      <Button onPress={handleBack} title="Back" />
      <Text>Categories</Text>
      {categories.map((category) => (
        <Button
          onPress={() => handleChoseCategory(category)}
          key={category.id}
          title={category.name}
        />
      ))}
    </SafeAreaView>
  )
}

export default Category
