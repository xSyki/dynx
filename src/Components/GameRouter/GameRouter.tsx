import { SafeAreaView } from 'react-native'

import styled from 'styled-components/native'

import { GameStatusEnum, useGameStore } from '../../stores/gameStore'
import { RouterEnum, useRouterStore } from '../../stores/routerStore'
import StyledButton from '../Atoms/StyledButton'
import StyledText from '../Atoms/StyledText'
import Category from '../Category/Category'
import Game from '../Game/Game'
import GameMode from '../GameMode/GameMode'
import Players from '../Players/Players'
import Settings from '../Settings/Settings'

function GameRouter() {
  const [, { navigate }] = useRouterStore()
  const [{ gameStatus }, { setGameStatus }] = useGameStore()

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

  const handleBack = () => {
    switch (gameStatus) {
      case GameStatusEnum.GAME_MODE:
        navigate(RouterEnum.SPLASH_SCREEN)
        break
      case GameStatusEnum.PLAYERS:
        setGameStatus(GameStatusEnum.GAME_MODE)
        break
      case GameStatusEnum.CATEGORY:
        setGameStatus(GameStatusEnum.PLAYERS)
        break
      case GameStatusEnum.SETTINGS:
        setGameStatus(GameStatusEnum.CATEGORY)
        break
    }
  }

  return (
    <StyledGame>
      {gameStatus !== GameStatusEnum.GAME && (
        <StyledHeader>
          <StyledButton size="sm" title="Back" onPress={handleBack} />
        </StyledHeader>
      )}
      <GameStatusWrapper>{renderGame(gameStatus)}</GameStatusWrapper>
    </StyledGame>
  )
}

export default GameRouter

const StyledGame = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
`

const StyledHeader = styled.View``

const GameStatusWrapper = styled.SafeAreaView`
  flex-grow: 1;
`
