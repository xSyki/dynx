import { t } from 'i18next'
import styled from 'styled-components/native'

import {
  GameModeEnum,
  GameStatusEnum,
  useGameStore,
} from '../../../stores/gameStore'
import StyledButton from '../../Atoms/StyledButton'
import StyledText from '../../Atoms/StyledText'

export default function GameMode() {
  const [, { setGameMode, setGameStatus }] = useGameStore()

  const handleSetGameMode = (gameMode: GameModeEnum) => {
    setGameMode(gameMode)
    setGameStatus(GameStatusEnum.PLAYERS)
  }

  return (
    <StyledGameMode>
      <StyledText size="bg">{t('game_mode')}</StyledText>
      <StyledButton
        onPress={() => handleSetGameMode(GameModeEnum.EVE)}
        title={t('eve')}
      />
      <StyledButton
        onPress={() => handleSetGameMode(GameModeEnum.TEAMS)}
        title={t('teams')}
      />
    </StyledGameMode>
  )
}

const StyledGameMode = styled.SafeAreaView`
  width: 100%;
`
