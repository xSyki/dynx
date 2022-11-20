import { Button, SafeAreaView, Text } from 'react-native'

import { GameStatusEnum, useGameStore } from '../../stores/gameStore'
import { useRoundStore } from '../../stores/roundStore'

function Game() {
  const [, { setGameStatus }] = useGameStore()
  const [{ rounds }] = useRoundStore()

  const handleBack = () => {
    setGameStatus(GameStatusEnum.CATEGORY)
  }

  return (
    <SafeAreaView>
      <Button onPress={handleBack} title="Back" />
      <Text>Game</Text>
      <Text>
        <Text>{JSON.stringify(rounds)}</Text>
      </Text>
    </SafeAreaView>
  )
}

export default Game
