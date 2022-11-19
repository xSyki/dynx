import { Button, SafeAreaView, Text } from 'react-native'

import { GameStatusEnum, useGameStore } from '../../stores/gameStore'

function Settings() {
  const [, { setGameStatus }] = useGameStore()

  const handleBack = () => {
    setGameStatus(GameStatusEnum.CATEGORY)
  }

  const handleSubmit = () => {
    setGameStatus(GameStatusEnum.GAME)
  }

  return (
    <SafeAreaView>
      <Button onPress={handleBack} title="Back" />
      <Text>Settings</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  )
}

export default Settings
