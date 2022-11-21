import { SafeAreaView, Text } from 'react-native'

import { IPlayer, useGameStore } from '../../../stores/gameStore'
import { useRoundStore } from '../../../stores/roundStore'

interface IResult {
  player: IPlayer
  score: number
}

function End() {
  const [{ players }] = useGameStore()
  const [{ rounds }] = useRoundStore()

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
      .sort((result, nextResult) => result.score - nextResult.score)
  }

  return (
    <SafeAreaView>
      {getPlaces().map((result) => (
        <Text key={result.player.id}>
          {result.player.name}: {result.score}
        </Text>
      ))}
    </SafeAreaView>
  )
}

export default End
