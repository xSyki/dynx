import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'

import { GameStageEnum, useRoundStore } from '../../../stores/roundStore'
import StyledText from '../../Atoms/StyledText'

function Timer() {
  const [, { setGameStage }] = useRoundStore()

  const [timeLeft, setTimeLeft] = useState(5.9)

  useEffect(() => {
    const delay = 100

    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - delay / 1000)
    }, delay)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameStage(GameStageEnum.RESULT)
    }
  }, [timeLeft])

  const timeToDisplay = Math.floor(timeLeft)

  return (
    <SafeAreaView>
      <StyledText>{timeToDisplay ? timeToDisplay : 'GO'}</StyledText>
    </SafeAreaView>
  )
}

export default Timer
