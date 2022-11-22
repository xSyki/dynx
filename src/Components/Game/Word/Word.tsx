import { Button, SafeAreaView, Text } from 'react-native'

import { useGameStore } from '../../../stores/gameStore'
import { GameStageEnum, useRoundStore } from '../../../stores/roundStore'
import Timer from '../Timer/Timer'

function Word() {
  const [{ settings }] = useGameStore()
  const [{ rounds, roundNumber }, { setGameStage }] = useRoundStore()

  const round = rounds[roundNumber]

  return (
    <SafeAreaView>
      <Text>{round.word.word}</Text>
      {settings.timer ? (
        <Timer />
      ) : (
        <Button
          title="Results"
          onPress={() => setGameStage(GameStageEnum.RESULT)}
        />
      )}
    </SafeAreaView>
  )
}

export default Word
