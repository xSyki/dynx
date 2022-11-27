import { SafeAreaView } from 'react-native'

import { GameStatusEnum, useGameStore } from '../../stores/gameStore'
import { GameStageEnum, useRoundStore } from '../../stores/roundStore'
import StyledButton from '../Atoms/StyledButton'
import End from './End/End'
import Players from './Players/Players'
import Result from './Result/Result'
import Start from './Start/Start'
import Word from './Word/Word'

function Game() {
  const [, { setGameStatus }] = useGameStore()
  const [{ gameStage }] = useRoundStore()

  const handleBack = () => {
    setGameStatus(GameStatusEnum.CATEGORY)
  }

  return (
    <SafeAreaView>
      <StyledButton onPress={handleBack} title="Back" />
      {gameStage === GameStageEnum.START && <Start />}
      {gameStage === GameStageEnum.PLAYERS && <Players />}
      {gameStage === GameStageEnum.WORD && <Word />}
      {gameStage === GameStageEnum.RESULT && <Result />}
      {gameStage === GameStageEnum.END && <End />}
    </SafeAreaView>
  )
}

export default Game
