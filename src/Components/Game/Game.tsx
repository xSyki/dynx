import { GameStatusEnum, useGameStore } from '../../stores/gameStore'
import GameMode from '../GameMode/GameMode'
import Players from '../Players/Players'

function Game() {
  const [{ gameStatus }] = useGameStore()

  const renderGame = (gameStatus: GameStatusEnum) => {
    switch (gameStatus) {
      case GameStatusEnum.GAME_MODE:
        return <GameMode />
      case GameStatusEnum.PLAYERS:
        return <Players />
    }
  }

  return renderGame(gameStatus)
}

export default Game
