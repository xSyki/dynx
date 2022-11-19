import { Button, SafeAreaView } from 'react-native'

import { GameStatusEnum, useGameStore } from '../../stores/gameStore'

import AddPlayers from './AddPlayers/AddPlayers'

function Players() {
  const [, { setGameStatus }] = useGameStore()

  const handleBack = () => {
    setGameStatus(GameStatusEnum.GAME_MODE)
  }

  return (
    <SafeAreaView>
      <Button onPress={handleBack} title="Back" />
      <AddPlayers />
    </SafeAreaView>
  )
}

export default Players
