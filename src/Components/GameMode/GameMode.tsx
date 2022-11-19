import { Button, SafeAreaView, StyleSheet } from 'react-native'

import {
  GameModeEnum,
  GameStatusEnum,
  useGameStore,
} from '../../stores/gameStore'

export default function GameMode() {
  const [, { setGameMode, setGameStatus }] = useGameStore()

  const handleSetGameMode = (gameMode: GameModeEnum) => {
    setGameMode(gameMode)
    setGameStatus(GameStatusEnum.PLAYERS)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => handleSetGameMode(GameModeEnum.EVE)}
        title="1vs1"
      />
      <Button
        onPress={() => handleSetGameMode(GameModeEnum.TEAMS)}
        title="Teams"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
