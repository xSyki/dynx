import { Button, SafeAreaView, Text } from 'react-native'

import { GameStatusEnum, useGameStore } from '../../../stores/gameStore'

function Teams() {
  const [, { setGameStatus }] = useGameStore()

  const handleSubmit = () => {
    setGameStatus(GameStatusEnum.CATEGORY)
  }

  return (
    <SafeAreaView>
      <Text>Teams</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  )
}

export default Teams
