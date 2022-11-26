import { SafeAreaView } from 'react-native'

import { useGameStore } from '../../../stores/gameStore'
import { GameStageEnum, useRoundStore } from '../../../stores/roundStore'
import StyledButton from '../../Atoms/StyledButton'
import StyledText from '../../Atoms/StyledText'
import Timer from '../Timer/Timer'

function Word() {
  const [{ settings }] = useGameStore()
  const [{ rounds, roundNumber }, { setGameStage }] = useRoundStore()

  const round = rounds[roundNumber]

  return (
    <SafeAreaView>
      <StyledText>{round.word.word}</StyledText>
      {settings.timer ? (
        <Timer />
      ) : (
        <StyledButton
          title="Results"
          onPress={() => setGameStage(GameStageEnum.RESULT)}
        />
      )}
    </SafeAreaView>
  )
}

export default Word
