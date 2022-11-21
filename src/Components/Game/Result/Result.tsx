import { Button, SafeAreaView } from 'react-native'

import { GameStageEnum, useRoundStore } from '../../../stores/roundStore'

function Result() {
  const [
    { rounds, roundNumber },
    { increaseRoundNumber, setGameStage, changeRoundResult },
  ] = useRoundStore()

  const endRound = () => {
    if (rounds.length === roundNumber) {
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
      <Button title="Lost" onPress={() => handlePlayersLost()} />
      <Button title="Won" onPress={() => handlePlayersWon()} />
    </SafeAreaView>
  )
}

export default Result
