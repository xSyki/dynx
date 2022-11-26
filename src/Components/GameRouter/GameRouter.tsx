import { SafeAreaView } from 'react-native'

import { GameStatusEnum, useGameStore } from '../../stores/gameStore'
import StyledText from '../Atoms/StyledText'
import Category from '../Category/Category'
import Game from '../Game/Game'
import GameMode from '../GameMode/GameMode'
import Players from '../Players/Players'
import Settings from '../Settings/Settings'

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
      case GameStatusEnum.SETTINGS:
        return <Settings />
      case GameStatusEnum.GAME:
        return <Game />
      default:
        return (
          <SafeAreaView>
            <StyledText>Error</StyledText>
          </SafeAreaView>
        )
    }
  }

  return <SafeAreaView>{renderGame(gameStatus)}</SafeAreaView>
}

export default GameRouter
