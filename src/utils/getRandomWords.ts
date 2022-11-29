import { GameModeEnum, IPlayer } from '../stores/gameStore'
import { IWord } from '../stores/roundStore'
import { getRoundLength } from './getRounds'

export default function getRandomWords(
  words: IWord[],
  players: IPlayer[],
  gameMode: GameModeEnum,
  rounds: number
) {
  const shuffledWords = words.sort(() => 0.5 - Math.random())

  if (gameMode === GameModeEnum.TEAMS) {
    const numberOfWord = players.length * rounds

    const selectedWords = shuffledWords.slice(0, numberOfWord)

    return selectedWords
  }

  const numberOfWord = getRoundLength(players.length, GameModeEnum.EVE) * rounds

  const selectedWords = shuffledWords.slice(0, numberOfWord)

  return selectedWords
}
