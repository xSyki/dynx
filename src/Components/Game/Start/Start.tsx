import { Button, SafeAreaView } from 'react-native'

import { GameStageEnum, useRoundStore } from '../../../stores/roundStore'

function Start() {
  const [, { setGameStage }] = useRoundStore()

  return (
    <SafeAreaView>
      <Button
        title="start"
        onPress={() => setGameStage(GameStageEnum.PLAYERS)}
      />
    </SafeAreaView>
  )
}

export default Start
