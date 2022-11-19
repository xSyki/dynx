import { Button, SafeAreaView, Text } from 'react-native'

import { GameStatusEnum, useGameStore } from '../../stores/gameStore'

function Category() {
  const [, { setGameStatus }] = useGameStore()

  const handleBack = () => {
    setGameStatus(GameStatusEnum.PLAYERS)
  }

  const handleSubmit = () => {
    setGameStatus(GameStatusEnum.SETTINGS)
  }

  return (
    <SafeAreaView>
      <Button onPress={handleBack} title="Back" />
      <Text>Categories</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  )
}

export default Category
