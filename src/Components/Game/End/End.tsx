import { Button, SafeAreaView, Text } from 'react-native'

import {
  GameStatusEnum,
  IPlayer,
  useGameStore,
} from '../../../stores/gameStore'
import { useRoundStore } from '../../../stores/roundStore'

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
        <Text key={result.player.id}>
          {result.player.name}: {result.score}
        </Text>
      ))}
      <Button title="Start next game" onPress={handleStartNextGame} />
      <Button title="Exit" onPress={handleExit} />
    </SafeAreaView>
  )
}

export default End
