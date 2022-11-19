import { useEffect, useState } from 'react'
import { Button, SafeAreaView, Text, TextInput } from 'react-native'
import { v4 as uuidv4 } from 'uuid'

import {
  GameModeEnum,
  GameStatusEnum,
  IPlayer,
  useGameStore,
} from '../../../stores/gameStore'

function AddPlayers() {
  const [{ gameMode, players }, { setGameStatus, setPlayers }] = useGameStore()

  const [temporaryPlayers, setTemporaryPlayers] = useState<IPlayer[]>(
    players || []
  )

  useEffect(() => {
    handleAddNewPlayer()
  }, [])

  const handleSubmit = () => {
    setPlayers(temporaryPlayers)
    setGameStatus(GameStatusEnum.CATEGORY)
  }

  const handleAddNewPlayer = () => {
    setTemporaryPlayers((players) => [...players, { id: uuidv4(), name: '' }])
  }

  const editPlayerName = (id: string, name: string) => {
    setTemporaryPlayers((players) => {
      return players.map((player) => {
        if (player.id === id) {
          player.name = name
        }
        return player
      })
    })
  }

  const handleDeletePlayer = (id: string) => {
    setTemporaryPlayers((players) => {
      return players.filter((player) => player.id !== id)
    })
  }

  return (
    <SafeAreaView>
      {gameMode === GameModeEnum.EVE && <Text>Add player</Text>}
      {gameMode === GameModeEnum.TEAMS && <Text>Add teams</Text>}
      {temporaryPlayers.map((player, index) => (
        <SafeAreaView key={player.id}>
          <Text>{index + 1}</Text>
          <TextInput
            placeholder="name"
            value={
              temporaryPlayers.find(
                (playerGeneral) => playerGeneral.id === player.id
              )?.name || ''
            }
            onChangeText={(name) => editPlayerName(player.id, name)}
          />
          <Button
            title="Delete"
            onPress={() => handleDeletePlayer(player.id)}
          />
        </SafeAreaView>
      ))}
      <Button title="Add new player" onPress={handleAddNewPlayer} />
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  )
}

export default AddPlayers
