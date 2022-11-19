import { SafeAreaView, Text } from 'react-native'

import { GameStatusEnum, useGameStore } from '../../stores/gameStore'
import Category from '../Category/Category'
import GameMode from '../GameMode/GameMode'
import Players from '../Players/Players'

function GameRouter() {
  const [{ gameStatus }] = useGameStore()

  const renderGame = (gameStatus: GameStatusEnum) => {
    switch (gameStatus) {
      case GameStatusEnum.GAME_MODE:
        return <GameMode />
      case GameStatusEnum.PLAYERS:
        return <Players />
      case GameStatusEnum.CATEGORY:
        return <Category />
      default:
        return (
          <SafeAreaView>
            <Text>Error</Text>
          </SafeAreaView>
        )
    }
  }

  return renderGame(gameStatus)
}

export default GameRouter
