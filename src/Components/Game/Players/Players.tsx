import { Button, SafeAreaView, Text } from 'react-native'

import { GameStageEnum, useRoundStore } from '../../../stores/roundStore'

function Players() {
  const [{ rounds, roundNumber }, { setGameStage }] = useRoundStore()

  const round = rounds[roundNumber]

  return (
    <SafeAreaView>
      <Text>{round.players.map((player) => player.name).join(' - ')}</Text>
      <Button title="Start" onPress={() => setGameStage(GameStageEnum.WORD)} />
    </SafeAreaView>
  )
}

export default Players
