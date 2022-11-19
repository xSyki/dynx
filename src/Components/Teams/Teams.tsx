import { Button, SafeAreaView, Text } from 'react-native'

import { useGameStore } from '../../stores/gameStore'

function Teams() {
  const [, { setGameMode }] = useGameStore()

  return (
    <SafeAreaView>
      <Button title="Back" onPress={() => setGameMode(undefined)} />
      <SafeAreaView>
        <Text>TEAMS</Text>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default Teams
