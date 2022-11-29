import { SafeAreaView } from 'react-native'

import { t } from '../../../i18n/config'
import { GameStageEnum, useRoundStore } from '../../../stores/roundStore'
import StyledButton from '../../Atoms/StyledButton'

function Result() {
  const [
    { rounds, roundNumber },
    { increaseRoundNumber, setGameStage, changeRoundResult },
  ] = useRoundStore()

  const endRound = () => {
    if (rounds.length - 1 === roundNumber) {
      setGameStage(GameStageEnum.END)
      return
    }
    increaseRoundNumber()
    setGameStage(GameStageEnum.PLAYERS)
  }

  const handlePlayersLost = () => {
    endRound()
  }

  const handlePlayersWon = () => {
    changeRoundResult()
    endRound()
  }

  return (
    <SafeAreaView>
      <StyledButton title={t('lost')} onPress={() => handlePlayersLost()} />
      <StyledButton title={t('won')} onPress={() => handlePlayersWon()} />
    </SafeAreaView>
  )
}

export default Result
