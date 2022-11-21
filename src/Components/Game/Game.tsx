import { Button, SafeAreaView } from 'react-native'

import { GameStatusEnum, useGameStore } from '../../stores/gameStore'
import { GameStageEnum, useRoundStore } from '../../stores/roundStore'

import Players from './Players/Players'
import Result from './Result/Result'
import Start from './Start/Start'
import Timer from './Timer/Timer'
import Word from './Word/Word'

function Game() {
  const [, { setGameStatus }] = useGameStore()
  const [{ gameStage }] = useRoundStore()

  const handleBack = () => {
    setGameStatus(GameStatusEnum.CATEGORY)
  }

  return (
    <SafeAreaView>
      <Button onPress={handleBack} title="Back" />
      {gameStage === GameStageEnum.START && <Start />}
      {gameStage === GameStageEnum.PLAYERS && <Players />}
      {gameStage === GameStageEnum.WORD && <Word />}
      {gameStage === GameStageEnum.TIMER && <Timer />}
      {gameStage === GameStageEnum.RESULT && <Result />}
    </SafeAreaView>
  )
}

export default Game
