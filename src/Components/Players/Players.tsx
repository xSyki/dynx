import { Button, SafeAreaView, Text } from 'react-native'

import {
  GameModeEnum,
  GameStatusEnum,
  useGameStore,
} from '../../stores/gameStore'

import SinglePlayer from './SinglePlayer/SinglePlayer'
import Teams from './Teams/Teams'

function Players() {
  const [{ gameMode }, { setGameStatus }] = useGameStore()

  const handleBack = () => {
    setGameStatus(GameStatusEnum.GAME_MODE)
  }

  return (
    <SafeAreaView>
      <Button onPress={handleBack} title="Back" />
      <Text>Players</Text>
      {gameMode === GameModeEnum.TEAMS && <Teams />}
      {gameMode === GameModeEnum.EVE && <SinglePlayer />}
    </SafeAreaView>
  )
}

export default Players
