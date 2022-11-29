import { SafeAreaView } from 'react-native'

import { GameStageEnum, useRoundStore } from '../../../stores/roundStore'
import StyledButton from '../../Atoms/StyledButton'
import StyledText from '../../Atoms/StyledText'

function Players() {
  const [{ rounds, roundNumber }, { setGameStage }] = useRoundStore()

  const round = rounds[roundNumber]

  return (
    <SafeAreaView>
      <StyledText>
        {round.players.map((player) => player.name).join(' - ')}
      </StyledText>
      <StyledButton
        title="Start"
        onPress={() => setGameStage(GameStageEnum.WORD)}
      />
    </SafeAreaView>
  )
}

export default Players
