import { Button, SafeAreaView, Text } from 'react-native'

import { GameStatusEnum, useGameStore } from '../../stores/gameStore'

function Game() {
  const [, { setGameStatus }] = useGameStore()

  const handleBack = () => {
    setGameStatus(GameStatusEnum.CATEGORY)
  }

  return (
    <SafeAreaView>
      <Button onPress={handleBack} title="Back" />
      <Text>Game</Text>
    </SafeAreaView>
  )
}

export default Game
