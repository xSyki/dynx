import { useEffect, useState } from 'react'

import styled from 'styled-components/native'
import { v4 as uuidv4 } from 'uuid'

import { t } from '../../../i18n/config'
import {
  GameModeEnum,
  GameStatusEnum,
  IPlayer,
  useGameStore,
} from '../../../stores/gameStore'
import StyledButton from '../../Atoms/StyledButton'
import StyledText from '../../Atoms/StyledText'
import Player from './Player.tsx/Player'

function Players() {
  const [{ gameMode, players }, { setGameStatus, setPlayers }] = useGameStore()

  const [temporaryPlayers, setTemporaryPlayers] = useState<IPlayer[]>(
    players || []
  )

  useEffect(() => {
    if (!temporaryPlayers.length) {
      handleAddNewPlayer()
    }
  }, [])

  useEffect(() => {
    setPlayers(temporaryPlayers)
  }, [temporaryPlayers])

  const handleSubmit = () => {
    if (!canSubmit()) return

    const filteredPlayers = temporaryPlayers.filter(
      (player) => player.name !== ''
    )

    setPlayers(filteredPlayers)
    setGameStatus(GameStatusEnum.CATEGORY)
  }

  const handleAddNewPlayer = () => {
    if (
      temporaryPlayers.length &&
      temporaryPlayers[temporaryPlayers.length - 1].name === ''
    )
      return

    setTemporaryPlayers((players) => [...players, { id: uuidv4(), name: '' }])
  }

  const canAddNewPlayer = () => {
    return (
      temporaryPlayers.length !== 0 &&
      temporaryPlayers[temporaryPlayers.length - 1].name === ''
    )
  }

  const canSubmit = () => {
    const filteredPlayers = temporaryPlayers.filter(
      (player) => player.name !== ''
    )

    const uniqPlayers = [
      ...new Set(filteredPlayers.map((player) => player.name)),
    ]

    if (uniqPlayers.length !== filteredPlayers.length) return false

    if (gameMode === GameModeEnum.EVE && filteredPlayers.length < 3)
      return false

    if (gameMode === GameModeEnum.TEAMS && filteredPlayers.length < 2)
      return false

    return true
  }

  return (
    <StyledAddPlayers>
      {gameMode === GameModeEnum.EVE && (
        <StyledText size="bg">{t('add_player')}</StyledText>
      )}
      {gameMode === GameModeEnum.TEAMS && (
        <StyledText size="bg">{t('add_teams')}</StyledText>
      )}
      <StyledPlayers>
        {temporaryPlayers.map((player, index) => (
          <Player
            key={player.id}
            player={player}
            index={index}
            handleAddNewPlayer={handleAddNewPlayer}
            setTemporaryPlayers={setTemporaryPlayers}
          />
        ))}
      </StyledPlayers>
      <StyledButton
        title={t('add_new_player')}
        onPress={handleAddNewPlayer}
        disabled={canAddNewPlayer()}
      />
      <StyledButton
        title={t('submit')}
        onPress={handleSubmit}
        disabled={!canSubmit()}
      />
    </StyledAddPlayers>
  )
}

export default Players

const StyledAddPlayers = styled.SafeAreaView`
  flex: 1;
`

const StyledPlayers = styled.ScrollView`
  flex-grow: 1;
`
