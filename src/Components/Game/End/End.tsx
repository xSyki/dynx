import { SafeAreaView } from 'react-native'

import { t } from '../../../i18n/config'
import {
  GameStatusEnum,
  IPlayer,
  useGameStore,
} from '../../../stores/gameStore'
import { useRoundStore } from '../../../stores/roundStore'
import StyledButton from '../../Atoms/StyledButton'
import StyledText from '../../Atoms/StyledText'

interface IResult {
  player: IPlayer
  score: number
}

function End() {
  const [{ players }, { setGameStatus }] = useGameStore()
  const [{ rounds }, { resetGame }] = useRoundStore()

  const getPlaces = (): IResult[] => {
    return players
      .reduce((results: IResult[], player): IResult[] => {
        return [
          ...results,
          {
            player,
            score: rounds
              .filter((round) =>
                round.players.map((player) => player.id).includes(player.id)
              )
              .reduce((score, round) => {
                return score + round.result
              }, 0),
          },
        ]
      }, [])
      .sort((result, nextResult) => nextResult.score - result.score)
  }

  const handleStartNextGame = () => {
    resetGame()
    setGameStatus(GameStatusEnum.CATEGORY)
  }

  const handleExit = () => {
    resetGame()
    setGameStatus(GameStatusEnum.GAME_MODE)
  }

  return (
    <SafeAreaView>
      {getPlaces().map((result) => (
        <StyledText key={result.player.id}>
          {result.player.name}: {result.score}
        </StyledText>
      ))}
      <StyledButton
        title={t('start_next_game')}
        onPress={handleStartNextGame}
      />
      <StyledButton title={t('exit')} onPress={handleExit} />
    </SafeAreaView>
  )
}

export default End
