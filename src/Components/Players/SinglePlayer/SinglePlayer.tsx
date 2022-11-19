import { Button, SafeAreaView, Text } from 'react-native'

import { GameStatusEnum, useGameStore } from '../../../stores/gameStore'

function SinglePlayer() {
  const [, { setGameStatus }] = useGameStore()

  const handleSubmit = () => {
    setGameStatus(GameStatusEnum.CATEGORY)
  }

  return (
    <SafeAreaView>
      <Text>SinglePlayer</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  )
}

export default SinglePlayer
