import { GameModeEnum, IPlayer } from '../stores/gameStore'
import { IWord } from '../stores/roundStore'

export default function getRandomWords(
  words: IWord[],
  players: IPlayer[],
  gameMode: GameModeEnum,
  rounds: number
) {
  const shuffledWords = words.sort(() => 0.5 - Math.random())

  const numberOfWord = ((players.length * (players.length - 1)) / 2) * rounds

  const selectedWords = shuffledWords.slice(0, numberOfWord)

  return selectedWords
}
