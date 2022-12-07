import { GameModeEnum, IPlayer } from '../stores/gameStore'
import { IRound, IWord } from '../stores/roundStore'

interface IPlayersRound {
  players: [IPlayer] | [IPlayer, IPlayer]
}

export function getRoundLength(playersLength: number, gameMode: GameModeEnum) {
  if (gameMode === GameModeEnum.TEAMS) {
    return playersLength
  }

  return (playersLength * (playersLength - 1)) / 2
}

function getRounds(
  players: IPlayer[],
  words: IWord[],
  gameMode: GameModeEnum,
  numberRounds: number
) {
  const playersRounds: IPlayersRound[] = []
  const gamePlayersRounds: IPlayersRound[] = []
  const rounds: IRound[] = []

  if (gameMode === GameModeEnum.TEAMS) {
    playersRounds.push(
      ...players.reduce(
        (rounds: IPlayersRound[], player): IPlayersRound[] => [
          ...rounds,
          {
            players: [player],
          },
        ],
        []
      )
    )
  }

  if (gameMode === GameModeEnum.EVE) {
    players.forEach((player, index) => {
      const partnerPlayers = JSON.parse(JSON.stringify(players)) as IPlayer[]
      partnerPlayers.splice(0, index + 1)

      if (!partnerPlayers.length) return

      playersRounds.push(
        ...partnerPlayers.reduce(
          (rounds: IPlayersRound[], partnerPlayer): IPlayersRound[] => {
            return [...rounds, { players: [player, partnerPlayer] }]
          },
          []
        )
      )
    })
  }

  for (let i = 0; numberRounds > i; i++) {
    gamePlayersRounds.push(...playersRounds)
  }

  gamePlayersRounds.forEach((gamePlayersRound, index) => {
    rounds.push({
      ...gamePlayersRound,
      word: words[index - Math.floor(index / words.length) * words.length],
      result: 0,
    })
  })

  return rounds
}

export default getRounds
