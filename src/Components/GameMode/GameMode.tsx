import styled from 'styled-components/native'

import {
  GameModeEnum,
  GameStatusEnum,
  useGameStore,
} from '../../stores/gameStore'
import StyledButton from '../Atoms/StyledButton'
import StyledText from '../Atoms/StyledText'

export default function GameMode() {
  const [, { setGameMode, setGameStatus }] = useGameStore()

  const handleSetGameMode = (gameMode: GameModeEnum) => {
    setGameMode(gameMode)
    setGameStatus(GameStatusEnum.PLAYERS)
  }

  return (
    <StyledGameMode>
      <StyledText size="bg">Game mode</StyledText>
      <StyledButton
        onPress={() => handleSetGameMode(GameModeEnum.EVE)}
        title="1vs1"
      />
      <StyledButton
        onPress={() => handleSetGameMode(GameModeEnum.TEAMS)}
        title="Teams"
      />
    </StyledGameMode>
  )
}

const StyledGameMode = styled.SafeAreaView`
  width: 100%;
`
